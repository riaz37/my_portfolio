import type { ReactNode } from "react";
import { Ink } from "./ink";

interface SectionProps {
  id: string;
  label: string;
  children: ReactNode;
}

export function Section({ id, label, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-label`} className="scroll-mt-20 py-16 sm:py-20">
      <div className="relative mb-10 inline-block">
        <h2 id={`${id}-label`} className="-rotate-1 font-hand text-[34px] leading-none text-fg">
          {label}
        </h2>
        <Ink mark="underline" className="absolute -bottom-3 left-0 w-[110%] text-accent" />
      </div>
      {children}
    </section>
  );
}
