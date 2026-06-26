import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) => {
      const el = e.target as Element;
      setHover(!!el.closest("button, a, [role=button]"));
    };
    const onDown = () => setActive(true);
    const onUp   = () => setActive(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#E31C25] mix-blend-difference"
        style={{ width: 10, height: 10 }}
        animate={{ x: pos.x - 5, y: pos.y - 5, scale: active ? 0.7 : hover ? 2.5 : 1 }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-[#E31C25]/30"
        style={{ width: 38, height: 38 }}
        animate={{ x: pos.x - 19, y: pos.y - 19, scale: hover ? 1.4 : 1, opacity: hover ? 0.8 : 0.4 }}
        transition={{ type: "spring", stiffness: 180, damping: 22 }}
      />
    </>
  );
}
