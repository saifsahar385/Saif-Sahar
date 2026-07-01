export interface TranslationSet {
  companyName: string;
  companySubName: string;
  heroHeadline: string;
  heroSubHeading: string;
  bookTransport: string;
  reqCustoms: string;
  callNow: string;
  whatsApp: string;
  navHome: string;
  navAbout: string;
  navServices: string;
  navCustoms: string;
  navFleet: string;
  navBooking: string;
  navTracking: string;
  navGallery: string;
  navFAQ: string;
  navContact: string;
  aboutTitle: string;
  aboutDesc1: string;
  aboutDesc2: string;
  aboutPoints: string[];
  servicesTitle: string;
  servicesSubtitle: string;
  servicesList: { title: string; desc: string; icon: string }[];
  fleetTitle: string;
  fleetSubtitle: string;
  specifications: string;
  whyTitle: string;
  whyPoints: { title: string; desc: string; icon: string }[];
  bookingTitle: string;
  bookingSubtitle: string;
  fullName: string;
  phone: string;
  email: string;
  pickup: string;
  destination: string;
  goodsType: string;
  weight: string;
  vehicleType: string;
  date: string;
  notes: string;
  uploadImage: string;
  submit: string;
  customsTitle: string;
  customsSubtitle: string;
  importExport: string;
  import: string;
  export: string;
  companyLabel: string;
  goodsDesc: string;
  hsCode: string;
  invoiceUpload: string;
  packingListUpload: string;
  blAwbUpload: string;
  ntn: string;
  trackingTitle: string;
  trackingSubtitle: string;
  trackingPlaceholder: string;
  trackBtn: string;
  trackingResults: string;
  currentStatus: string;
  currentLoc: string;
  expectedDel: string;
  timelineLabel: string;
  faqTitle: string;
  faqSubtitle: string;
  faqs: { q: string; a: string }[];
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonials: { name: string; company: string; text: string; rating: number }[];
  stats: { value: string; label: string }[];
  contactTitle: string;
  contactAddress: string;
  addressLabel: string;
  phoneLabel: string;
  hoursLabel: string;
  hoursValue: string;
  officeNo: string;
  adminPortal: string;
  adminDesc: string;
}

