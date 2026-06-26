import { FadeUp } from "@/app/components/FadeUp";
import { SectionLabel } from "@/app/components/SectionLabel";

export function ProcessTimeline() {
  const steps = [
    { num: "01", title: "Discovery Call",   desc: "We deep-dive into your vision, goals, guest experience, budget, and timelines." },
    { num: "02", title: "Creative Brief",   desc: "Our team crafts a detailed event concept, mood board, and full production plan." },
    { num: "03", title: "Proposal & Quote", desc: "Transparent, itemised quotation with no hidden costs — ever." },
    { num: "04", title: "Planning & Prep",  desc: "Site visits, vendor coordination, logistics planning, and technical rehearsals." },
    { num: "05", title: "Event Day",        desc: "Dedicated crew on ground ensuring flawless execution from load-in to final bow." },
    { num: "06", title: "Post-Event",       desc: "Teardown, analytics report, deliverables, and a thorough feedback loop." },
  ];

  return (
    <section id="process" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp className="text-center mb-20">
          <SectionLabel center>How We Work</SectionLabel>
          <h2
            className="font-bold text-gray-900"
            style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Our <span className="text-[#E31C25]">Process</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {steps.map(({ num, title, desc }, i) => (
            <FadeUp key={num} delay={i * 0.09}>
              <div className="group bg-white hover:bg-gray-50 p-10 transition-colors duration-300 h-full cursor-default border border-gray-100">
                <div
                  className="font-bold text-[#E31C25]/25 mb-6 leading-none transition-colors duration-500"
                  style={{ fontFamily: "Sora, sans-serif", fontSize: "4rem" }}
                >
                  {num}
                </div>
                <div className="h-px w-8 bg-[#E31C25] mb-5 group-hover:w-16 transition-all duration-500" />
                <h3
                  className="text-gray-900 font-bold text-base mb-3"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
