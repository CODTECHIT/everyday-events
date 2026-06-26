import { Portfolio } from "@/app/components/Portfolio";
import { ClientLogos } from "@/app/components/ClientLogos";
import { FadeUp } from "@/app/components/FadeUp";
import { SectionLabel } from "@/app/components/SectionLabel";

export function PortfolioPage() {
  return (
    <div className="pt-24 bg-[#0B0B0B]">
      {/* Subpage Header */}
      <div className="py-20 border-b border-white/5 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <SectionLabel center>Our Gallery</SectionLabel>
            <h1
              className="text-center font-bold text-white leading-tight"
              style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Signature <span className="text-[#E31C25]">Events Portfolio</span>
            </h1>
            <p className="text-center text-white/45 text-sm max-w-xl mx-auto mt-6 leading-relaxed">
              Explore the scale, precision, and craftsmanship we bring to weddings, corporate events, and live concerts.
            </p>
          </FadeUp>
        </div>
      </div>
      <Portfolio />
      <ClientLogos />
    </div>
  );
}
