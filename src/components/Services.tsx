import React, { useState } from "react";
import { Container, Truck, Clipboard, ShieldCheck, HelpCircle, ArrowUpRight } from "lucide-react";
import { TranslationSet } from "../translations";

interface ServicesProps {
  t: TranslationSet;
}

export default function Services({ t }: ServicesProps) {
  const [filter, setFilter] = useState<"all" | "transport" | "customs">("all");

  // Filter logic based on index or title keywords
  const filteredServices = t.servicesList.filter((service, idx) => {
    if (filter === "all") return true;
    
    // Transport services are generally indices 0-3, 8-9 (or has "transport" / "route" / "delivery" in text)
    const isTransport = 
      idx === 0 || idx === 1 || idx === 2 || idx === 3 || idx === 8 || idx === 9;
    
    if (filter === "transport") return isTransport;
    if (filter === "customs") return !isTransport;
    
    return true;
  });

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-950 relative">
      {/* Background grids */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-primary-blue dark:text-blue-400 bg-blue-100 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full">
            Our Solutions
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight mt-3">
            {t.servicesTitle}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base mt-2">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Filter Switcher for Geometric Theme */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2 text-xs font-black uppercase tracking-wider rounded transition-all duration-300 ${
              filter === "all"
                ? "bg-primary-blue text-white shadow-md shadow-blue-900/30 border border-primary-blue"
                : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
            }`}
          >
            All Services
          </button>
          <button
            onClick={() => setFilter("transport")}
            className={`px-5 py-2 text-xs font-black uppercase tracking-wider rounded transition-all duration-300 ${
              filter === "transport"
                ? "bg-primary-blue text-white shadow-md shadow-blue-900/30 border border-primary-blue"
                : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
            }`}
          >
            Logistics & Transport
          </button>
          <button
            onClick={() => setFilter("customs")}
            className={`px-5 py-2 text-xs font-black uppercase tracking-wider rounded transition-all duration-300 ${
              filter === "customs"
                ? "bg-primary-blue text-white shadow-md shadow-blue-900/30 border border-primary-blue"
                : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
            }`}
          >
            Customs Clearance & PSW
          </button>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            // Pick a matching Lucide icon helper based on titles
            let lucideIcon = <Truck className="w-6 h-6 text-primary-blue dark:text-blue-400" />;
            if (service.title.includes("Container")) {
              lucideIcon = <Container className="w-6 h-6 text-secondary-green dark:text-green-400" />;
            } else if (service.title.includes("Custom") || service.title.includes("Clearance")) {
              lucideIcon = <Clipboard className="w-6 h-6 text-accent-gold" />;
            } else if (service.title.includes("PSW") || service.title.includes("Documentation")) {
              lucideIcon = <ShieldCheck className="w-6 h-6 text-red-500" />;
            }

            return (
              <div
                key={index}
                className="group relative bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary-blue dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Upper skew decoration */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-r-[12px] border-t-transparent border-r-primary-blue dark:border-r-blue-400 group-hover:border-r-secondary-green transition-colors rounded-tr-xl"></div>
                
                <div>
                  {/* Icon & Emoji layout */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm">
                      {lucideIcon}
                    </div>
                    <span className="text-2xl" role="img" aria-label="service emoji">
                      {service.icon}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h4 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2.5 group-hover:text-primary-blue dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h4>
                  
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex justify-between items-center">
                  <span className="text-[10px] font-black tracking-widest text-primary-blue dark:text-blue-400 group-hover:text-secondary-green transition-colors uppercase">
                    Learn More
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-secondary-green transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 bg-gradient-to-r from-primary-blue to-slate-900 rounded-2xl p-8 text-white flex flex-col md:flex-row justify-between items-center gap-6 border-l-8 border-accent-gold shadow-2xl relative overflow-hidden">
          {/* background design line */}
          <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-secondary-green opacity-10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight">Need a custom logistics quote or customs consultancy?</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Get in touch with Saif Rahman for transport rates, or Yahaya for custom valuation advice at Torkham.
            </p>
          </div>

          <a
            href="#contact"
            className="relative z-10 shrink-0 bg-accent-gold hover:bg-yellow-600 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-lg shadow-lg transition-all"
          >
            Get Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
