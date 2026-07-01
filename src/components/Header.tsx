import React, { useState, useEffect } from "react";
import { Globe, Sun, Moon, Menu, X, Shield, CheckCircle } from "lucide-react";
import { TranslationSet } from "../translations";

interface HeaderProps {
  t: TranslationSet;
  lang: "en" | "ur";
  setLang: (lang: "en" | "ur") => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Header({ t, lang, setLang, darkMode, setDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.navHome, href: "#home" },
    { label: t.navAbout, href: "#about" },
    { label: t.navServices, href: "#services" },
    { label: t.navCustoms, href: "#customs" },
    { label: t.navFleet, href: "#fleet" },
    { label: t.navBooking, href: "#booking" },
    { label: t.navTracking, href: "#tracking" },
    { label: t.navGallery, href: "#gallery" },
    { label: t.navFAQ, href: "#faq" },
    { label: t.navContact, href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLang(lang === "en" ? "ur" : "en");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b-2 border-primary-blue"
          : "bg-white dark:bg-slate-950 border-b-4 border-primary-blue"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section with SGT + YC geometric badge */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-14 h-14 bg-primary-blue flex flex-col items-center justify-center text-white rounded-lg shadow-md border-2 border-accent-gold transform hover:rotate-3 transition-transform duration-300 shrink-0">
              <span className="text-[11px] font-black tracking-tight leading-none text-accent-gold">SGT</span>
              <div className="h-[2px] w-8 bg-secondary-green my-1"></div>
              <span className="text-[11px] font-black tracking-tight leading-none text-white">YC</span>
            </div>
            
            <div className="flex flex-col">
              {/* Bold Website Name Heading Type */}
              <h1 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-primary-blue dark:text-blue-400 uppercase leading-none font-sans flex flex-col md:flex-row md:items-baseline md:gap-1">
                <span>SAIF GOODS TRANSPORT</span>
                <span className="text-secondary-green dark:text-green-400 text-xs md:text-base font-bold italic lowercase px-1">&</span>
                <span>YAHAYA CUSTOM CLEARING</span>
              </h1>
              <p className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold italic mt-0.5">
                {t.companySubName}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2.5 py-2 rounded text-xs xl:text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary-blue hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Utilities (Lang Toggle, Theme, Call, Mobile button) */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs sm:text-sm font-bold transition-all text-slate-800 dark:text-slate-200"
              title="Switch Language"
            >
              <Globe className="w-4 h-4 text-primary-blue" />
              <span>{lang === "en" ? "اردو" : "English"}</span>
            </button>

            {/* Dark Mode Switcher */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-accent-gold" /> : <Moon className="w-4 h-4 text-primary-blue" />}
            </button>

            {/* Live Status Badge */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 rounded-full border border-green-200 dark:border-green-800/50 text-xs font-black italic">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>ONLINE</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden rounded border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-2 shadow-inner">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary-blue"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Live Status:</span>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 rounded-full border border-green-200 dark:border-green-800/50 text-xs font-black italic">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>ONLINE</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
