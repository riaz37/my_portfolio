"use client";

import { motion, useReducedMotion } from "motion/react";

// A hand-sketched RAG pipeline: the shape of most of the AI work on this page.
const NODES = [
  { label: "your docs", note: "PDFs, sites, catalogs" },
  { label: "retrieve", note: "embed + vector search" },
  { label: "LLM + tools", note: "agents, guardrails" },
  { label: "cited answer", note: "Arabic or English" },
] as const;

const BOX = { w: 136, h: 64, y: 30, gap: 52, x0: 6 };
const EASE = [0.65, 0, 0.35, 1] as const;

function boxPath(x: number, y: number, w: number, h: number, seed: number): string {
  const j = (n: number) => ((seed * 7 + n * 13) % 5) - 2; // deterministic wobble
  return [
    `M${x + 3} ${y + 2 + j(1)}`,
    `C${x + w * 0.3} ${y - 2}, ${x + w * 0.7} ${y + 3}, ${x + w - 1} ${y + j(2)}`,
    `C${x + w + 2} ${y + h * 0.35}, ${x + w - 2} ${y + h * 0.7}, ${x + w + 1} ${y + h - 1}`,
    `C${x + w * 0.7} ${y + h + 2}, ${x + w * 0.3} ${y + h - 2}, ${x - 1} ${y + h + 1 + j(3)}`,
    `C${x + 2} ${y + h * 0.6}, ${x - 2} ${y + h * 0.3}, ${x + 6} ${y - 1}`,
  ].join(" ");
}

function arrowPaths(fromX: number, toX: number, y: number): string[] {
  const mid = (fromX + toX) / 2;
  return [
    `M${fromX} ${y + 2} C${mid - 6} ${y - 5}, ${mid + 6} ${y + 6}, ${toX} ${y}`,
    `M${toX - 9} ${y - 7} L${toX} ${y} L${toX - 8} ${y + 8}`,
  ];
}

export function PipelineSketch() {
  const reduce = useReducedMotion();
  const width = BOX.x0 * 2 + NODES.length * BOX.w + (NODES.length - 1) * BOX.gap;
  const midY = BOX.y + BOX.h / 2;

  const draw = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          whileInView: { pathLength: 1, opacity: 1 },
          viewport: { once: true },
          transition: {
            pathLength: { duration: 0.7, delay, ease: EASE },
            opacity: { duration: 0.01, delay },
          },
        };

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.5, delay },
        };

  return (
    <svg
      viewBox={`0 0 ${width} 132`}
      role="img"
      aria-label="Sketch of a retrieval pipeline: your documents are retrieved with embeddings and vector search, passed to an LLM with tools and guardrails, and returned as a cited answer in Arabic or English."
      className="h-auto w-full overflow-visible"
      fill="none"
    >
      {NODES.map((node, i) => {
        const x = BOX.x0 + i * (BOX.w + BOX.gap);
        const base = 0.3 + i * 0.45;
        const last = i === NODES.length - 1;
        return (
          <g key={node.label}>
            <motion.path
              d={boxPath(x, BOX.y, BOX.w, BOX.h, i + 1)}
              stroke="currentColor"
              strokeWidth={last ? 2.4 : 1.8}
              strokeLinecap="round"
              className={last ? "text-accent" : "text-fg"}
              {...draw(base)}
            />
            <motion.text
              x={x + BOX.w / 2}
              y={midY + 8}
              textAnchor="middle"
              className={`font-hand ${last ? "fill-accent" : "fill-fg"}`}
              fontSize="26"
              {...fade(base + 0.35)}
            >
              {node.label}
            </motion.text>
            <motion.text
              x={x + BOX.w / 2}
              y={BOX.y + BOX.h + 30}
              textAnchor="middle"
              className="fill-faint font-hand"
              fontSize="19"
              {...fade(base + 0.5)}
            >
              {node.note}
            </motion.text>
            {!last &&
              arrowPaths(x + BOX.w + 8, x + BOX.w + BOX.gap - 8, midY).map((d, k) => (
                <motion.path
                  key={d}
                  d={d}
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted"
                  {...draw(base + 0.4 + k * 0.2)}
                />
              ))}
          </g>
        );
      })}
    </svg>
  );
}
