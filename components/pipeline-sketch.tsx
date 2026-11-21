"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  NODES,
  TALL,
  WIDE,
  arrowPaths,
  boxPath,
  diamondPath,
  loopHead,
  type Layout,
  type NodeId,
} from "./sketch-layouts";

// Dashed strokes fade in: motion's pathLength draw overrides strokeDasharray.
// Hand-sketched architecture of a production AI feature: what sits around the model.
const EASE = [0.65, 0, 0.35, 1] as const;
const STEP_DELAY = 0.3;
const ORDER: Record<NodeId | "user", number> = {
  user: -1,
  guard: 0,
  router: 1,
  retrieve: 2,
  agent: 3,
  gate: 4,
  answer: 5,
  handoff: 5,
};

const LABEL =
  "Architecture sketch of a production AI feature. A request passes guardrails for prompt injection, PII and policy, then a router that picks intent, model and cache. Retrieval uses hybrid search and reranking. An LLM calls tools in a loop with a step budget. A confidence gate checks the answer is grounded and schema-valid: if yes, a cited answer streams back; if not, a human takes over. Every step is traced and scored, and evals feed back into prompts, retrieval and routing.";

const at = (id: NodeId | "user") => 0.2 + (ORDER[id] + 1) * STEP_DELAY;

function useInk() {
  const reduce = useReducedMotion();
  const draw = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          whileInView: { pathLength: 1, opacity: 1 },
          viewport: { once: true },
          transition: {
            pathLength: { duration: 0.6, delay, ease: EASE },
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
          transition: { duration: 0.45, delay },
        };
  return { draw, fade };
}

interface SketchProps {
  layout: Layout;
  className: string;
}

function Sketch({ layout, className }: SketchProps) {
  const { draw, fade } = useInk();
  const stroke = { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" } as const;
  const { rail } = layout;
  const railDelay = at("handoff") + 0.4;

  return (
    <svg
      viewBox={`0 0 ${layout.w} ${layout.h}`}
      role="img"
      aria-label={LABEL}
      className={`h-auto w-full overflow-visible ${className}`}
      fill="none"
    >
      <motion.text
        x={layout.user.x}
        y={layout.user.y}
        textAnchor="middle"
        className="fill-muted font-hand"
        fontSize="22"
        {...fade(0.1)}
      >
        user
      </motion.text>

      {NODES.map((node, i) => {
        const rect = layout.rects[node.id];
        const note = layout.notes[node.id];
        const t = at(node.id);
        const accent = node.kind === "out";
        const isGate = node.kind === "gate";
        return (
          <g key={node.id}>
            <motion.path
              d={isGate ? diamondPath(rect) : boxPath(rect, i + 1)}
              {...stroke}
              strokeWidth={accent ? 2.4 : 1.8}
              strokeDasharray={node.kind === "alt" ? "6 5" : undefined}
              className={accent ? "text-accent" : "text-fg"}
              {...(node.kind === "alt" ? fade(t) : draw(t))}
            />
            <motion.text
              x={rect.x + rect.w / 2}
              y={rect.y + rect.h / 2 + (isGate ? 6 : 8)}
              textAnchor="middle"
              className={`font-hand ${accent ? "fill-accent" : "fill-fg"}`}
              fontSize={isGate ? 20 : 25}
              {...fade(t + 0.3)}
            >
              {node.label}
            </motion.text>
            <motion.text
              x={note.x}
              y={note.y}
              textAnchor={note.anchor}
              className="fill-faint font-hand"
              fontSize="18"
              {...fade(t + 0.45)}
            >
              {node.note.map((line, k) => (
                <tspan key={line} x={note.x} dy={k === 0 ? 0 : 21}>
                  {line}
                </tspan>
              ))}
            </motion.text>
          </g>
        );
      })}

      {layout.edges.map((edge) => {
        const t = at(edge.from) + 0.35;
        return (
          <g key={edge.d.join(",")}>
            {arrowPaths(edge.d).map((d, k) => (
              <motion.path key={d} d={d} {...stroke} strokeWidth={1.8} className="text-muted" {...draw(t + k * 0.15)} />
            ))}
            {edge.label && (
              <motion.text
                x={edge.label.x}
                y={edge.label.y}
                textAnchor="middle"
                className="fill-faint font-hand"
                fontSize="17"
                {...fade(t + 0.3)}
              >
                {edge.label.text}
              </motion.text>
            )}
          </g>
        );
      })}

      {[layout.loop, loopHead(layout.loop)].map((d, k) => (
        <motion.path key={d} d={d} {...stroke} strokeWidth={1.8} className="text-accent" {...draw(at("agent") + 0.25 + k * 0.2)} />
      ))}

      <g className="text-faint">
        {rail.ticks.map((x) => (
          <motion.path
            key={x}
            d={`M${x} ${rail.tickY[0]} L${x} ${rail.tickY[1]}`}
            {...stroke}
            strokeWidth={1.4}
            strokeDasharray="3 5"
            {...fade(railDelay)}
          />
        ))}
        <motion.path
          d={`M${rail.line[0]} ${rail.line[2]} C${rail.line[0] + 120} ${rail.line[2] + 3}, ${rail.line[1] - 120} ${rail.line[2] - 3}, ${rail.line[1]} ${rail.line[2]}`}
          {...stroke}
          strokeWidth={1.4}
          strokeDasharray="3 5"
          {...fade(railDelay + 0.2)}
        />
        <motion.text
          x={rail.labelX}
          y={rail.labelY}
          textAnchor="middle"
          className="fill-muted font-hand"
          fontSize="19"
          {...fade(railDelay + 0.5)}
        >
          {rail.label.map((line, k) => (
            <tspan key={line} x={rail.labelX} dy={k === 0 ? 0 : 22}>
              {line}
            </tspan>
          ))}
        </motion.text>
      </g>
    </svg>
  );
}

export function PipelineSketch() {
  return (
    <>
      <Sketch layout={WIDE} className="hidden sm:block" />
      <Sketch layout={TALL} className="mx-auto max-w-sm sm:hidden" />
    </>
  );
}
