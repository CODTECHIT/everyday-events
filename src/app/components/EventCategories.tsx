import { IMG } from "@/app/constants/images";
import { FadeUp } from "@/app/components/FadeUp";
import { SectionLabel } from "@/app/components/SectionLabel";

export function EventCategories() {
  const cats = [
    { label: "Weddings",             img: IMG.wedding,    desc: "Fairy-tale ceremonies & receptions"     },
    { label: "Corporate Events",     img: IMG.corporate,  desc: "Conferences, launches & award nights"   },
    { label: "Concerts & Festivals", img: IMG.concert,    desc: "Live music & large-scale productions"   },
    { label: "Exhibitions",          img: IMG.banquet,    desc: "Trade shows & brand activations"        },
    { label: "Theme Events",         img: IMG.table,      desc: "Bespoke immersive experiences"          },
  ];

  return (
    <section id="about" className="py-28 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp>
          <SectionLabel>What We Do</SectionLabel>
          <h2
            className="font-bold text-white max-w-xl leading-[1.08]"
            style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Every Occasion,{" "}
            <span className="text-[#E31C25]">Perfected</span>
          </h2>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {cats.map(({ label, img, desc }, i) => (
            <FadeUp key={label} delay={i * 0.08}>
              <div className="group relative overflow-hidden bg-[#171717] cursor-pointer h-80 lg:h-[420px]">
                <img
                  src={img}
                  alt={label}
                  className="w-full h-full object-cover opacity-45 group-hover:opacity-65 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-[#E31C25]/0 group-hover:bg-[#E31C25]/5 transition-colors duration-500" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="h-px bg-[#E31C25] mb-3 w-7 group-hover:w-14 transition-all duration-500" />
                  <h3
                    className="text-white font-bold text-base leading-snug"
                    style={{ fontFamily: "Sora, sans-serif" }}
                  >{label}</h3>
                  <p className="text-white/45 text-[11px] mt-1 group-hover:text-white/65 transition-colors duration-300">{desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
