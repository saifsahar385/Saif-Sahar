import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client on server-side
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
  try {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
    console.log("Gemini client successfully initialized on the server.");
  } catch (error) {
    console.error("Failed to initialize Gemini client:", error);
  }
} else {
  console.warn("GEMINI_API_KEY is not configured or holds placeholder value.");
}

// In-Memory Database for bookings, customs requests, and shipments
const bookings = [
  {
    id: "SGT-1001",
    fullName: "محمد عاصم",
    phone: "+92 300 1234567",
    email: "asim@example.com",
    pickupLocation: "کراچی پورٹ",
    destination: "طورخم بارڈر",
    goodsType: "الیکٹرانکس کا سامان",
    weight: "24 ٹن",
    vehicleType: "22 وہیلر کنٹینر",
    bookingDate: "2026-07-02",
    notes: "احتیاط سے لوڈنگ کریں۔",
    status: "In Transit",
    currentLocation: "حیدرآباد بائی پاس",
    expectedDelivery: "2026-07-05",
    timeline: [
      { status: "بکنگ مکمل ہو گئی", time: "2026-07-01 10:00 AM", location: "کراچی پورٹ", done: true },
      { status: "لوڈنگ مکمل", time: "2026-07-01 04:00 PM", location: "کراچی پورٹ", done: true },
      { status: "سفر کا آغاز", time: "2026-07-02 08:00 AM", location: "کراچی پورٹ", done: true },
      { status: "راستے میں (In Transit)", time: "2026-07-02 02:30 PM", location: "حیدرآباد", done: true },
      { status: "منزل پر آمد", time: "متوقع 2026-07-05", location: "طورخم", done: false }
    ]
  },
  {
    id: "SGT-1002",
    fullName: "خان زمان",
    phone: "+92 301 7654321",
    email: "khan@example.com",
    pickupLocation: "پشاور",
    destination: "کابل، افغانستان",
    goodsType: "تعمیراتی مٹیریل",
    weight: "18 ٹن",
    vehicleType: "10 وہیلر ٹرک",
    bookingDate: "2026-06-30",
    notes: "کسٹم دستاویزات تیار ہیں۔",
    status: "Customs Pending",
    currentLocation: "طورخم بارڈر کسٹم کلیئرنس یارڈ",
    expectedDelivery: "2026-07-04",
    timeline: [
      { status: "بکنگ مکمل ہو گئی", time: "2026-06-30 09:00 AM", location: "پشاور", done: true },
      { status: "لوڈنگ مکمل", time: "2026-06-30 02:00 PM", location: "پشاور", done: true },
      { status: "طورخم بارڈر آمد", time: "2026-07-01 08:30 AM", location: "طورخم بارڈر", done: true },
      { status: "کسٹم کلیئرنس جاری (Customs Pending)", time: "2026-07-01 11:00 AM", location: "یحییٰ کسٹم کلیئرنگ ایجنسی، طورخم", done: true },
      { status: "بارڈر کراسنگ اور ڈیلیوری", time: "متوقع 2026-07-04", location: "کابل", done: false }
    ]
  },
  {
    id: "SGT-1003",
    fullName: "بلال احمد",
    phone: "+92 333 9876543",
    email: "bilal@example.com",
    pickupLocation: "لاہور انڈسٹریل ایریا",
    destination: "طورخم بارڈر",
    goodsType: "کپڑا (ٹیکسٹائل)",
    weight: "12 ٹن",
    vehicleType: "6 وہیلر شہزور کینٹر",
    bookingDate: "2026-06-28",
    notes: "واٹر پروف ترپال لازمی ہے۔",
    status: "Delivered",
    currentLocation: "طورخم قومی اڈہ",
    expectedDelivery: "2026-06-30",
    timeline: [
      { status: "بکنگ مکمل ہو گئی", time: "2026-06-28 11:00 AM", location: "لاہور", done: true },
      { status: "لوڈنگ مکمل", time: "2026-06-28 05:00 PM", location: "لاہور", done: true },
      { status: "راستے میں", time: "2026-06-29 06:00 AM", location: "راولپنڈی", done: true },
      { status: "پشاور بائی پاس", time: "2026-06-29 08:00 PM", location: "پشاور", done: true },
      { status: "کسٹم کلیئرنس مکمل", time: "2026-06-30 10:00 AM", location: "طورخم بارڈر", done: true },
      { status: "سامان کامیابی سے پہنچا دیا گیا (Delivered)", time: "2026-06-30 02:00 PM", location: "طورخم قومی اڈہ آفس نمبر 4", done: true }
    ]
  }
];

