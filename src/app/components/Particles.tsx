import { motion } from "motion/react";

export function Particles() {
  const items = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x:    Math.random() * 100,
    y:    Math.random() * 100,
    size: Math.random() * 2.5 + 0.8,
    dur:  Math.random() * 14 + 10,
    del:  Math.random() * 8,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#E31C25]"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -70, 0], opacity: [0, 0.65, 0] }}
          transition={{ duration: p.dur, delay: p.del, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
