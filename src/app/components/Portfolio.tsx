import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X } from "lucide-react";
import { IMG } from "@/app/constants/images";
import { Project } from "@/app/types";
import { FadeUp } from "@/app/components/FadeUp";
import { SectionLabel } from "@/app/components/SectionLabel";

const portfolioProjects: Project[] = [
  { title: "Grand Royal Wedding — ITC Maurya, Delhi", category: "Wedding", img: IMG.wedding, client: "The Sharma Family", size: "800 guests", services: "Full Production, Lighting, AV, Photography, SFX", tall: true },
  { title: "TechSummit 2024 — HICC, Hyderabad", category: "Corporate", img: IMG.corporate, client: "Infosys Ltd.", size: "2,000 attendees", services: "Sound, AV, LED Walls, Videography, Lighting", tall: false },
  { title: "Sunburn Arena Night — Pune", category: "Concert", img: IMG.concert, client: "Percept Live", size: "15,000 attendees", services: "Full Sound, Lighting, Rigging, SFX, Artist Management", tall: false },
  { title: "State Banquet — Taj Falaknuma Palace", category: "Gala", img: IMG.wedding2, client: "Ministry of External Affairs", size: "300 VIP guests", services: "Full Décor, AV, Photography, Coordination", tall: true },
  { title: "Brand Launch — JW Marriott, Mumbai", category: "Corporate", img: IMG.corporate2, client: "Tata Consumer Products", size: "500 guests", services: "Stage Design, AV, Lighting, Photography", tall: false },
  { title: "Destination Wedding — Lake Pichola, Udaipur", category: "Wedding", img: IMG.banquet, client: "The Gupta Family", size: "1,200 guests", services: "Full Production, Artist Management, SFX, Videography", tall: true },
  { title: "Illumination Night — DLF Cyberhub, Gurgaon", category: "Concert", img: IMG.concert2, client: "DLF Events", size: "5,000 attendees", services: "Full Sound & Lighting Production, LED Mapping", tall: false },
  { title: "Heritage Gala Dinner — Mysore Palace", category: "Theme Event", img: IMG.table, client: "Karnataka Tourism Dept.", size: "400 guests", services: "Heritage Décor, Lighting, AV, Photography", tall: false },
];

export function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <SectionLabel>Our Work</SectionLabel>
            <h2
              className="font-bold text-gray-900 leading-[1.08]"
              style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Signature <span className="text-[#E31C25]">Projects</span>
            </h2>
          </div>
          <p className="text-gray-700 text-sm max-w-xs leading-relaxed">
            Each project is a story of precision, passion, and production excellence across India and beyond.
          </p>
        </FadeUp>

        {/* Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
          {portfolioProjects.map((proj, i) => (
            <FadeUp key={proj.title} delay={i * 0.06} className="break-inside-avoid mb-3">
              <div
                className={`group relative overflow-hidden cursor-pointer bg-gray-100 ${proj.tall ? "h-[420px]" : "h-60"}`}
                onClick={() => setSelected(proj)}
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-0 border border-[#E31C25]/0 group-hover:border-[#E31C25]/20 transition-all duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="text-[9px] text-[#E31C25] tracking-[0.2em] uppercase border border-[#E31C25]/40 px-2 py-1 bg-white/90 backdrop-blur-sm">
                    {proj.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3
                    className="text-white font-semibold text-sm leading-snug"
                    style={{ fontFamily: "Sora, sans-serif" }}
                  >{proj.title}</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 border border-[#E31C25]/60 flex items-center justify-center bg-white/90 backdrop-blur-sm">
                    <ArrowRight size={16} className="text-[#E31C25]" />
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Project modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 bg-black/40 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
              className="bg-white border border-gray-200 max-w-xl w-full overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-64 bg-gray-100">
                <img src={selected.img} alt={selected.title} className="w-full h-full object-cover opacity-95" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <button
                  className="absolute top-4 right-4 w-9 h-9 bg-white/90 border border-gray-200 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors backdrop-blur-sm"
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                >
                  <X size={15} />
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="text-[9px] text-[#E31C25] tracking-[0.2em] uppercase border border-[#E31C25]/40 px-2 py-1 bg-white/90 backdrop-blur-sm">{selected.category}</span>
                </div>
              </div>
              <div className="p-7">
                <h3
                  className="text-gray-900 text-xl font-bold mb-6 leading-snug"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >{selected.title}</h3>
                <div className="grid grid-cols-2 gap-5">
                  {([
                    { l: "Client",     v: selected.client   },
                    { l: "Event Size", v: selected.size     },
                    { l: "Services",   v: selected.services, full: true },
                  ] as { l: string; v: string; full?: boolean }[]).map(({ l, v, full }) => (
                    <div key={l} className={full ? "col-span-2" : ""}>
                      <div className="text-[#E31C25] text-[9px] tracking-[0.25em] uppercase mb-1.5">{l}</div>
                      <div className="text-gray-600 text-sm leading-relaxed">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
