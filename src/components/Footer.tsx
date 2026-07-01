import React, { useState, useEffect } from "react";
import { ArrowUp, MessageSquare, Truck, ShieldAlert } from "lucide-react";
import { TranslationSet } from "../translations";

interface FooterProps {
  t: TranslationSet;
}

export default function Footer({ t }: FooterProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t-8 border-primary-blue relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-secondary-green/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-blue flex flex-col items-center justify-center text-white rounded font-black border border-accent-gold transform rotate-3">
                <span className="text-[9px] font-black leading-none text-accent-gold">SGT</span>
                <span className="text-[9px] font-black leading-none text-white">YC</span>
              </div>
              <h3 className="text-sm font-black text-white tracking-widest uppercase">
                SAIF & YAHAYA
              </h3>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed uppercase font-black">
              {t.companyName}
            </p>

            <p className="text-[11px] text-slate-500 leading-relaxed">
              Leading bilateral trade, customs clearance agent, and heavy goods transportation services at Torkham border terminal, Khyber Pakhtunkhwa, Pakistan.
            </p>
          </div>

          {/* Column 2: Navigation Map */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest border-b-2 border-primary-blue pb-1 w-fit">
              Site Map
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About Us</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#customs" className="hover:text-white transition-colors">Customs Clear</a>
              <a href="#fleet" className="hover:text-white transition-colors">Our Fleet</a>
              <a href="#booking" className="hover:text-white transition-colors">Booking</a>
              <a href="#tracking" className="hover:text-white transition-colors">Track Order</a>
              <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQs</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Column 3: Custom regulatory notes */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest border-b-2 border-primary-blue pb-1 w-fit">
              Regulatory Seals
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li className="flex gap-2 items-start text-slate-400">
                <span className="text-secondary-green">✓</span>
                <span>FBR Custom House Clearing Agent License #4-THM</span>
              </li>
              <li className="flex gap-2 items-start text-slate-400">
                <span className="text-secondary-green">✓</span>
                <span>Pakistan Single Window (PSW) Registered Operator</span>
              </li>
              <li className="flex gap-2 items-start text-slate-400">
                <span className="text-secondary-green">✓</span>
                <span>Ministry of Commerce Land Transit Permit Certified</span>
              </li>
              <li className="flex gap-2 items-start text-slate-400">
                <span className="text-secondary-green">✓</span>
                <span>Khyber Chamber of Commerce active corporate membership</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Contact coordinate */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest border-b-2 border-primary-blue pb-1 w-fit">
              Headquarters
            </h4>
            <div className="space-y-3.5 text-xs">
              <p className="leading-relaxed">
                📍 Torkham National Terminal Office No. 4, District Khyber, Khyber Pakhtunkhwa, Pakistan
              </p>
              <p>
                📞 Saif Rahman: <a href="tel:+923005020756" className="text-accent-gold font-bold hover:underline">+92 300 5020756</a>
              </p>
              <p>
                📞 Agent Yahaya: <a href="tel:+923070098086" className="text-secondary-green font-bold hover:underline">+92 307 0098086</a>
              </p>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-[11px] text-slate-500">
          <p className="uppercase font-mono tracking-wider text-slate-500">
            &copy; {new Date().getFullYear()} SAIF GOODS TRANSPORT & YAHAYA CUSTOM CLEARING AGENCY. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>NTN: 4829302-9</span>
            <span>|</span>
            <span>CH License: 4-THM</span>
            <span>|</span>
            <a href="#admin" className="text-slate-600 hover:text-slate-300 transition-colors uppercase font-mono">
              Admin Gateway
            </a>
          </div>
        </div>

      </div>

      {/* FLOATING ACTION UTILITIES */}

      {/* Floating WhatsApp Quick Connect Button */}
      <a
        href="https://wa.me/923070098086"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center animate-bounce border-2 border-white dark:border-slate-800"
        title="WhatsApp Us"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 bg-primary-blue hover:bg-blue-800 text-white p-3.5 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center border-2 border-white dark:border-slate-800"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </footer>
  );
}
