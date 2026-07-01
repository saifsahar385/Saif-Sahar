import React, { useState, useRef } from "react";
import { Calendar, User, Phone, Mail, MapPin, Weight, Truck, MessageSquare, Upload, CheckCircle, Copy, FileText } from "lucide-react";
import { TranslationSet } from "../translations";

interface BookingProps {
  t: TranslationSet;
}

export default function Booking({ t }: BookingProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    pickupLocation: "",
    destination: "",
    goodsType: "",
    weight: "",
    vehicleType: "22 Wheeler Container",
    bookingDate: new Date().toISOString().split("T")[0],
    notes: ""
  });

  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<{ id: string; msg: string } | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);
  const [fileName, setFileName] = useState("");
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const vehicleOptions = [
    "22 Wheeler Container Trailer",
    "18 Wheeler High-Side Truck",
    "10 Wheeler Hino Ranger Art Truck",
    "6 Wheeler Shehzore Canter",
    "Flatbed Heavy Trailer",
    "Liquid Bulk Cargo Tanker"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessData(null);

    if (!formData.fullName || !formData.phone || !formData.pickupLocation || !formData.destination || !formData.goodsType) {
      setErrorMsg("Please fill in all required fields marked with *");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const resData = await response.json();
      if (response.ok) {
        setSuccessData({
          id: resData.booking.id,
          msg: "Your cargo booking has been registered successfully!"
        });
        // Clear Form
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          pickupLocation: "",
          destination: "",
          goodsType: "",
          weight: "",
          vehicleType: "22 Wheeler Container",
          bookingDate: new Date().toISOString().split("T")[0],
          notes: ""
        });
        setFileName("");
      } else {
        setErrorMsg(resData.error || "Failed to submit booking.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (successData?.id) {
      navigator.clipboard.writeText(successData.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="booking" className="py-20 bg-white dark:bg-slate-950 relative">
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-primary-blue dark:text-blue-400 bg-blue-100 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full">
            Online Booking Engine
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight mt-3">
            {t.bookingTitle}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base mt-2">
            {t.bookingSubtitle}
          </p>
        </div>

        {/* Success Modal */}
        {successData && (
          <div className="mb-8 p-6 bg-green-50 dark:bg-green-950/30 border-2 border-secondary-green rounded-2xl flex flex-col items-center text-center shadow-xl animate-fade-in relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-green/10 rounded-full blur-2xl"></div>
            <CheckCircle className="w-16 h-16 text-secondary-green mb-4" />
            <h4 className="text-xl font-extrabold text-slate-900 dark:text-white uppercase">Reservation Successful!</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-lg">
              {successData.msg} Your designated driver and Hino cargo transport is queued for dispatch.
            </p>
            
            {/* Tracking ID Copy Box */}
            <div className="mt-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center gap-4 shadow-sm w-full max-w-sm justify-between">
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Your Booking/Tracking ID</p>
                <p className="text-xl font-black text-primary-blue dark:text-blue-400 tracking-wider mt-0.5">{successData.id}</p>
              </div>
              
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary-blue hover:bg-blue-800 text-white font-bold text-xs uppercase transition-all"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy ID</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-slate-400 mt-4 italic font-bold">
              Use this code in the Shipment Tracking section to see live logistics checkpoints.
            </p>
          </div>
        )}

        {/* Error Notification */}
        {errorMsg && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-300 text-red-700 dark:text-red-400 rounded-xl text-sm font-bold flex items-center gap-3">
            <span className="text-lg">⚠️</span>
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Booking Form Layout */}
        <form onSubmit={handleSubmit} className="bg-slate-50 dark:bg-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                {t.fullName} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Muhammad Asim"
                  className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg py-3 pl-10 pr-4 text-sm font-bold focus:border-primary-blue outline-none transition-colors dark:text-white"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                {t.phone} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +92 300 1234567"
                  className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg py-3 pl-10 pr-4 text-sm font-bold focus:border-primary-blue outline-none transition-colors dark:text-white"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                {t.email}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. custom.trade@example.com"
                  className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg py-3 pl-10 pr-4 text-sm font-bold focus:border-primary-blue outline-none transition-colors dark:text-white"
                />
              </div>
            </div>

            {/* Loading / Pickup Location */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                {t.pickup} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-secondary-green" />
                <input
                  type="text"
                  name="pickupLocation"
                  required
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  placeholder="e.g. Karachi Port Terminal 1"
                  className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg py-3 pl-10 pr-4 text-sm font-bold focus:border-primary-blue outline-none transition-colors dark:text-white"
                />
              </div>
            </div>

            {/* Destination */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                {t.destination} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-red-500" />
                <input
                  type="text"
                  name="destination"
                  required
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="e.g. Torkham Border Customs Yard / Kabul"
                  className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg py-3 pl-10 pr-4 text-sm font-bold focus:border-primary-blue outline-none transition-colors dark:text-white"
                />
              </div>
            </div>

            {/* Goods Type */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                {t.goodsType} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  name="goodsType"
                  required
                  value={formData.goodsType}
                  onChange={handleChange}
                  placeholder="e.g. Textiles, Electronics, Dry Fruits"
                  className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg py-3 pl-10 pr-4 text-sm font-bold focus:border-primary-blue outline-none transition-colors dark:text-white"
                />
              </div>
            </div>

            {/* Weight */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                {t.weight}
              </label>
              <div className="relative">
                <Weight className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="e.g. 24 Tons"
                  className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg py-3 pl-10 pr-4 text-sm font-bold focus:border-primary-blue outline-none transition-colors dark:text-white"
                />
              </div>
            </div>

            {/* Required Vehicle Type */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                {t.vehicleType}
              </label>
              <div className="relative">
                <Truck className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg py-3 pl-10 pr-4 text-sm font-bold focus:border-primary-blue outline-none transition-colors dark:text-white appearance-none"
                >
                  {vehicleOptions.map((vOpt, idx) => (
                    <option key={idx} value={vOpt}>{vOpt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Booking Date */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                {t.date}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="date"
                  name="bookingDate"
                  value={formData.bookingDate}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg py-3 pl-10 pr-4 text-sm font-bold focus:border-primary-blue outline-none transition-colors dark:text-white"
                />
              </div>
            </div>

            {/* Custom file upload (Drag and Drop) */}
            <div className="md:col-span-2">
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                {t.uploadImage}
              </label>
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={triggerFileSelect}
                className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-5 text-center cursor-pointer hover:border-primary-blue dark:hover:border-blue-500 transition-colors bg-white dark:bg-slate-800/50"
              >
                <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {fileName ? (
                    <span className="text-secondary-green font-black">Selected: {fileName}</span>
                  ) : (
                    <span>Drag and drop your Cargo manifest photo, or <span className="text-primary-blue dark:text-blue-400 underline">browse</span></span>
                  )}
                </p>
                <p className="text-[10px] text-slate-400 mt-1">Supports JPG, PNG, PDF up to 10MB</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*,application/pdf"
                  className="hidden"
                />
              </div>
            </div>

            {/* Special Instructions / Notes */}
            <div className="md:col-span-2">
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                {t.notes}
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Fragile glassware inside, require robust tarpaulin sheets."
                  className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg py-3 pl-10 pr-4 text-sm font-bold focus:border-primary-blue outline-none transition-colors dark:text-white"
                ></textarea>
              </div>
            </div>

          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-secondary-green hover:bg-green-700 disabled:bg-slate-400 text-white font-black text-sm uppercase tracking-widest py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>SUBMITTING RESERVATION...</span>
              ) : (
                <>
                  <Truck className="w-5 h-5" />
                  <span>{t.submit}</span>
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}
