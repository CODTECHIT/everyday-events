import { EventCategories } from "@/app/components/EventCategories";
import { WhyUs } from "@/app/components/WhyUs";
import { Testimonials } from "@/app/components/Testimonials";
import { FadeUp } from "@/app/components/FadeUp";
import { SectionLabel } from "@/app/components/SectionLabel";

export function AboutPage() {
  return (
    <div className="pt-24 bg-white">
      {/* Subpage Header */}
      <div className="py-20 border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <SectionLabel center>Who We Are</SectionLabel>
            <h1
              className="text-center font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              About <span className="text-[#E31C25]">Everyday Event Solutions</span>
            </h1>
            <p className="text-center text-gray-700 text-sm max-w-xl mx-auto mt-6 leading-relaxed">
              For over 14 years, we have pushed the boundaries of event production, creative design, and technical logistics across India.
            </p>
          </FadeUp>
        </div>
      </div>
      <EventCategories />
      <WhyUs />
      <Testimonials />
    </div>
  );
}
