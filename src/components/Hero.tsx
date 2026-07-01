import React from "react";
import { Truck, FileText, Phone, MessageSquare } from "lucide-react";
import { TranslationSet } from "../translations";

interface HeroProps {
  t: TranslationSet;
}

export default function Hero({ t }: HeroProps) {
  // Let's use the actual uploaded traditional Pakistani Hino decorated truck
  const heroImage = "/src/assets/images/pakistani_decorated_truck_1782898765638.jpg";

  return (
    <section id="home" className="relative bg-slate-950 text-white overflow-hidden min-h-[550px] lg:min-h-[640px] flex items-center">
      {/* Background Dot Matrix Pattern (Geometric Theme) */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#16a34a 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }}
      ></div>

      {/* Background Image with elegant gradient cover */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Decorated Pakistani Hino Truck"
          className="w-full h-full object-cover object-center opacity-40 lg:opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        {/* Dynamic bottom skew for Geometric Balance */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white dark:bg-slate-900 transform skew-y-1.5 translate-y-8 z-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline Accent Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-gold/20 text-accent-gold border border-accent-gold/30 rounded-full text-xs font-black tracking-widest uppercase mb-6 w-fit">
              <Truck className="w-3.5 h-3.5" />
              <span>Premium Logistics & Customs Agency</span>
            </div>

            {/* BOLD Heading Website Name */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4 drop-shadow-md">
              <span className="block text-accent-gold font-black drop-shadow">SAIF GOODS TRANSPORT &</span>
              <span className="block border-b-4 border-secondary-green pb-2 w-fit">YAHAYA CUSTOM CLEARING</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-slate-200 font-medium max-w-2xl mb-8 leading-relaxed drop-shadow">
              {t.heroSubHeading}
            </p>

            {/* Premium CTA Buttons Group */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#booking"
                className="flex items-center gap-2 bg-secondary-green hover:bg-green-700 text-white px-6 py-3.5 rounded-lg font-black text-sm uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-green-900/30"
              >
                <Truck className="w-4 h-4" />
                <span>{t.bookTransport}</span>
              </a>
              
              <a
                href="#customs"
                className="flex items-center gap-2 bg-primary-blue hover:bg-blue-800 text-white px-6 py-3.5 rounded-lg font-black text-sm uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-950/30 border-2 border-primary-blue"
              >
                <FileText className="w-4 h-4" />
                <span>{t.reqCustoms}</span>
              </a>

              <a
                href="tel:+923005020756"
                className="flex items-center gap-2 bg-white hover:bg-slate-100 text-primary-blue px-6 py-3.5 rounded-lg font-black text-sm uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 shadow-md border-2 border-white"
              >
                <Phone className="w-4 h-4" />
                <span>{t.callNow}</span>
              </a>

              <a
                href="https://wa.me/923070098086"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white px-6 py-3.5 rounded-lg font-black text-sm uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.whatsApp}</span>
              </a>
            </div>
          </div>

          {/* Side Art & Image badge (Geometric Balance layout) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-secondary-green/20 rounded-2xl skew-y-3 transform scale-95"></div>
            <div className="absolute inset-0 bg-primary-blue/10 rounded-2xl -skew-x-2 transform scale-100 border border-white/10"></div>
            
            <div className="relative bg-slate-900 rounded-2xl p-6 border-2 border-white/20 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-gold/20 rounded-full blur-2xl"></div>
              
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-white/10 mb-4 bg-slate-950">
                <img
                  src="/src/assets/images/pak_truck_khyber_pass_1782898808976.jpg" // Fallback to list or cargo fleet
                  onError={(e) => {
                    // fallback to cargo_fleet
                    e.currentTarget.src = "/src/assets/images/cargo_fleet_1782898808976.jpg";
                  }}
                  alt="Pakistani Hino Truck Khyber Pass"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-3 bg-primary-blue/90 text-white text-[10px] font-black tracking-widest px-2.5 py-1 rounded border border-white/20 uppercase">
                  Khyber Pass Route
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider">HINO 500 Heavy Cargo</h4>
                  <p className="text-xs text-slate-400">Equipped with mountain-terrain leaf suspension</p>
                </div>
                <span className="text-accent-gold text-lg font-black">SGT-YC</span>
              </div>
            </div>

            {/* Custom floating truck animation */}
            <div className="absolute -bottom-6 -left-6 bg-accent-gold text-slate-950 px-4 py-2.5 rounded-lg shadow-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 border-2 border-slate-950 animate-bounce">
              <Truck className="w-4 h-4 animate-pulse" />
              <span>Torkham Border Ready</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