export const translations: Record<"ur" | "en", TranslationSet> = {
  ur: {
    companyName: "سیف گڈز ٹرانسپورٹ اینڈ یحییٰ کسٹم کلیئرنگ ایجنسی",
    companySubName: "محفوظ لاجسٹکس اور بارڈر کسٹم کلیئرنس کے ماہرین",
    heroHeadline: "سیف گڈز ٹرانسپورٹ اینڈ یحییٰ کسٹم کلیئرنگ ایجنسی",
    heroSubHeading: "پاکستان بھر میں محفوظ سامان کی ترسیل، درآمد و برآمد کسٹم کلیئرنس، اور قابل اعتماد لاجسٹکس خدمات۔ طورخم بارڈر پر آپ کا بااعتماد پارٹنر۔",
    bookTransport: "ٹرانسپورٹ بک کریں",
    reqCustoms: "کسٹم کلیئرنس کی درخواست",
    callNow: "ابھی کال کریں",
    whatsApp: "واٹس ایپ کریں",
    navHome: "ہوم",
    navAbout: "ہمارے بارے میں",
    navServices: "ٹرانسپورٹ سروسز",
    navCustoms: "کسٹم کلیئرنس",
    navFleet: "فلیٹ",
    navBooking: "آن لائن بکنگ",
    navTracking: "شپمنٹ ٹریکنگ",
    navGallery: "گیلری",
    navFAQ: "سوالات",
    navContact: "رابطہ کریں",
    aboutTitle: "ہمارے بارے میں معلومات",
    aboutDesc1: "سیف گڈز ٹرانسپورٹ اور یحییٰ کسٹم کلیئرنگ ایجنسی طورخم بارڈر پر قائم پاکستان کی ایک مایہ ناز کارگو اور کسٹم ایجنسی ہے۔ ہم گزشتہ 35 سال سے زائد عرصے سے اپنے قابل قدر صارفین کو بلا تعطل خدمات فراہم کر رہے ہیں۔",
    aboutDesc2: "ہماری ٹیم طورخم، خیبر پختونخوا اور پورے پاکستان میں کسٹم قوانین، پی ایس ڈبلیو (PSW)، درآمدی و برآمدی دستاویزات اور ٹریفک مینجمنٹ کی باریکیوں سے بخوبی واقف ہے، جس سے آپ کا سامان کم سے کم وقت میں اور انتہائی حفاظت سے منزل تک پہنچتا ہے۔",
    aboutPoints: [
      "پیشہ ور اور تجربہ کار کسٹم کلیئرنس ٹیم",
      "طورخم بارڈر پر تیز ترین کسٹم کلیئرنس اور کراسنگ",
      "انتہائی محفوظ اور قابل اعتماد ترسیل کا عمل",
      "پاکستان سنگل ونڈو (PSW) اور کسٹم کونسلنگ",
      "پورے پاکستان میں سڑکوں کے ذریعے مال برداری"
    ],
    servicesTitle: "ہماری پریمیم خدمات",
    servicesSubtitle: "ہم آپ کے کاروبار کے لیے ٹرانسپورٹ اور درآمد و برآمد کے کسٹم معاملات کا جامع حل پیش کرتے ہیں۔",
    servicesList: [
      { title: "گڈز ٹرانسپورٹ سروس", desc: "پاکستان کے تمام شہروں کے لیے محفوظ اور تیز رفتار مال برداری اور سڑک کے ذریعے ترسیل۔", icon: "🚚" },
      { title: "کنٹینر ٹرانسپورٹیشن", desc: "امپورٹ اور ایکسپورٹ کے لیے 20 اور 40 فٹ کے وزنی کنٹینرز کی محفوظ بارڈر کراسنگ۔", icon: "🚛" },
      { title: "لوکل اور لانگ روٹ", desc: "کراچی پورٹ سے طورخم اور کابل تک طویل ترین روٹس پر باقاعدہ فلیٹ سروس۔", icon: "🛣️" },
      { title: "ڈور ٹو ڈور ڈیلیوری", desc: "کارگو کی لوڈنگ سے لے کر منزل مقصود تک گاہک کی دہلیز پر بحفاظت پہنچانا۔", icon: "📦" },
      { title: "امپورٹ کسٹم کلیئرنس", desc: "طورخم بارڈر پر کسٹم قوانین کے تحت درآمدی سامان کی فوری اور قانونی اسسمنٹ اور کلیئرنس۔", icon: "📥" },
      { title: "ایکسپورٹ کسٹم کلیئرنس", desc: "بیرون ملک برآمد کیے جانے والے سامان کی چیکنگ، ویلیو ایشن اور سرحد پار روانگی۔", icon: "📤" },
      { title: "کسٹم دستاویزات کی تیاری", desc: "تمام کسٹم ریکارڈز، فائلنگ، ٹیکس چالان اور ویلیو ایشن اسناد کی تسلی بخش تیاری۔", icon: "📄" },
      { title: "PSW سروسز", desc: "پاکستان سنگل ونڈو (PSW) پورٹل پر رجسٹریشن، فائلنگ اور مالیاتی کسٹم انضمام۔", icon: "💻" },
      { title: "فریٹ فارورڈنگ", desc: "آپ کے گڈز کے لیے سستے ترین اور بہترین بین الاقوامی روٹس کی پلاننگ۔", icon: "🌐" },
      { title: "لاجسٹکس سلوشنز", desc: "صنعتی اور زرعی سامان کی سپلائی چین اور بروقت گودام منتقلی کا انتظام۔", icon: "⚙️" },
      { title: "بارڈر کسٹم کلیئرنس", desc: "طورخم اور افغان سرحد پر ہنگامی اور حساس کارگو کی فوری کلیئرنس۔", icon: "🚧" },
      { title: "کسٹم کنسلٹنسی", desc: "کسٹم ڈیوٹی، ٹیکسوں اور درآمدی و برآمدی قوانین پر مفت اور پیشہ ورانہ مشاورت۔", icon: "👨‍💼" }
    ],
    fleetTitle: "ہمارا شاندار فلیٹ",
    fleetSubtitle: "روایتی پاکستانی آرٹ سے سجے پریمیم ہینو ٹرک اور کنٹینر ٹریلرز جو پہاڑی راستوں پر بھی انتہائی پائیدار ہیں۔",
    specifications: "گاڑی کی خصوصیات",
    whyTitle: "ہمیں کیوں منتخب کریں؟",
    whyPoints: [
      { title: "پیشہ ور عملہ", desc: "ہمارا کسٹم اور لاجسٹکس عملہ قوانین سے مکمل لیس ہے۔", icon: "👥" },
      { title: "تیز ترین کسٹم کلیئرنس", desc: "طورخم بارڈر پر سیکنڈوں میں دستاویزات کی فائلنگ۔", icon: "⚡" },
      { title: "24/7 کسٹمر سپورٹ", desc: "ہم اپنے کلائنٹس کی رہنمائی کے لیے ہر وقت تیار ہیں۔", icon: "📞" },
      { title: "محفوظ ترین ڈیلیوری", desc: "سامان کو موسمی اور حادثاتی نقصان سے بچانے کا پختہ انتظام۔", icon: "🛡️" },
      { title: "مناسب ترین کرایہ", desc: "پورے مارکیٹ میں سب سے کم اور معیاری ٹیرف چارجز۔", icon: "💰" },
      { title: "تجربہ کار لائسنس یافتہ ٹیم", desc: "حکومت پاکستان سے منظور شدہ اور رجسٹرڈ کسٹم ایجنسی۔", icon: "🏅" }
    ],
    bookingTitle: "آن لائن ٹرانسپورٹ بکنگ",
    bookingSubtitle: "اپنے سامان کی ملک گیر ترسیل کے لیے نیچے دی گئی معلومات درج کر کے فوری بکنگ کی درخواست بھیجیں۔",
    fullName: "پورا نام",
    phone: "فون نمبر",
    email: "ای میل ایڈریس",
    pickup: "لوڈنگ کی جگہ (Pickup Location)",
    destination: "منزل مقصود (Destination)",
    goodsType: "سامان کی قسم",
    weight: "وزن (ٹن میں)",
    vehicleType: "مطلوبہ گاڑی",
    date: "بکنگ کی تاریخ",
    notes: "اضافی تفصیلات / ہدایات",
    uploadImage: "سامان کی تصویر لوڈ کریں (اختیاری)",
    submit: "درخواست جمع کریں",
    customsTitle: "کسٹم کلیئرنس کی درخواست",
    customsSubtitle: "طورخم بارڈر پر درآمد یا برآمد کی کلیئرنس کے لیے اپنی کمپنی اور کنسائنمنٹ کی تفصیلات فراہم کریں۔",
    importExport: "کسٹم کا طریقہ کار",
    import: "درآمد (Import)",
    export: "برآمد (Export)",
    companyLabel: "کمپنی کا نام",
    goodsDesc: "سامان کی تفصیلی وضاحت",
    hsCode: "ایچ ایس کوڈ (HS Code)",
    invoiceUpload: "انوائس اپ لوڈ کریں (Invoice)",
    packingListUpload: "پیکنگ لسٹ اپ لوڈ کریں (Packing List)",
    blAwbUpload: "بی ایل / ایئروے بل (B/L or AWB)",
    ntn: "این ٹی این نمبر (NTN)",
    trackingTitle: "اپنے کارگو اور کسٹم کا اسٹیٹس دیکھیں",
    trackingSubtitle: "فراہم کردہ بکنگ نمبر درج کر کے لائیو لوکیشن اور موجودہ کلیئرنس فیز معلوم کریں۔",
    trackingPlaceholder: "مثال کے طور پر: SGT-1001",
    trackBtn: "ٹریک کریں",
    trackingResults: "شپمنٹ ٹریکنگ کے نتائج",
    currentStatus: "موجودہ صورتحال:",
    currentLoc: "موجودہ مقام:",
    expectedDel: "متوقع پہنچنے کی تاریخ:",
    timelineLabel: "ترسیل کا ٹائم لائن گراف",
    faqTitle: "اکثر پوچھے جانے والے سوالات (FAQ)",
    faqSubtitle: "کسٹم کلیئرنس اور ٹرانسپورٹیشن سے متعلق عمومی سوالات کے جوابات۔",
    faqs: [
      { q: "سیف گڈز ٹرانسپورٹ کہاں تک سروس فراہم کرتی ہے؟", a: "ہم کراچی، لاہور، فیصل آباد، پشاور سمیت پاکستان کے تمام بڑے اور چھوٹے شہروں سے طورخم بارڈر اور افغانستان (کابل، جلال آباد وغیرہ) تک محفوظ کارگو ترسیل فراہم کرتے ہیں۔" },
      { q: "یحییٰ کسٹم کلیئرنگ ایجنسی کس بارڈر پر فعال ہے؟", a: "ہماری بنیادی کسٹم کلیئرنس خدمات طورخم بارڈر (پاکستان-افغانستان سرحد) پر واقع ہیں، جہاں ہمارا دفتر طورخم قومی اڈہ پر گزشتہ 35 سال سے قائم ہے۔" },
      { q: "کسٹم کلیئرنس کے لیے کون سی دستاویزات لازمی ہیں؟", a: "درآمد یا برآمد کے لیے کمرشل انوائس (Invoice)، پیکنگ لسٹ (Packing List)، بل آف لیڈنگ یا اے ڈبلیو بی (BL/AWB)، این ٹی این (NTN) اور سیلز ٹیکس رجسٹریشن دستاویزات درکار ہوتی ہیں۔" },
      { q: "پاکستان سنگل ونڈو (PSW) سروس کیا ہے؟", a: "یہ پاکستان کسٹمز کا جدید ڈیجیٹل سسٹم ہے جس کے ذریعے درآمد کنندگان اور برآمد کنندگان کی آن لائن دستاویزات کی جانچ اور رجسٹریشن کی جاتی ہے۔ ہم اس پورٹل پر کسٹمرز کو مکمل رجسٹر اور فائلنگ سروس فراہم کرتے ہیں۔" },
      { q: "بکنگ کے بعد مجھے ٹریکنگ نمبر کب ملے گا؟", a: "بکنگ فارم جمع کرنے یا ہمارے واٹس ایپ پر آرڈر کنفرم کرنے کے فوری بعد آپ کو SGT-1001 کی طرز پر ایک منفرد ٹریکنگ نمبر جاری کیا جائے گا جسے آپ لائیو ٹریک کر سکتے ہیں۔" },
      { q: "کیا آپ افغان ٹرانزٹ کسٹم کلیئرنس بھی کرتے ہیں؟", a: "جی ہاں، ہم پاکستان پورٹس (کراچی، قاسم پورٹ) سے طورخم بارڈر کے راستے افغانستان کے لیے ٹرانزٹ ٹریڈ کی کسٹم کلیئرنس اور محفوظ نقل و حمل کے ماہر ہیں۔" },
      { q: "ٹرک کی بکنگ کے لیے کتنا ایڈوانس دینا پڑتا ہے؟", a: "معاہدے کے وقت 50 فیصد ایڈوانس ادا کرنا ہوتا ہے، جبکہ بقیہ 50 فیصد رقم سامان کے منزل پر پہنچنے یا کسٹم کلیئرنس مکمل ہونے پر ادا کی جاتی ہے۔" },
      { q: "کیا آپ کے پاس کنٹینر ٹریلرز اور اوور سائز کارگو کے لیے گاڑیاں ہیں؟", a: "جی ہاں، ہمارے فلیٹ میں 22 وہیلر، 18 وہیلر، 10 وہیلر، فلیٹ بیڈ ٹریلرز اور ہائی سائیڈ لوکل ہینو ٹرکس شامل ہیں جو وزنی اور اوور سائز کارگو اٹھانے کی صلاحیت رکھتے ہیں۔" },
      { q: "کیا مائع یا نازک سامان کی ترسیل ممکن ہے؟", a: "جی ہاں، ہمارے پاس کیمیکلز، پٹرولیم مصنوعات کے ٹینکرز اور نازک سامان کے لیے خصوصی طور پر پیکڈ کنٹینرز اور واٹر پروف ترپال سے لیس گاڑیاں موجود ہیں۔" },
      { q: "ہم کسٹم کلیئرنس سروس حاصل کرنے کے لیے کیسے رابطہ کریں؟", a: "آپ ہمارے ہیڈ کسٹم ایجنٹ 'یحییٰ' سے براہ راست فون نمبر +92 307 0098086 یا ویب سائٹ پر موجود کسٹم فارم کے ذریعے رابطہ کر سکتے ہیں۔" }
    ],
    testimonialsTitle: "صارفین کی رائے",
    testimonialsSubtitle: "ہمارے مطمئن کسٹمرز اور کاروباری شراکت داروں کے چند تاثرات۔",
    testimonials: [
      { name: "حاجی گل خان", company: "افغان ڈرائے فروٹ امپورٹرز", text: "یحییٰ کسٹم کلیئرنگ ایجنسی کے کام کرنے کی رفتار بے مثال ہے۔ ہمارا انگور کا تازہ کارگو طورخم بارڈر پر کسٹم کلیئرنس کے مراحل سے چند گھنٹوں میں گزر کر محفوظ طریقے سے کابل روانہ ہو گیا۔", rating: 5 },
      { name: "طارق جاوید", company: "ٹیکسٹائل مینوفیکچررز لاہور", text: "ہم گزشتہ 5 سال سے سیف گڈز ٹرانسپورٹ کے ساتھ کام کر رہے ہیں۔ ان کے ڈرائیورز قابل بھروسہ ہیں اور ان کے روایتی ہینو ٹرکس موسمی خرابی کے باوجود وقت پر سامان پہنچاتے ہیں۔", rating: 5 },
      { name: "ظفر پٹھان", company: "پاک افغان ٹریڈ کارپوریشن", text: "پاکستان سنگل ونڈو (PSW) پر ہماری رجسٹریشن کے تمام مراحل سیف اینڈ یحییٰ ایجنسی نے اتنی آسانی سے مکمل کروائے کہ ہمیں کسی پریشانی کا سامنا نہیں کرنا پڑا۔ زبردست سروس!", rating: 5 }
    ],
    stats: [
      { value: "5000+", label: "کامیاب ترسیلات" },
      { value: "2500+", label: "کسٹم کلیئرنس فائلز" },
      { value: "1000+", label: "مطمئن گاہک" },
      { value: "35+", label: "سالہ مسلسل تجربہ" }
    ],
    contactTitle: "رابطہ اور ہیڈ آفس",
    contactAddress: "طورخم قومی اڈہ، آفس نمبر 4، ضلع خیبر، خیبر پختونخوا، پاکستان",
    addressLabel: "دفتر کا پتہ:",
    phoneLabel: "فون نمبرز برائے رابطہ:",
    hoursLabel: "اوقات کار:",
    hoursValue: "پیر تا ہفتہ: صبح 08:00 بجے تا رات 09:00 بجے (اتوار ہنگامی سروس دستیاب ہے)",
    officeNo: "آفس نمبر 4",
    adminPortal: "انتظامی پینل (Admin Portal)",
    adminDesc: "بکنگ اور کسٹم کلیئرنس کے اسٹیٹس کو تبدیل کرنے کے لیے انتظامی پینل استعمال کریں۔"
  },
  en: {
    companyName: "Saif Goods Transport & Yahaya Custom Clearing Agency",
    companySubName: "Experts in Secure Logistics & Border Customs Clearance",
    heroHeadline: "Saif Goods Transport & Yahaya Custom Clearing Agency",
    heroSubHeading: "Safe transport of goods across Pakistan, import & export customs clearance, and reliable logistics services. Your trusted partner at Torkham Border.",
    bookTransport: "Book Transport",
    reqCustoms: "Request Customs Clearance",
    callNow: "Call Now",
    whatsApp: "WhatsApp Us",
    navHome: "Home",
    navAbout: "About Us",
    navServices: "Transport Services",
    navCustoms: "Custom Clearance",
    navFleet: "Fleet",
    navBooking: "Online Booking",
    navTracking: "Shipment Tracking",
    navGallery: "Gallery",
    navFAQ: "FAQs",
    navContact: "Contact Us",
    aboutTitle: "About Our Company",
    aboutDesc1: "Saif Goods Transport and Yahaya Custom Clearing Agency is a leading cargo transit and customs clearance firm operating at the Torkham Border in Khyber Pakhtunkhwa, Pakistan. We have served our valued corporate and individual clients for more than 35 years.",
    aboutDesc2: "Our dedicated on-ground team is highly experienced in Pakistan Customs rules, the Pakistan Single Window (PSW) system, customs tariff valuation, import & export regulations, and safe fleet transit, ensuring your cargo clears without delay.",
    aboutPoints: [
      "Professional and licensed customs clearing agents",
      "Fastest clearance and transit operations at Torkham Border",
      "Highly secure, reliable, and trackable goods transport",
      "Pakistan Single Window (PSW) expert facilitation",
      "Reliable nationwide logistics covering Karachi to Torkham and Kabul"
    ],
    servicesTitle: "Our Premium Services",
    servicesSubtitle: "We provide comprehensive solutions for transport, forwarding, and import/export border clearances.",
    servicesList: [
      { title: "Goods Transport Service", desc: "Reliable and fast freight forwarding and road cargo services across all major cities of Pakistan.", icon: "🚚" },
      { title: "Container Transportation", desc: "Secure shipping of 20ft and 40ft containers with border clearance safety assurance.", icon: "🚛" },
      { title: "Local & Long Route Transit", desc: "Transit cargo route management stretching from Karachi Ports to Peshawar, Torkham, and Kabul.", icon: "🛣️" },
      { title: "Door-to-Door Delivery", desc: "Complete logistics management from initial loading points directly to the destination warehouse.", icon: "📦" },
      { title: "Import Customs Clearance", desc: "Fast documentation processing, tax duty calculation, and prompt clearance of goods entering Pakistan.", icon: "📥" },
      { title: "Export Customs Clearance", desc: "Quick verification, valuation assessments, and smooth border crossing for outbound goods.", icon: "📤" },
      { title: "Customs Documentation", desc: "Expert preparation of Goods Declaration (GD), invoice sheets, NTN filing, and regulatory paper audits.", icon: "📄" },
      { title: "PSW Services", desc: "Full Pakistan Single Window registration, commercial link setups, and financial module integration.", icon: "💻" },
      { title: "Freight Forwarding", desc: "Optimal routing, border clearance synchronization, and cost-effective logistics plans.", icon: "🌐" },
      { title: "Logistics Solutions", desc: "Supply chain scheduling, industrial raw material transport, and custom warehousing coordination.", icon: "⚙️" },
      { title: "Border Customs Clearance", desc: "Urgent handling of fresh fruit consignments, hazardous material clearance, and expedited pass-throughs.", icon: "🚧" },
      { title: "Customs Tariff Consultation", desc: "Professional tax consults, duty structures, HS code definitions, and trade law guidance.", icon: "👨‍💼" }
    ],
    fleetTitle: "Our Majestic Fleet",
    fleetSubtitle: "Featuring beautifully decorated traditional Pakistani Hino trucks and container trailers crafted for rugged mountain routes.",
    specifications: "Vehicle Specifications",
    whyTitle: "Why Choose Us?",
    whyPoints: [
      { title: "Professional Team", desc: "Fully licensed customs agents and dispatchers with years of on-ground expertise.", icon: "👥" },
      { title: "Fast Border Clearance", desc: "Advanced pre-filing systems that clear shipments in record times.", icon: "⚡" },
      { title: "24/7 Dedicated Support", desc: "Live client updates, status reviews, and phone/whatsapp hotlines.", icon: "📞" },
      { title: "Uncompromising Safety", desc: "All trucks equipped with weather-proof tarpaulins and safety tie-downs.", icon: "🛡️" },
      { title: "Affordable Pricing", desc: "Transparent, competitive pricing structures across all long and short routes.", icon: "💰" },
      { title: "Licensed Customs Agency", desc: "Fully registered and authorized by the Government of Pakistan and Federal Board of Revenue.", icon: "🏅" }
    ],
    bookingTitle: "Online Transport Booking",
    bookingSubtitle: "Fill in the goods transport parameters below to reserve a custom art truck or heavy vehicle for your cargo.",
    fullName: "Full Name",
    phone: "Phone Number",
    email: "Email Address",
    pickup: "Pickup Location",
    destination: "Destination Location",
    goodsType: "Type of Goods",
    weight: "Weight (in Tons)",
    vehicleType: "Required Truck Type",
    date: "Preferred Loading Date",
    notes: "Special Instructions / Additional Details",
    uploadImage: "Upload Cargo Photo (Optional)",
    submit: "Submit Booking Request",
    customsTitle: "Customs Clearance Request",
    customsSubtitle: "Submit your corporate details and shipping documents for quick customs filing at Torkham border.",
    importExport: "Clearance Type",
    import: "Import",
    export: "Export",
    companyLabel: "Company Name",
    goodsDesc: "Detailed Cargo Description",
    hsCode: "HS Code",
    invoiceUpload: "Upload Invoice Document",
    packingListUpload: "Upload Packing List Document",
    blAwbUpload: "Upload Bill of Lading (B/L) or Air Waybill",
    ntn: "National Tax Number (NTN)",
    trackingTitle: "Track Your Shipment & Customs Status",
    trackingSubtitle: "Enter your SGT Booking Number to inspect current checkpoints, location, and border clearance timeline.",
    trackingPlaceholder: "Example: SGT-1001",
    trackBtn: "Track Order",
    trackingResults: "Shipment Tracking Results",
    currentStatus: "Current Status:",
    currentLoc: "Current Location:",
    expectedDel: "Expected Delivery Date:",
    timelineLabel: "Logistics Timeline Path",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find answers to typical cargo shipping and customs clearance procedures.",
    faqs: [
      { q: "Where does Saif Goods Transport operate?", a: "We operate nationwide across Pakistan (including Karachi, Lahore, Rawalpindi, Peshawar) delivering goods straight to Torkham Border and across to Afghanistan cities like Kabul, Jalalabad, and Herat." },
      { q: "Which borders does Yahaya Customs Clearing cover?", a: "Our dedicated licensed customs operations are primarily based out of Torkham Border, Khyber Pakhtunkhwa, Pakistan's largest land trade portal to Central Asia." },
      { q: "What documents are required for border customs clearance?", a: "For commercial imports or exports, you require a commercial Invoice, Packing List, Bill of Lading (BL or AWB), NTN certificate, and Sales Tax registration proofs." },
      { q: "What is the Pakistan Single Window (PSW) system?", a: "PSW is a modernized, unified digital system launched by Pakistan Customs to consolidate financial declarations, import permits, and border clearances online. We specialize in registration and filing on PSW." },
      { q: "How long after booking will I receive my tracking ID?", a: "As soon as you submit the form and confirm with our dispatchers via phone/WhatsApp, a unique number (e.g. SGT-1001) is assigned to track your shipment's journey." },
      { q: "Do you clear Afghan Transit Trade cargo?", a: "Yes, we are premier specialists in Afghan Transit Trade, custom clearing cargo originating from Karachi Port (KICT/PICT) and transporting it securely to Kabul via Torkham." },
      { q: "What are the cargo freight payment terms?", a: "Generally, 50% is required at booking as an advance for diesel and driver dispatch, and the remaining 50% is payable upon safe delivery or customs clearance completion." },
      { q: "What types of heavy trucks do you have in your fleet?", a: "We operate multi-axle 22-wheelers, 18-wheelers, 10-wheelers, flatbeds, and local heavily-decorated Pakistani Hino trucks tailored for mountainous terrain." },
      { q: "Can you transport fragile or liquid chemical goods?", a: "Yes, we provide water-proof tarpaulin sheets and secure lashing. For liquid bulk cargo, we have vetted tankers and specialized container services." },
      { q: "How do I directly contact the customs agent?", a: "You can reach Yahaya, our senior Customs Agent, directly at +92 307 0098086 or use our customs online submission form on the website." }
    ],
    testimonialsTitle: "What Our Clients Say",
    testimonialsSubtitle: "Real feedback from long-term bilateral trading companies and merchants.",
    testimonials: [
      { name: "Haji Gul Khan", company: "Afghan Dry Fruit Importers", text: "Yahaya Custom Clearing Agency operates at light speed! Our fresh grapes shipment cleared Torkham border in mere hours and reached Kabul fresh. Highly recommended!", rating: 5 },
      { name: "Tariq Javed", company: "Textile Exporters Lahore", text: "We have used Saif Goods Transport for 5 years. Their drivers are seasoned professionals and their traditional Hino trucks navigate tough weather with ease.", rating: 5 },
      { name: "Zafar Pathan", company: "Pak-Afghan Trade Corp", text: "The team handled our complex Pakistan Single Window (PSW) registration smoothly. Fantastic service and absolute transparency throughout.", rating: 5 }
    ],
    stats: [
      { value: "5000+", label: "Successful Deliveries" },
      { value: "2500+", label: "Customs Cleared Files" },
      { value: "1000+", label: "Active Clients" },
      { value: "35+", label: "Years On-Border Service" }
    ],
    contactTitle: "Contact & Head Office",
    contactAddress: "Torkham National Terminal, Office No. 4, District Khyber, Khyber Pakhtunkhwa, Pakistan",
    addressLabel: "Office Address:",
    phoneLabel: "Phone Hotlines:",
    hoursLabel: "Business Hours:",
    hoursValue: "Monday - Saturday: 08:00 AM - 09:00 PM (Sunday emergency services available)",
    officeNo: "Office No. 4",
    adminPortal: "Admin Dashboard Panel",
    adminDesc: "Use this portal to edit live booking, tracking positions, and customs status."
  }
};
