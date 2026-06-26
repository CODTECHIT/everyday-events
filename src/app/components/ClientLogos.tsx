import { FadeUp } from "@/app/components/FadeUp";

export function ClientLogos() {
  const logos = [
    "Infosys", "Tata Group", "BookMyShow Live", "DLF Events",
    "Percept Live", "Reliance Industries", "ITC Hotels",
    "Taj Hotels", "HDFC Bank", "Maruti Suzuki",
  ];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp className="text-center mb-12">
          <p className="text-gray-600 text-[10px] tracking-[0.4em] uppercase">Trusted by {"India's"} Leading Brands</p>
        </FadeUp>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-16">
          {logos.map((logo, i) => (
            <FadeUp key={logo} delay={i * 0.04}>
              <div
                className="text-gray-500 hover:text-gray-800 font-semibold text-xs tracking-[0.2em] uppercase transition-colors duration-300 cursor-default"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                {logo}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
