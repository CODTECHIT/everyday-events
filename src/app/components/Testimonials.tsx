import { Star } from "lucide-react";
import { FadeUp } from "@/app/components/FadeUp";
import { SectionLabel } from "@/app/components/SectionLabel";

export function Testimonials() {
  const items = [
    {
      quote: "Everyday Event Solutions transformed our annual leadership conference into an experience our delegates are still talking about six months later. The AV and lighting setup was world-class.",
      name: "Radhika Mehta",
      role: "VP Marketing, Infosys",
      rating: 5,
    },
    {
      quote: "Our daughter's wedding was beyond anything we imagined possible. Every single detail was perfect — from the lighting design to the floral arrangements, sound, and photography.",
      name: "Suresh & Priya Kapoor",
      role: "Wedding Clients, New Delhi",
      rating: 5,
    },
    {
      quote: "We have worked with them for three consecutive Sunburn Arena events. Their technical production capability and crew reliability is genuinely unmatched anywhere in India.",
      name: "Ashish Hemrajani",
      role: "CEO, BookMyShow Live",
      rating: 5,
    },
    {
      quote: "The product launch was executed to absolute perfection. 500 guests, simultaneous live stream, 40-foot LED wall — everything ran without a single glitch from start to finish.",
      name: "Nisha Sharma",
      role: "Head of Brand, Tata Consumer Products",
      rating: 5,
    },
  ];

  return (
    <section className="py-28 bg-[#171717]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp className="mb-14">
          <SectionLabel>Client Stories</SectionLabel>
          <h2
            className="font-bold text-white leading-[1.08]"
            style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            What Clients
            <br />
            <span className="text-[#E31C25]">Say About Us</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map(({ quote, name, role, rating }, i) => (
            <FadeUp key={name} delay={i * 0.09}>
              <div className="group bg-[#0B0B0B] border border-white/5 hover:border-[#E31C25]/20 p-8 transition-all duration-500 h-full">
                <div className="text-[#E31C25]/25 font-bold mb-5 leading-none select-none" style={{ fontSize: "3.5rem" }}>"</div>
                <p className="text-white/65 text-sm leading-relaxed mb-8 italic">"{quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="text-white font-semibold text-sm"
                      style={{ fontFamily: "Sora, sans-serif" }}
                    >{name}</div>
                    <div className="text-white/35 text-[11px] mt-0.5">{role}</div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: rating }).map((_, j) => (
                      <Star key={j} size={11} className="text-[#E31C25] fill-[#E31C25]" />
                    ))}
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
