import React from "react";
import { TranslationSet } from "../translations";

interface StatsProps {
  t: TranslationSet;
}

export default function Stats({ t }: StatsProps) {
  return (
    <section className="relative bg-primary-blue text-white overflow-hidden py-14 sm:py-20">
      {/* Background Dot grid overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px"
        }}
      ></div>

      {/* Decorative skewed border */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-white dark:bg-slate-900 transform -skew-y-1.5 -translate-y-4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {t.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              {/* Statistic Big Value */}
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-accent-gold tracking-tight mb-2 drop-shadow-sm font-mono">
                {stat.value}
              </p>
              
              {/* Statistic Label */}
              <p className="text-[10px] sm:text-xs md:text-sm font-black text-slate-200 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
