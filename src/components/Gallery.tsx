import React, { useState } from "react";
import { X, ZoomIn, Heart, Maximize } from "lucide-react";
import { TranslationSet } from "../translations";

interface GalleryProps {
  t: TranslationSet;
}

interface GalleryItem {
  src: string;
  title: string;
  category: string;
  desc: string;
}

export default function Gallery({ t }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [likes, setLikes] = useState<Record<number, number>>({ 0: 24, 1: 42, 2: 89, 3: 31, 4: 55 });

  const galleryItems: GalleryItem[] = [
    {
      src: "/src/assets/images/pakistani_decorated_truck_1782898765638.jpg",
      title: "HINO 22-Wheeler Heavy Carrier",
      category: "Our Fleet",
      desc: "Fully decorated custom truck loaded with outbound bilateral trade container heading to Torkham Pass."
    },
    {
      src: "/src/assets/images/pak_truck_khyber_pass_1782898981291.jpg",
      title: "Navigating Winding Khyber Pass",
      category: "Route Scenic",
      desc: "A heavy-duty cargo vehicle taking the steep curves of the historic Khyber Pass road with absolute stability."
    },
    {
      src: "/src/assets/images/pak_truck_art_close_1782898966250.jpg",
      title: "Exquisite Truck Art Cabin Closeup",
      category: "Artistry",
      desc: "Traditional handpainted bird designs, floral patterns, brass reflectors, and reflective vinyl art."
    },
    {
      src: "/src/assets/images/cargo_fleet_1782898808976.jpg",
      title: "Inter-State Logistics Assembly",
      category: "Logistics",
      desc: "A fleet of Hino 500 trucks parked at a central logistics dispatch warehouse, ready for national loading."
    },
    {
      src: "/src/assets/images/customs_clearing_agency_1782898788143.jpg",
      title: "Torkham Custom House Terminal",
      category: "Customs Clear",
      desc: "Clearing agency checkpoints, shipping containers, and PSW filing desks at the Pakistan-Afghanistan border."
    }
  ];

  const handleLike = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes({ ...likes, [idx]: (likes[idx] || 0) + 1 });
  };

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-primary-blue dark:text-blue-400 bg-blue-100 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full">
            Visual Showcases
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight mt-3">
            On-Ground Cargo & Art Gallery
          </h3>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base mt-2">
            See actual photos of our beautiful decorated Pakistani trucks, Khyber Pass road transit, and Torkham Border customs yard.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="group relative bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md cursor-pointer border-2 border-transparent hover:border-primary-blue transition-all duration-300"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] bg-slate-950 overflow-hidden relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay hover panel */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                  <div className="flex justify-between items-start">
                    <span className="bg-primary-blue text-white text-[10px] font-black uppercase px-2 py-1 rounded">
                      {item.category}
                    </span>
                    
                    <span className="p-2 rounded bg-white/15 hover:bg-white/20 text-white backdrop-blur">
                      <Maximize className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="text-white">
                    <h4 className="text-base font-black uppercase tracking-tight leading-tight mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom text bar (visible always) */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800 flex justify-between items-center border-t border-slate-200 dark:border-slate-700">
                <div>
                  <h5 className="text-xs font-black text-slate-800 dark:text-white uppercase truncate max-w-[200px]">
                    {item.title}
                  </h5>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">
                    {item.category}
                  </p>
                </div>

                {/* Like Button */}
                <button
                  onClick={(e) => handleLike(idx, e)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white dark:bg-slate-700 hover:bg-rose-50 text-slate-500 hover:text-rose-600 transition-colors border border-slate-200 dark:border-slate-600 shadow-sm"
                >
                  <Heart className="w-3.5 h-3.5 fill-current text-rose-500" />
                  <span className="text-[11px] font-black text-slate-700 dark:text-slate-200">{likes[idx]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 bg-slate-950/98 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation (Left/Right) can be implemented or just close on click */}
            <div className="max-w-4xl w-full flex flex-col items-center">
              <div className="relative bg-slate-900 rounded-2xl overflow-hidden border-2 border-white/15 max-h-[70vh] flex items-center justify-center">
                <img
                  src={galleryItems[lightboxIndex].src}
                  alt={galleryItems[lightboxIndex].title}
                  className="max-w-full max-h-[65vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Details banner */}
              <div className="mt-5 text-center text-white max-w-2xl px-4">
                <span className="bg-secondary-green text-white text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded">
                  {galleryItems[lightboxIndex].category}
                </span>
                
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight mt-3 mb-1.5">
                  {galleryItems[lightboxIndex].title}
                </h4>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {galleryItems[lightboxIndex].desc}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
