import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { IMG } from "@/app/constants/images";
import { Particles } from "@/app/components/Particles";
import LightRays from "@/app/components/LightRays";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-white">
      {/* Light Rays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#E31C25"
          raysSpeed={0.8}
          lightSpread={0.7}
          rayLength={1.4}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.02}
          distortion={0.04}
          className="opacity-90"
        />
      </div>

      {/* Red hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E31C25]/50 to-transparent" />

      <Particles />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center gap-3 mb-9"
        >
          <div className="h-px w-14 bg-[#E31C25]" />
          <span className="text-[#E31C25] text-[10px] tracking-[0.4em] uppercase">14+ Years of Excellence</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-bold leading-[1.02] max-w-5xl text-gray-900"
          style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2.8rem, 8vw, 96px)" }}
        >
          Creating{" "}
          <span className="text-[#E31C25]">Extraordinary</span>
          <br />
          Events That Leave
          <br />
          <span className="text-gray-900/65">Lasting Impressions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="text-gray-600 text-[11px] tracking-[0.22em] uppercase mt-8 mb-11"
        >
          Professional Event Production&nbsp;•&nbsp;Weddings&nbsp;•&nbsp;Corporate Events&nbsp;•&nbsp;Concerts&nbsp;•&nbsp;Exhibitions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.25 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="group bg-[#E31C25] text-white px-9 py-4 text-[11px] font-bold tracking-[0.18em] uppercase flex items-center gap-3 hover:bg-[#FF3E47] hover:shadow-[0_0_45px_rgba(227,28,37,0.55)] transition-all duration-500"
          >
            Get a Quote
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#portfolio"
            className="group border border-gray-300 text-gray-800 px-9 py-4 text-[11px] font-medium tracking-[0.18em] uppercase flex items-center gap-3 hover:border-[#E31C25]/50 hover:text-[#E31C25] transition-all duration-500 backdrop-blur-sm bg-white/40"
          >
            <Play size={11} fill="currentColor" />
            View Portfolio
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-400 text-[9px] tracking-[0.35em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut" }}
        >
          <ChevronDown size={17} className="text-[#E31C25]/45" />
        </motion.div>
      </motion.div>
    </section>
  );
}