const customsRequests = [
  {
    id: "CUSTOM-2001",
    companyName: "افغان ٹریڈنگ ہاؤس",
    phone: "+92 321 4445556",
    email: "afghan.trading@example.com",
    goodsDescription: "تازہ پھل (انگور اور سیب)",
    hsCode: "08061000",
    requestType: "Export",
    ntn: "1234567-8",
    notes: "فوری کلیئرنس کی ضرورت ہے کیونکہ یہ خراب ہونے والا سامان ہے۔",
    status: "Processing",
    createdAt: "2026-07-01"
  }
];

// 1. API: Post Booking
app.post("/api/bookings", (req, res) => {
  const { fullName, phone, email, pickupLocation, destination, goodsType, weight, vehicleType, bookingDate, notes } = req.body;
  
  if (!fullName || !phone || !pickupLocation || !destination || !goodsType) {
    return res.status(400).json({ error: "براہ کرم تمام مطلوبہ فیلڈز پُر کریں۔" });
  }

  const newId = `SGT-${Math.floor(1000 + Math.random() * 9000)}`;
  const newBooking = {
    id: newId,
    fullName,
    phone,
    email: email || "",
    pickupLocation,
    destination,
    goodsType,
    weight: weight || "معلوم نہیں",
    vehicleType: vehicleType || "معیاری ٹرک",
    bookingDate: bookingDate || new Date().toISOString().split("T")[0],
    notes: notes || "",
    status: "Pending",
    currentLocation: pickupLocation,
    expectedDelivery: "طے ہونا باقی ہے",
    timeline: [
      { status: "بکنگ کی درخواست موصول ہوئی", time: new Date().toLocaleDateString("ur-PK") + " " + new Date().toLocaleTimeString("ur-PK"), location: pickupLocation, done: true },
      { status: "ترسیل کا شیڈول اور گاڑی کی تصدیق", time: "انتظار عام", location: pickupLocation, done: false }
    ]
  };

  bookings.push(newBooking);
  res.status(201).json({ message: "بکنگ کامیابی سے درج ہو گئی۔", booking: newBooking });
});

// 2. API: Get Booking/Tracking details
app.get("/api/tracking/:id", (req, res) => {
  const id = req.params.id.toUpperCase().trim();
  const booking = bookings.find((b) => b.id === id);
  if (booking) {
    res.json(booking);
  } else {
    res.status(404).json({ error: "فراہم کردہ بکنگ نمبر درست نہیں ہے یا کوئی ریکارڈ نہیں ملا۔" });
  }
});

// 3. API: Post Customs Request
app.post("/api/customs", (req, res) => {
  const { companyName, phone, email, goodsDescription, hsCode, requestType, ntn, notes } = req.body;

  if (!companyName || !phone || !goodsDescription || !requestType) {
    return res.status(400).json({ error: "براہ کرم تمام مطلوبہ فیلڈز پُر کریں۔" });
  }

  const newId = `CUSTOM-${Math.floor(2000 + Math.random() * 8000)}`;
  const newRequest = {
    id: newId,
    companyName,
    phone,
    email: email || "",
    goodsDescription,
    hsCode: hsCode || "فراہم نہیں کیا گیا",
    requestType,
    ntn: ntn || "فراہم نہیں کیا گیا",
    notes: notes || "",
    status: "Pending",
    createdAt: new Date().toISOString().split("T")[0]
  };

  customsRequests.push(newRequest);
  res.status(201).json({ message: "کسٹم کلیئرنس کی درخواست کامیابی سے موصول ہو گئی۔", request: newRequest });
});

