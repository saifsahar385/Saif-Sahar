import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { TranslationSet } from "../translations";

interface FAQProps {
  t: TranslationSet;
}

export default function FAQ({ t }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-900 relative">
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary-blue/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-primary-blue dark:text-blue-400 bg-blue-100 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full">
            Knowledge Base
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight mt-3">
            {t.faqTitle}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base mt-2">
            {t.faqSubtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {t.faqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`bg-white dark:bg-slate-800 rounded-xl border transition-all duration-300 shadow-sm ${
                  isOpen
                    ? "border-primary-blue dark:border-blue-500 shadow-md ring-1 ring-primary-blue/10"
                    : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                }`}
              >
                {/* Header (Trigger) */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-800 dark:text-slate-200"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 ${isOpen ? "text-primary-blue" : "text-slate-400"}`} />
                    <span className="text-xs sm:text-sm md:text-base font-black uppercase tracking-tight leading-snug">
                      {item.q}
                    </span>
                  </div>

                  <span className={`p-1.5 rounded-full bg-slate-50 dark:bg-slate-700 ${isOpen ? "bg-primary-blue/10 text-primary-blue" : "text-slate-400"}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Content Body */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 animate-fade-in">
                    <p className="text-xs sm:text-sm leading-relaxed font-medium">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
