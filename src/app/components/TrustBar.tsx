import { useState, useEffect, useRef } from "react";
import { useInView } from "motion/react";
import { FadeUp } from "@/app/components/FadeUp";

interface CountUpProps {
  end: number;
  suffix?: string;
}

function CountUp({ end, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let n = 0;
    const step = end / (1800 / 16);
    const t = setInterval(() => {
      n += step;
      if (n >= end) {
        setCount(end);
        clearInterval(t);
      } else {
        setCount(Math.floor(n));
      }
    }, 16);
    return () => clearInterval(t);
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function TrustBar() {
  const stats = [
    { val: 14,  suf: "+",  label: "Years of Excellence"   },
    { val: 500, suf: "+",  label: "Events Executed"        },
    { val: 200, suf: "+",  label: "Happy Clients"          },
    { val: 50,  suf: "+",  label: "Expert Team Members"    },
  ];

  return (
    <section className="bg-[#171717] border-y border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/8">
          {stats.map(({ val, suf, label }, i) => (
            <FadeUp key={label} delay={i * 0.1} className="text-center lg:px-10">
              <div
                className="font-bold text-[#E31C25] mb-2 leading-none"
                style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
              >
                <CountUp end={val} suffix={suf} />
              </div>
              <div className="text-white/40 text-[10px] tracking-[0.25em] uppercase">{label}</div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
