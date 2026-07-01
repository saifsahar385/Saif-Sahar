import React from "react";
import { MapPin, Phone, Clock, Mail, ShieldAlert, Navigation } from "lucide-react";
import { TranslationSet } from "../translations";

interface ContactProps {
  t: TranslationSet;
}

export default function Contact({ t }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue via-secondary-green to-accent-gold"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-primary-blue dark:text-blue-400 bg-blue-100 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full">
            Direct Reach & Location
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight mt-3">
            {t.contactTitle}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base mt-2">
            Visit us at our custom terminal offices or get on-call coordinates directly with Saif Rahman & Custom Agent Yahaya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* 1. Office Location */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-lg bg-primary-blue/10 flex items-center justify-center text-primary-blue shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-wider">
                    {t.addressLabel}
                  </h4>
                  <p className="text-sm font-black text-slate-800 dark:text-white uppercase mt-1 leading-relaxed">
                    {t.contactAddress}
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-black bg-accent-gold/20 text-accent-gold border border-accent-gold/30 px-2.5 py-0.5 rounded uppercase">
                    {t.officeNo}
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Direct Phones */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-lg bg-secondary-green/10 flex items-center justify-center text-secondary-green shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-3.5 w-full">
                  <h4 className="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-wider">
                    {t.phoneLabel}
                  </h4>
                  
                  {/* Phone 1: Saif Rahman */}
                  <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                    <div>
                      <p className="text-xs font-black text-slate-800 dark:text-white uppercase">Saif Rahman</p>
                      <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Managing Director</p>
                    </div>
                    <a
                      href="tel:+923005020756"
                      className="px-3 py-1.5 bg-primary-blue hover:bg-blue-800 text-white font-black text-[10px] uppercase rounded tracking-wider shadow"
                    >
                      +92 300 5020756
                    </a>
                  </div>

                  {/* Phone 2: Agent Yahaya */}
                  <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                    <div>
                      <p className="text-xs font-black text-slate-800 dark:text-white uppercase">Agent Yahaya</p>
                      <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Head Customs Agent</p>
                    </div>
                    <a
                      href="tel:+923070098086"
                      className="px-3 py-1.5 bg-secondary-green hover:bg-green-700 text-white font-black text-[10px] uppercase rounded tracking-wider shadow"
                    >
                      +92 307 0098086
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Operational Hours */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-lg bg-accent-gold/10 flex items-center justify-center text-accent-gold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-wider">
                    {t.hoursLabel}
                  </h4>
                  <p className="text-sm font-black text-slate-800 dark:text-white mt-1 leading-relaxed">
                    {t.hoursValue}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Block: Interactive Map representation / coordinates (Geometric Design) */}
          <div className="lg:col-span-7 bg-slate-950 text-white p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* grid design background */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#16a34a 1.5px, transparent 1.5px)",
                backgroundSize: "16px 16px"
              }}
            ></div>

            {/* upper map design header */}
            <div className="relative z-10 flex justify-between items-center mb-6">
              <div>
                <span className="text-[10px] font-black tracking-widest text-accent-gold uppercase bg-accent-gold/15 px-2.5 py-1 rounded">
                  GPS Coordinates Verified
                </span>
                <h4 className="text-lg font-black uppercase mt-1">Torkham Customs Yard 34°01'15&quot;N 71°05'02&quot;E</h4>
              </div>
              <Navigation className="w-6 h-6 text-primary-blue animate-pulse" />
            </div>

            {/* Simulated Vector Map layout */}
            <div className="relative z-10 aspect-[16/9] border-2 border-white/10 rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center">
              {/* grid paths */}
              <div className="absolute inset-0 opacity-20 bg-cover" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "10px 10px" }}></div>
              
              {/* Fake Roads and Border Line */}
              <svg className="absolute inset-0 w-full h-full text-slate-800" strokeWidth="2" stroke="currentColor" fill="none">
                {/* Pakistan Route */}
                <path d="M0,150 Q150,140 250,110 T500,100" stroke="#1e293b" strokeWidth="6" />
                <path d="M0,150 Q150,140 250,110 T500,100" stroke="#16a34a" strokeWidth="2" strokeDasharray="5,5" />
                {/* Border line */}
                <line x1="250" y1="0" x2="250" y2="300" stroke="#ef4444" strokeWidth="4" strokeDasharray="10,5" />
              </svg>

              {/* Float Pins */}
              <div className="absolute left-[20%] top-[40%] flex flex-col items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping absolute"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 border border-white"></span>
                <span className="text-[9px] bg-slate-950 px-1.5 py-0.5 rounded border border-white/10 text-slate-300 font-mono mt-1">Peshawar Office</span>
              </div>

              <div className="absolute left-[47%] top-[30%] flex flex-col items-center">
                <span className="w-3 h-3 rounded-full bg-primary-blue animate-ping absolute"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-primary-blue border border-white flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                </span>
                <span className="text-[9px] bg-accent-gold text-slate-950 font-black px-2 py-0.5 rounded shadow mt-1">HEAD OFFICE #4</span>
              </div>

              <div className="absolute left-[75%] top-[25%] flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-500 border border-white"></span>
                <span className="text-[9px] bg-slate-950 px-1.5 py-0.5 rounded border border-white/10 text-slate-300 font-mono mt-1">Kabul Transit</span>
              </div>

              {/* Map labels */}
              <div className="absolute bottom-2 left-3 bg-slate-950/80 backdrop-blur text-[10px] text-slate-400 font-mono border border-white/10 p-1 rounded">
                WEST: Afghanistan | EAST: Pakistan
              </div>
            </div>

            {/* Bottom contact help note */}
            <div className="relative z-10 bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-3 mt-6">
              <ShieldAlert className="w-5 h-5 text-accent-gold shrink-0 animate-bounce" />
              <p className="text-[11px] text-slate-300 leading-normal">
                <strong>Attention:</strong> For urgent customs valuation, border transit permits, or container locking disputes, please dial <strong>Managing Director Saif Rahman</strong> directly. Our on-ground office operates with 24/7 emergency dispatch coordinators.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