// 4. API: Admin Get All Data
app.get("/api/admin/data", (req, res) => {
  res.json({ bookings, customsRequests });
});

// 5. API: Admin Update Booking/Tracking Status
app.post("/api/admin/update-booking", (req, res) => {
  const { id, status, currentLocation, expectedDelivery, nextTimelineStep } = req.body;
  const booking = bookings.find((b) => b.id === id);
  
  if (!booking) {
    return res.status(404).json({ error: "کوئی بکنگ نہیں ملی۔" });
  }

  if (status) booking.status = status;
  if (currentLocation) booking.currentLocation = currentLocation;
  if (expectedDelivery) booking.expectedDelivery = expectedDelivery;
  if (nextTimelineStep) {
    booking.timeline.push({
      status: nextTimelineStep,
      time: new Date().toISOString().replace('T', ' ').substring(0, 19),
      location: currentLocation || booking.currentLocation || "طورخم",
      done: true
    });
  }
  res.json({ success: true, booking });
});

// 6. API: Admin Update Customs Status
app.post("/api/admin/update-customs", (req, res) => {
  const { id, status } = req.body;
  const request = customsRequests.find((c) => c.id === id);

  if (!request) {
    return res.status(404).json({ error: "کوئی کسٹم کلیئرنس کی درخواست نہیں ملی۔" });
  }

  if (status) request.status = status;
  res.json({ success: true, request });
});

// 7. API: Bilingual Logistics Assistant (Gemini)
app.post("/api/chat", async (req, res) => {
  const { message, chatHistory } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message cannot be empty." });
  }

  if (!ai) {
    // Fallback if API key is not configured
    return res.json({
      text: `Welcome to Saif Goods Transport & Yahaya Custom Clearing Agency! 
      
Sorry, my AI server connection is temporarily offline, but you can reach our team directly:

• Saif Rahman (Transport & Rates): +92 300 5020756
• Agent Yahaya (Customs Clearance & PSW): +92 307 0098086

We operate daily out of Office No. 4, Torkham National Terminal, District Khyber, KPK, Pakistan!`,
    });
  }

  try {
    const formattedHistory = (chatHistory || []).map((h: { sender: "user" | "bot"; text: string }) => ({
      role: h.sender === "user" ? "user" : "model",
      parts: [{ text: m => h.text } as any], // handled safely by genai SDK
    }));

    // Standard format for genai parts
    const contents = (chatHistory || []).map((h: any) => ({
      role: h.sender === "user" ? "user" : "model",
      parts: [{ text: h.text }]
    }));

    contents.push({ role: "user", parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config: {
        systemInstruction: `You are 'SGT-YC Guide', the official bilingual (English & Urdu) AI Logistics & Customs Assistant for Saif Goods Transport & Yahaya Custom Clearing Agency.

Company Profile & Details:
- Name: Saif Goods Transport & Yahaya Custom Clearing Agency (SGT + YC)
- Office: Office No. 4, Torkham National Terminal, District Khyber, Khyber Pakhtunkhwa, Pakistan.
- Contact Personnel:
  - Saif Rahman (Transport, Truck Bookings, Rates): +92 300 5020756
  - Agent Yahaya (Customs Clearing, Board gate passing, PSW Registration, NTN Filing): +92 307 0098086
- Services Provided: Import & Export custom clearances, PSW filing and registration, transit trade handling, 22-wheeler/18-wheeler truck reservations, and secure freight delivery across Peshawar, Lahore, Karachi, Torkham, and Kabul.
- Experience: 35 Years of professional on-ground on-border trade experience.

Guidelines:
- Reply in the language (English or Urdu) that the user writes in.
- Be polite, professional, and clear.
- Keep answers concise, informative, and structured with clean bullet points.
- Feel free to use appropriate emojis.`,
        temperature: 0.7,
      },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error in backend:", error);
    res.status(500).json({
      error: "Error processing your chat message.",
      fallbackText: "Sorry, I encountered an issue. Please contact us directly via phone or WhatsApp at +92 307 0098086.",
    });
  }
});

// Vite & Static file handling
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
