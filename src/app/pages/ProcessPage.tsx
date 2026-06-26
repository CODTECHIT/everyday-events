import { ProcessTimeline } from "@/app/components/ProcessTimeline";
import { CTASection } from "@/app/components/CTASection";
import { FadeUp } from "@/app/components/FadeUp";
import { SectionLabel } from "@/app/components/SectionLabel";

export function ProcessPage() {
  return (
    <div className="pt-24 bg-white">
      {/* Subpage Header */}
      <div className="py-20 border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <SectionLabel center>Workflow</SectionLabel>
            <h1
              className="text-center font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              How We <span className="text-[#E31C25]">Make It Happen</span>
            </h1>
            <p className="text-center text-gray-700 text-sm max-w-xl mx-auto mt-6 leading-relaxed">
              From our initial discovery call to post-event teardown, see the structured process that ensures a flawless execution.
            </p>
          </FadeUp>
        </div>
      </div>
      <ProcessTimeline />
      <CTASection />
    </div>
  );
}
