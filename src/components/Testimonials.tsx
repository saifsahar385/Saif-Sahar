import React from "react";
import { Star, Quote, ShieldCheck } from "lucide-react";
import { TranslationSet } from "../translations";

interface TestimonialsProps {
  t: TranslationSet;
}

export default function Testimonials({ t }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Abstract geometric shapes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-primary-blue dark:text-blue-400 bg-blue-100 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full">
            Client Voices
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight mt-3">
            {t.testimonialsTitle}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base mt-2">
            {t.testimonialsSubtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative hover:shadow-xl hover:border-primary-blue dark:hover:border-blue-500 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Floating Quote Accent */}
              <span className="absolute -top-4 right-6 text-primary-blue/15 text-6xl font-serif">
                “
              </span>

              <div>
                {/* Star rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-accent-gold fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                <div className="w-10 h-10 rounded-full bg-primary-blue flex items-center justify-center text-white font-black text-xs shadow-inner">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">
                    {item.company}
                  </p>
                </div>
                
                {/* Vetted verification badge */}
                <div className="ml-auto" title="Verified Customer">
                  <ShieldCheck className="w-5 h-5 text-secondary-green" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
