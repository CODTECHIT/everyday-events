import {
  Volume2, Zap, Monitor, Building2, Flame, Camera,
  Video, Music, Heart, Briefcase, Users, Star
} from "lucide-react";
import { FadeUp } from "@/app/components/FadeUp";
import { SectionLabel } from "@/app/components/SectionLabel";

const servicesList = [
  {
    icon: Volume2,
    title: "Professional Sound",
    desc: "Line arrays, subwoofers, in-ear monitors — crystal-clear audio scaled to any venue.",
    img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop&auto=format"
  },
  {
    icon: Zap,
    title: "Lighting Design",
    desc: "Moving heads, LED washes, gobos and beam effects that define the atmosphere.",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop&auto=format"
  },
  {
    icon: Monitor,
    title: "Audio Visual",
    desc: "LED walls, projection mapping, multi-screen setups that captivate every seat.",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop&auto=format"
  },
  {
    icon: Building2,
    title: "Truss & Rigging",
    desc: "Certified structural rigging for overhead installations, trusses, and fly systems.",
    img: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&h=400&fit=crop&auto=format"
  },
  {
    icon: Flame,
    title: "Special Effects",
    desc: "Smoke machines, CO₂ jets, confetti cannons, pyrotechnics — unforgettable moments.",
    img: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?w=600&h=400&fit=crop&auto=format"
  },
  {
    icon: Camera,
    title: "Photography",
    desc: "Premium event photography capturing every emotion, candid and ceremonial.",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop&auto=format"
  },
  {
    icon: Video,
    title: "Videography",
    desc: "Cinematic highlight reels, full-event films, and professional live streaming.",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop&auto=format"
  },
  {
    icon: Music,
    title: "Artist Management",
    desc: "Talent booking, rider management, travel coordination for performers and speakers.",
    img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop&auto=format"
  },
  {
    icon: Heart,
    title: "Weddings",
    desc: "Fairy-tale ceremonies crafted with obsessive attention to every floral detail.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&auto=format"
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    desc: "Product launches, AGMs, award nights — elevated experiences that impress.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&auto=format"
  },
  {
    icon: Users,
    title: "Exhibitions",
    desc: "Stall design, crowd flow strategy, and seamless multi-day event management.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&auto=format"
  },
  {
    icon: Star,
    title: "Music Festivals",
    desc: "Multi-stage festivals with complete technical and production oversight.",
    img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop&auto=format"
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <SectionLabel>Our Expertise</SectionLabel>
            <h2
              className="font-bold text-gray-900 leading-[1.08]"
              style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Premium <span className="text-[#E31C25]">Services</span>
            </h2>
          </div>
          <p className="text-gray-700 text-sm max-w-xs leading-relaxed">
            From intimate 50-person gatherings to 50,000-seat festivals — we bring the same obsessive attention to every detail.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesList.map(({ icon: Icon, title, desc, img }, i) => (
            <FadeUp key={title} delay={i * 0.04}>
              <div className="group bg-white border border-gray-200 hover:border-[#E31C25]/30 rounded-lg overflow-hidden transition-all duration-500 h-full cursor-default flex flex-col shadow-sm hover:shadow-lg">
                {/* Image Section */}
                <div className="relative h-44 w-full overflow-hidden flex-shrink-0">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 pt-8 flex-grow flex flex-col justify-between relative">
                  {/* Floating Icon */}
                  <div className="absolute -top-6 left-6 w-12 h-12 bg-white border border-gray-200 group-hover:border-[#E31C25]/35 flex items-center justify-center transition-all duration-300 group-hover:bg-[#E31C25]/8 rounded shadow-md">
                    <Icon size={17} className="text-[#E31C25] transition-colors duration-300" />
                  </div>

                  <div>
                    <h3
                      className="text-gray-900 font-semibold text-sm mb-2.5"
                      style={{ fontFamily: "Sora, sans-serif" }}
                    >{title}</h3>
                    <p className="text-gray-700 text-xs leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{desc}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
