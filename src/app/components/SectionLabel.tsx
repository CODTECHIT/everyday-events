import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  center?: boolean;
}

export function SectionLabel({ children, center = false }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${center ? "justify-center" : ""}`}>
      <div className="h-px w-10 bg-[#E31C25] flex-shrink-0" />
      <span className="text-[#E31C25] text-[10px] tracking-[0.35em] uppercase font-medium">{children}</span>
    </div>
  );
}
