import React from "react";
import { CheckCircle, Award, Compass, ShieldCheck, Zap } from "lucide-react";
import { TranslationSet } from "../translations";

interface AboutProps {
  t: TranslationSet;
}

export default function About({ t }: AboutProps) {
  const imageKhyberPass = "/src/assets/images/pak_truck_khyber_pass_1782898981291.jpg";

  const featureHighlights = [
    {
      title: "Border Clearance Specialists",
      desc: "Licensed clearing agents with decades of direct coordination at Torkham border terminal.",
      icon: <Compass className="w-5 h-5 text-accent-gold" />
    },
    {
      title: "Nationwide Transport Fleet",
      desc: "Comprehensive logistics connectivity from Karachi ports to all urban & rural Pakistani terminals.",
      icon: <CheckCircle className="w-5 h-5 text-secondary-green" />
    },
    {
      title: "Guaranteed Safe Transit",
      desc: "Weather-proof containerized and open-bay trucks with heavy tie-downs and expert cargo locking.",
      icon: <ShieldCheck className="w-5 h-5 text-primary-blue" />
    },
    {
      title: "PSW and Filing Integration",
      desc: "State-of-the-art filing and financial module registration on Pakistan Single Window portal.",
      icon: <Zap className="w-5 h-5 text-red-500" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Images & Artwork */}
          <div className="lg:col-span-5 relative flex flex-col gap-6">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-blue/10 rounded-lg -z-10 transform -rotate-12"></div>
            
            {/* Primary Image: Winding Khyber Pass Decorated Truck */}
            <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl group">
              <img
                src={imageKhyberPass}
                alt="Saif Goods Pakistani Decorated Hino Truck in Khyber Pass"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-black tracking-widest text-accent-gold uppercase">Operational Route</p>
                <h4 className="text-lg font-black uppercase">Torkham Border Crossing</h4>
              </div>
            </div>

            {/* Sub image / Badge overlay */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border-l-4 border-accent-gold shadow-lg flex items-center gap-4 transform translate-y-2 lg:translate-x-6">
              <div className="w-12 h-12 rounded-lg bg-accent-gold/10 flex items-center justify-center text-accent-gold font-black text-xl">
                35+
              </div>
              <div>
                <h5 className="font-black text-slate-800 dark:text-white uppercase text-sm">35 Years of Excellence</h5>
                <p className="text-xs text-slate-500 dark:text-slate-400">Serving bilateral trade and goods transport</p>
              </div>
            </div>
          </div>

          {/* Right Side: Text & Features */}
          <div className="lg:col-span-7">
            <div className="border-l-4 border-primary-blue pl-4 mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-primary-blue dark:text-blue-400">
                Who We Are
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight mt-1">
                {t.aboutTitle}
              </h3>
            </div>

            <p className="text-slate-600 dark:text-slate-300 font-medium text-base mb-4 leading-relaxed">
              {t.aboutDesc1}
            </p>

            <p className="text-slate-600 dark:text-slate-300 font-medium text-base mb-8 leading-relaxed">
              {t.aboutDesc2}
            </p>

            {/* List of custom bullet points from translations */}
            <div className="space-y-3.5 mb-8">
              {t.aboutPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary-green/10 flex items-center justify-center text-secondary-green shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{point}</span>
                </div>
              ))}
            </div>

            {/* Grid of highlight badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
              {featureHighlights.map((f, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">{f.title}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
