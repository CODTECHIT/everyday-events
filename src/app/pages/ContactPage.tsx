import { ContactSection } from "@/app/components/ContactFooter";
import { FadeUp } from "@/app/components/FadeUp";
import { SectionLabel } from "@/app/components/SectionLabel";

export function ContactPage() {
  return (
    <div className="pt-24 bg-[#0B0B0B]">
      {/* Subpage Header */}
      <div className="py-20 border-b border-white/5 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <SectionLabel center>Inquire</SectionLabel>
            <h1
              className="text-center font-bold text-white leading-tight"
              style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Get in Touch <span className="text-[#E31C25]">With Us</span>
            </h1>
            <p className="text-center text-white/45 text-sm max-w-xl mx-auto mt-6 leading-relaxed">
              Ready to create something extraordinary? Tell us about your vision, and we will get back to you within 2 business hours.
            </p>
          </FadeUp>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
