import { motion } from "motion/react";
import { Check } from "lucide-react";
import { IMG } from "@/app/constants/images";
import { FadeUp } from "@/app/components/FadeUp";
import { SectionLabel } from "@/app/components/SectionLabel";

export function WhyUs() {
  const reasons = [
    "14+ years of production expertise across weddings, concerts, and corporate events",
    "In-house technical team — no critical role is ever subcontracted",
    "State-of-the-art equipment refreshed every production cycle",
    "500+ events from intimate gatherings to 15,000-person festivals",
    "Dedicated production manager for every event from brief to teardown",
    "Trusted by Fortune 500 companies and high-profile families alike",
    "Single point of contact for all production, logistics, and creative needs",
    "24/7 on-call support throughout the entire event lifecycle",
  ];

  return (
    <section className="py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp className="relative">
            <div className="relative h-[500px] overflow-hidden bg-[#171717]">
              <img
                src={IMG.concert3}
                alt="Everyday Event Solution large-scale production"
                className="w-full h-full object-cover opacity-65"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
            </div>
            {/* Floating brand red badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#E31C25] p-8 hidden lg:flex flex-col items-center justify-center shadow-[0_8px_40px_rgba(227,28,37,0.35)]">
              <span
                className="text-white font-bold leading-none"
                style={{ fontFamily: "Sora, sans-serif", fontSize: "2.5rem" }}
              >14+</span>
              <span className="text-white/80 text-[9px] tracking-[0.25em] uppercase mt-1">Years</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2
              className="font-bold text-white leading-[1.08] mb-10"
              style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              {"India's Most Trusted"}
              <br />
              <span className="text-[#E31C25]">Event Production</span>
              <br />
              Partner
            </h2>
            <div className="space-y-4">
              {reasons.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="flex items-start gap-3.5"
                >
                  <div className="w-5 h-5 border border-[#E31C25]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={10} className="text-[#E31C25]" />
                  </div>
                  <span className="text-white/60 text-sm leading-relaxed">{r}</span>
                </motion.div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
