import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Phone, ArrowUpRight } from "lucide-react";
import { TranslationSet } from "../translations";

interface ChatAssistantProps {
  t: TranslationSet;
  lang: "en" | "ur";
}

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function ChatAssistant({ t, lang }: ChatAssistantProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: lang === "ur" 
        ? "اسلام علیکم! میں سیف اینڈ یحییٰ لاجسٹکس کا آفیشل اسسٹنٹ ہوں۔ کسٹمز کلیئرنس، پی ایس ڈبلیو (PSW)، گاڑیوں کی بکنگ یا ریٹس کے بارے میں کچھ بھی پوچھیں!"
        : "Hello! I am the official AI assistant for Saif Goods & Yahaya Customs. Ask me anything about customs documentation, PSW filings, freight rates, or Torkham Border crossings!"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  // Handle suggested prompt clicks
  const handleSuggestClick = (prompt: string) => {
    setInput(prompt);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg,
          chatHistory: messages
        })
      });

      const data = await response.json();
      if (response.ok) {
        setMessages((prev) => [...prev, { sender: "bot", text: data.text }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: data.fallbackText || "Sorry, I am facing a connection issue. Please dial our MD directly for assistance!"
          }
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Connection failed. Please contact us via phone or WhatsApp for direct assistance."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const suggestions = lang === "ur" 
    ? [
        "طورخم بارڈر کے لیے کون سی کسٹمز فائلنگ لازمی ہے؟",
        "پاکستان سنگل ونڈو (PSW) سروس کے چارجز کیا ہیں؟",
        "کراچی سے پشاور ٹرک کا کرایہ کیا ہے؟",
        "یحییٰ کسٹم ایجنٹ کا موبائل نمبر کیا ہے؟"
      ]
    : [
        "What documents are needed for Torkham Border clearance?",
        "How can I register on Pakistan Single Window (PSW)?",
        "What are the shipping rates from Karachi Port to Peshawar?",
        "Direct phone number for Customs Agent Yahaya?"
      ];

  return (
    <>
      {/* Floating Chat Bubble (Left Corner) */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-40 bg-primary-blue hover:bg-blue-800 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center border-2 border-white dark:border-slate-800"
        title="Chat with SGT-YC AI"
      >
        {open ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </button>

      {/* Chat Window Panel */}
      {open && (
        <div className="fixed bottom-24 left-6 z-50 w-[90vw] sm:w-[380px] h-[500px] bg-white dark:bg-slate-900 border-2 border-primary-blue rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          
          {/* Header */}
          <div className="bg-primary-blue p-4 text-white flex justify-between items-center border-b-2 border-accent-gold">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-accent-gold" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider">AI Trade & Transit Assistant</h4>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-[10px] text-slate-300 font-bold">SGT-YC Leader</span>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-slate-300 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-900/50">
            {messages.map((m, idx) => {
              const isBot = m.sender === "bot";
              return (
                <div key={idx} className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
                  <div className={`flex items-start gap-2.5 max-w-[80%] ${isBot ? "" : "flex-row-reverse"}`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white ${
                      isBot ? "bg-primary-blue" : "bg-secondary-green"
                    }`}>
                      {isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>

                    <div className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                      isBot 
                        ? "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-700" 
                        : "bg-primary-blue text-white rounded-tr-none"
                    }`}>
                      {m.text}
                    </div>
                  </div>
                </div>
              );
            })}
            
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-primary-blue flex items-center justify-center text-white shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white dark:bg-slate-800 text-slate-400 p-3 rounded-2xl text-xs border border-slate-100 dark:border-slate-700">
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-300"></span>
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Suggestions list (only when input is blank) */}
          {!input && (
            <div className="p-2 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-1.5 overflow-x-auto shrink-0 whitespace-nowrap">
              {suggestions.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestClick(s)}
                  className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-blue hover:text-white text-[10px] font-bold uppercase tracking-wider transition-colors border border-slate-200 dark:border-slate-700 shrink-0"
                >
                  {s.slice(0, 32)}...
                </button>
              ))}
            </div>
          )}

          {/* Footer Form Input */}
          <form onSubmit={handleSend} className="p-3 border-t-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={lang === "ur" ? "پوچھنے کے لیے لکھیں..." : "Type your query..."}
              className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl py-2 px-3 text-xs sm:text-sm font-bold outline-none focus:border-primary-blue dark:text-white"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2 bg-primary-blue hover:bg-blue-800 disabled:bg-slate-300 text-white rounded-xl transition-colors shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
