import React, { useState, useEffect } from "react";
import { translations } from "./translations";

// Import modular sub-components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Tracking from "./components/Tracking";
import Fleet from "./components/Fleet";
import Booking from "./components/Booking";
import CustomsRequest from "./components/CustomsRequest";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import AdminPortal from "./components/AdminPortal";
import Footer from "./components/Footer";
import ChatAssistant from "./components/ChatAssistant";

export default function App() {
  // Default to 'en' as requested ("Change the language to English of hole website")
  const [lang, setLang] = useState<"en" | "ur">("en");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const t = translations[lang];

  // Toggle dark class on root document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div 
      className={`min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-accent-gold selection:text-slate-950 ${
        lang === "ur" ? "text-right" : "text-left"
      }`}
      dir={lang === "ur" ? "rtl" : "ltr"}
    >
      {/* BACKGROUND DECORATION - Dot Grid representing Geometric Balance */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0" 
        style={{
          backgroundImage: "radial-gradient(#0B3D91 2px, transparent 2px)",
          backgroundSize: "24px 24px"
        }}
      ></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Header */}
        <Header 
          t={t} 
          lang={lang} 
          setLang={setLang} 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
        />

        {/* Core Layout Blocks */}
        <main className="flex-grow">
          <Hero t={t} />
          <Stats t={t} />
          <About t={t} />
          <Services t={t} />
          <Tracking t={t} />
          <Fleet t={t} />
          <Booking t={t} />
          <CustomsRequest t={t} />
          <Gallery t={t} />
          <Testimonials t={t} />
          <FAQ t={t} />
          <Contact t={t} />
          <AdminPortal t={t} />
        </main>

        {/* Footer */}
        <Footer t={t} />

        {/* Floating AI Agent & Interactive Chatbot */}
        <ChatAssistant t={t} lang={lang} />
      </div>
    </div>
  );
}
