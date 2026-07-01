export interface TimelineStep {
  status: string;
  time: string;
  location: string;
  done: boolean;
}

export interface Booking {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  pickupLocation: string;
  destination: string;
  goodsType: string;
  weight: string;
  vehicleType: string;
  bookingDate: string;
  notes: string;
  status: "Pending" | "In Transit" | "Customs Pending" | "Delivered" | string;
  currentLocation: string;
  expectedDelivery: string;
  timeline: TimelineStep[];
}

export interface CustomsRequest {
  id: string;
  companyName: string;
  phone: string;
  email: string;
  goodsDescription: string;
  hsCode: string;
  requestType: "Import" | "Export" | string;
  ntn: string;
  notes: string;
  status: "Pending" | "Processing" | "Cleared" | string;
  createdAt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
}
