import React, { useState } from "react";
import { Truck, Cpu, Scale, Map, ShieldCheck } from "lucide-react";
import { TranslationSet } from "../translations";

interface FleetProps {
  t: TranslationSet;
}

interface Vehicle {
  name: string;
  type: string;
  image: string;
  capacity: string;
  engine: string;
  specialty: string;
  wheels: number;
  tags: string[];
}

export default function Fleet({ t }: FleetProps) {
  const [selectedVehicle, setSelectedVehicle] = useState<number | null>(null);

  const vehicles: Vehicle[] = [
    {
      name: "HINO 500 Heavy Art Truck",
      type: "Semi-Trailer Heavy Goods Transport",
      image: "/src/assets/images/pakistani_decorated_truck_1782898765638.jpg",
      capacity: "25 - 30 Tons",
      engine: "7.9L Hino J08E Turbocharged Diesel",
      specialty: "Karachi to Torkham long haul transport",
      wheels: 22,
      tags: ["Heavy Payload", "Fully Art Decorated", "Torkham-Kabul Route"]
    },
    {
      name: "HINO Ranger Custom Flatbed",
      type: "Multi-Axle Container & Open Carrier",
      image: "/src/assets/images/pak_truck_khyber_pass_1782898981291.jpg",
      capacity: "15 - 20 Tons",
      engine: "6.4L Hino J05E Intercooler",
      specialty: "High-grade mountain passes and border crossings",
      wheels: 10,
      tags: ["Border Cargo", "Mountain Terrain Ready", "Fast Dispatch"]
    },
    {
      name: "HINO Art Cabin Special",
      type: "Custom Floral & Calligraphy Artistic Cabin",
      image: "/src/assets/images/pak_truck_art_close_1782898966250.jpg",
      capacity: "8 - 12 Tons",
      engine: "4.8L Hino N04C Common Rail Diesel",
      specialty: "Local distribution and custom cleared shipments",
      wheels: 6,
      tags: ["Local Routes", "Traditional Masterpiece", "Sealed Containers"]
    },
    {
      name: "Inter-State Cargo Fleet Carrier",
      type: "High-Side Cargo Logistics Carrier",
      image: "/src/assets/images/cargo_fleet_1782898808976.jpg",
      capacity: "18 - 22 Tons",
      engine: "7.2L Turbo Intercooled Hino Engine",
      specialty: "Dry fruits, textile rolls, bulk materials",
      wheels: 18,
      tags: ["Dry Freight", "Weather-proof Tarpaulin", "Seals Ready"]
    },
    {
      name: "Border Transit Terminal flatbed",
      type: "Bilateral Trade Container Carrier",
      image: "/src/assets/images/customs_clearing_agency_1782898788143.jpg",
      capacity: "35 Tons Max",
      engine: "8.9L Heavy-Duty Hino Turbo Engine",
      specialty: "Karachi Port import container transit to Kabul",
      wheels: 22,
      tags: ["Transit Trade", "FBR Customs Approved", "High Payload"]
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-slate-50 dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-primary-blue dark:text-blue-400 bg-blue-100 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full">
            Our Transport Fleet
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight mt-3">
            {t.fleetTitle}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base mt-2">
            {t.fleetSubtitle}
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((v, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 group hover:shadow-2xl hover:border-primary-blue dark:hover:border-blue-500 transition-all duration-300"
            >
              {/* Image box with badges */}
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Float badges */}
                <div className="absolute top-3 left-3 bg-primary-blue/90 text-white font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded border border-white/20">
                  {v.wheels} Wheels
                </div>

                <div className="absolute bottom-3 right-3 bg-secondary-green/95 text-white font-bold text-[10px] px-2.5 py-1 rounded">
                  {v.capacity}
                </div>
              </div>

              {/* Vehicle brief */}
              <div className="p-6">
                <div className="flex flex-wrap gap-1 mb-3">
                  {v.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[9px] font-black uppercase px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight mb-1 group-hover:text-primary-blue dark:group-hover:text-blue-400">
                  {v.name}
                </h4>
                
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-4 italic">
                  {v.type}
                </p>

                {/* Spec sheets */}
                <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                    <Cpu className="w-4 h-4 text-primary-blue shrink-0" />
                    <span><strong>Engine:</strong> {v.engine}</span>
                  </div>
                  
                  <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                    <Scale className="w-4 h-4 text-secondary-green shrink-0" />
                    <span><strong>Net Weight:</strong> {v.capacity} Payload Rating</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                    <Map className="w-4 h-4 text-accent-gold shrink-0" />
                    <span><strong>Specialty Route:</strong> {v.specialty}</span>
                  </div>
                </div>

                {/* Book this vehicle trigger */}
                <div className="mt-6">
                  <a
                    href="#booking"
                    className="block w-full text-center bg-slate-100 dark:bg-slate-900 hover:bg-primary-blue hover:text-white dark:hover:bg-primary-blue text-slate-800 dark:text-white font-black text-xs uppercase tracking-wider py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary-blue dark:hover:border-primary-blue transition-all"
                  >
                    Select for Booking
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
