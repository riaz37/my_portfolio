"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

interface CountUpProps {
  text: string;
  className?: string;
}

// Counts every integer inside `text` up from zero once it scrolls into view.
// Server render and screen readers always get the final text.
export function CountUp({ text, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const parts = text.split(/(\d+)/);

  useEffect(() => {
    const root = ref.current;
    if (reduce || !inView || !root) return;
    const controls = Array.from(root.querySelectorAll<HTMLElement>("[data-n]")).map((node) => {
      const to = Number(node.dataset.n);
      return animate(0, to, {
        duration: 1.1,
        ease: "easeOut",
        onUpdate: (value) => {
          node.textContent = String(Math.round(value));
        },
      });
    });
    return () => controls.forEach((control) => control.stop());
  }, [inView, reduce]);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span ref={ref} aria-hidden="true">
        {parts.map((part, i) =>
          /^\d+$/.test(part) ? (
            <span key={i} data-n={part} className="tabular-nums">
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </span>
    </span>
  );
}
