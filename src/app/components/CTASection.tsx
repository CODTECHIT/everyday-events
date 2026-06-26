import { Link } from "react-router";
import { ArrowRight, MessageSquare } from "lucide-react";
import { IMG } from "@/app/constants/images";
import { FadeUp } from "@/app/components/FadeUp";

export function CTASection() {
  const message = encodeURIComponent(
    "Hi! I'm interested in your event management services. Could you please share more details?"
  );

  return (
    <section className="relative py-36 overflow-hidden bg-gray-50">
      <div className="absolute inset-0">
        <img
          src={IMG.stage}
          alt="Stage production"
          className="w-full h-full object-cover opacity-8"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/90" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E31C25]/45 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E31C25]/45 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <FadeUp>
          <div className="flex items-center justify-center gap-3 mb-9">
            <div className="h-px w-10 bg-[#E31C25]" />
            <span className="text-[#E31C25] text-[10px] tracking-[0.35em] uppercase">Ready to Create Something Extraordinary?</span>
            <div className="h-px w-10 bg-[#E31C25]" />
          </div>
          <h2
            className="font-bold text-gray-900 mb-6 leading-[1.06]"
            style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            {"Let's Build Your"}
            <br />
            <span className="text-[#E31C25]">Dream Event</span>
          </h2>
          <p className="text-gray-700 text-sm max-w-lg mx-auto mb-12 leading-relaxed">
            Whether it's an intimate gathering of 50 or a festival for 50,000 — we bring the same obsession to every event.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-[#E31C25] text-white px-10 py-4.5 text-[11px] font-bold tracking-[0.2em] uppercase flex items-center gap-3 hover:bg-[#c9141b] hover:shadow-[0_0_55px_rgba(227,28,37,0.55)] transition-all duration-500"
            >
              Start Planning
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a
              href={`https://wa.me/919876543210?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 text-gray-800 px-10 py-4.5 text-[11px] font-medium tracking-[0.2em] uppercase flex items-center gap-3 hover:border-[#E31C25]/45 hover:text-[#E31C25] transition-all duration-500 backdrop-blur-sm bg-white/30"
            >
              <MessageSquare size={13} />
              WhatsApp Us
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
