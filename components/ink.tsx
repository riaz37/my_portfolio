"use client";

import { motion, useReducedMotion } from "motion/react";

// Hand-drawn strokes. Each mark is a set of SVG paths that "draw" in when
// scrolled into view; reduced-motion users get the finished mark.
export const INK = {
  underline: { viewBox: "0 0 260 16", paths: ["M3 10 C 45 4, 95 3, 140 7 S 215 12, 257 5"] },
  scribble: {
    viewBox: "0 0 260 22",
    paths: ["M4 9 C 60 3, 150 4, 254 7", "M14 17 C 80 11, 170 12, 240 14"],
  },
  circle: {
    viewBox: "0 0 60 46",
    paths: ["M32 5 C 13 3, 3 14, 5 25 C 7 37, 25 43, 39 38 C 53 33, 57 17, 46 9 C 38 3, 23 3, 15 9"],
  },
  arrow: {
    viewBox: "0 0 80 56",
    paths: ["M5 6 C 24 2, 48 6, 58 22 C 64 32, 63 41, 60 49", "M50 41 L 60 50 L 68 39"],
  },
} as const;

type MarkName = keyof typeof INK;

interface InkProps {
  mark: MarkName;
  className?: string;
  delay?: number;
  strokeWidth?: number;
}

export function Ink({ mark, className, delay = 0, strokeWidth = 2.5 }: InkProps) {
  const reduce = useReducedMotion();
  const { viewBox, paths } = INK[mark];

  return (
    <svg viewBox={viewBox} fill="none" aria-hidden="true" className={className}>
      {paths.map((d, i) =>
        reduce ? (
          <path key={d} d={d} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <motion.path
            key={d}
            d={d}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              pathLength: { duration: 0.8, delay: delay + i * 0.35, ease: [0.65, 0, 0.35, 1] },
              opacity: { duration: 0.01, delay: delay + i * 0.35 },
            }}
          />
        ),
      )}
    </svg>
  );
}
