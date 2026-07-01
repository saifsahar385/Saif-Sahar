import React, { useState, useEffect } from "react";
import { Lock, FileText, Truck, RefreshCw, CheckCircle2, ShieldAlert, List, ArrowRight } from "lucide-react";
import { TranslationSet } from "../translations";

interface AdminPortalProps {
  t: TranslationSet;
}

export default function AdminPortal({ t }: AdminPortalProps) {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [bookings, setBookings] = useState<any[]>([]);
  const [customsRequests, setCustomsRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Update target tracking forms
  const [selectedBookingId, setSelectedBookingId] = useState("");
  const [bookingStatus, setBookingStatus] = useState("");
  const [bookingLoc, setBookingLoc] = useState("");
  const [bookingDel, setBookingDel] = useState("");
  const [bookingTimelineNext, setBookingTimelineNext] = useState("");

  const [selectedCustomsId, setSelectedCustomsId] = useState("");
  const [customsStatus, setCustomsStatus] = useState("");

  const [successBanner, setSuccessBanner] = useState("");

  const fetchAdminData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/data");
      if (response.ok) {
        const data = await response.json();
        setBookings(data.bookings || []);
        setCustomsRequests(data.customsRequests || []);
      }
    } catch (err) {
      console.error("Error fetching admin metrics:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authorized) {
      fetchAdminData();
    }
  }, [authorized]);

  const handleAuthorize = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    
    // Easy secure-by-default access code: sgtyc786
    if (password.trim() === "sgtyc786") {
      setAuthorized(true);
    } else {
      setErrorMsg("Incorrect access code. Please try again.");
    }
  };

  const handleUpdateBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBookingId) return;

    try {
      const response = await fetch("/api/admin/update-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedBookingId,
          status: bookingStatus,
          currentLocation: bookingLoc,
          expectedDelivery: bookingDel,
          nextTimelineStep: bookingTimelineNext
        })
      });

      if (response.ok) {
        setSuccessBanner("Logistics timeline updated successfully!");
        fetchAdminData();
        // Clear updates
        setBookingTimelineNext("");
        setTimeout(() => setSuccessBanner(""), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateCustoms = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCustomsId) return;

    try {
      const response = await fetch("/api/admin/update-customs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedCustomsId,
          status: customsStatus
        })
      });

      if (response.ok) {
        setSuccessBanner("Customs clearance status updated successfully!");
        fetchAdminData();
        setTimeout(() => setSuccessBanner(""), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSelectBooking = (b: any) => {
    setSelectedBookingId(b.id);
    setBookingStatus(b.status || "");
    setBookingLoc(b.currentLocation || "");
    setBookingDel(b.expectedDelivery || "");
  };

  const handleSelectCustoms = (c: any) => {
    setSelectedCustomsId(c.id);
    setCustomsStatus(c.status || "");
  };

  return (
    <section id="admin" className="py-20 bg-slate-100 dark:bg-slate-900 border-t border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-primary-blue dark:text-blue-400 bg-blue-100 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full">
            Restricted Area
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight mt-3">
            {t.adminPortal}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base mt-2">
            {t.adminDesc}
          </p>
        </div>

        {/* Access Barrier Form */}
        {!authorized ? (
          <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-xl text-center">
            <div className="w-12 h-12 bg-rose-50 dark:bg-rose-950/40 rounded-full flex items-center justify-center text-rose-500 mx-auto mb-4">
              <Lock className="w-6 h-6" />
            </div>

            <h4 className="text-base font-black text-slate-800 dark:text-white uppercase tracking-wider mb-2">Gate Pass Password Required</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Enter the administration security code <strong>sgtyc786</strong> to access.
            </p>

            {errorMsg && (
              <p className="text-xs font-bold text-red-600 dark:text-red-400 mb-4 bg-red-50 dark:bg-red-950/20 p-2 rounded">
                {errorMsg}
              </p>
            )}

            <form onSubmit={handleAuthorize} className="space-y-4">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Access Password"
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg py-3 px-4 text-center font-bold outline-none focus:border-primary-blue dark:text-white text-sm"
              />

              <button
                type="submit"
                className="w-full bg-primary-blue hover:bg-blue-800 text-white font-black text-xs uppercase tracking-widest py-3.5 rounded-lg shadow-md transition-colors"
              >
                Access Administration
              </button>
            </form>
          </div>
        ) : (
          /* Authorized Dashboard Portal */
          <div className="space-y-10 animate-fade-in">
            {/* success notification */}
            {successBanner && (
              <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-secondary-green text-green-700 dark:text-green-400 rounded-xl font-bold flex items-center gap-2">
                <span>✓</span>
                <span>{successBanner}</span>
              </div>
            )}

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <p className="text-xs text-slate-400 font-bold uppercase">Total Reserves</p>
                <p className="text-2xl font-black text-primary-blue dark:text-blue-400 mt-1">{bookings.length}</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <p className="text-xs text-slate-400 font-bold uppercase">Filing Requests</p>
                <p className="text-2xl font-black text-secondary-green dark:text-green-400 mt-1">{customsRequests.length}</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm col-span-2">
                <p className="text-xs text-slate-400 font-bold uppercase">Access Node</p>
                <p className="text-sm font-mono text-slate-600 dark:text-slate-300 mt-1 break-all">Authenticated Node (Gate Pass Verified)</p>
              </div>
            </div>

            {/* Content Lists Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Side: Bookings list & status update */}
              <div className="lg:col-span-6 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="text-base font-black text-slate-800 dark:text-white uppercase tracking-widest border-b pb-3 mb-4 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary-blue" />
                  <span>Interactive Bookings Grid</span>
                </h4>

                {/* List */}
                <div className="space-y-3 max-h-[300px] overflow-y-auto mb-6 pr-2">
                  {bookings.map((b) => (
                    <div
                      key={b.id}
                      onClick={() => handleSelectBooking(b)}
                      className={`p-3.5 rounded-lg border cursor-pointer transition-colors ${
                        selectedBookingId === b.id
                          ? "bg-primary-blue/5 border-primary-blue dark:bg-slate-700/50"
                          : "bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">{b.id}</p>
                          <p className="text-[10px] text-slate-500 font-bold">Client: {b.fullName} | Route: {b.pickupLocation} ➔ {b.destination}</p>
                        </div>
                        <span className="text-[10px] font-black bg-primary-blue/10 text-primary-blue px-2 py-0.5 rounded uppercase">
                          {b.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Edit Form */}
                {selectedBookingId && (
                  <form onSubmit={handleUpdateBooking} className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4">
                    <h5 className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">Update Booking: {selectedBookingId}</h5>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[9px] font-black uppercase text-slate-400 mb-1">Current Location</label>
                        <input
                          type="text"
                          value={bookingLoc}
                          onChange={(e) => setBookingLoc(e.target.value)}
                          className="w-full bg-white dark:bg-slate-800 border rounded py-1.5 px-2.5 text-xs font-bold dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-black uppercase text-slate-400 mb-1">Expected Delivery</label>
                        <input
                          type="text"
                          value={bookingDel}
                          onChange={(e) => setBookingDel(e.target.value)}
                          className="w-full bg-white dark:bg-slate-800 border rounded py-1.5 px-2.5 text-xs font-bold dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[9px] font-black uppercase text-slate-400 mb-1">Active Status</label>
                        <input
                          type="text"
                          value={bookingStatus}
                          onChange={(e) => setBookingStatus(e.target.value)}
                          className="w-full bg-white dark:bg-slate-800 border rounded py-1.5 px-2.5 text-xs font-bold dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-black uppercase text-slate-400 mb-1">Insert Timeline Step</label>
                        <input
                          type="text"
                          value={bookingTimelineNext}
                          onChange={(e) => setBookingTimelineNext(e.target.value)}
                          placeholder="e.g. Cleared Custom House"
                          className="w-full bg-white dark:bg-slate-800 border rounded py-1.5 px-2.5 text-xs font-bold dark:text-white"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 bg-primary-blue hover:bg-blue-800 text-white font-black text-[10px] uppercase tracking-widest rounded transition-colors"
                    >
                      Apply Logistics Updates
                    </button>
                  </form>
                )}
              </div>

              {/* Right Side: Customs Requests list & update */}
              <div className="lg:col-span-6 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="text-base font-black text-slate-800 dark:text-white uppercase tracking-widest border-b pb-3 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-secondary-green" />
                  <span>Customs Filing Decs Grid</span>
                </h4>

                {/* List */}
                <div className="space-y-3 max-h-[300px] overflow-y-auto mb-6 pr-2">
                  {customsRequests.map((c) => (
                    <div
                      key={c.id}
                      onClick={() => handleSelectCustoms(c)}
                      className={`p-3.5 rounded-lg border cursor-pointer transition-colors ${
                        selectedCustomsId === c.id
                          ? "bg-secondary-green/5 border-secondary-green dark:bg-slate-700/50"
                          : "bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">{c.id}</p>
                          <p className="text-[10px] text-slate-500 font-bold">Company: {c.companyName} | Goods: {c.goodsDescription}</p>
                        </div>
                        <span className="text-[10px] font-black bg-secondary-green/10 text-secondary-green px-2 py-0.5 rounded uppercase">
                          {c.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Edit Customs Form */}
                {selectedCustomsId && (
                  <form onSubmit={handleUpdateCustoms} className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4 animate-fade-in">
                    <h5 className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">Update Customs status: {selectedCustomsId}</h5>
                    
                    <div>
                      <label className="block text-[9px] font-black uppercase text-slate-400 mb-1">Filing Status State</label>
                      <input
                        type="text"
                        value={customsStatus}
                        onChange={(e) => setCustomsStatus(e.target.value)}
                        placeholder="e.g. Under Valuation Assessment / Cleared"
                        className="w-full bg-white dark:bg-slate-800 border rounded py-1.5 px-2.5 text-xs font-bold dark:text-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 bg-secondary-green hover:bg-green-700 text-white font-black text-[10px] uppercase tracking-widest rounded transition-colors"
                    >
                      Apply Customs Change
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
