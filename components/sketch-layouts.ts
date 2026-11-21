// Data + geometry for the hero architecture sketch. Two layouts share one
// node list: a wide left-to-right flow and a stacked one for phones.

export type NodeId = "guard" | "router" | "retrieve" | "agent" | "gate" | "answer" | "handoff";
type Kind = "box" | "gate" | "out" | "alt";

export interface SketchNode {
  id: NodeId;
  label: string;
  note: readonly string[];
  kind: Kind;
}

export const NODES: readonly SketchNode[] = [
  { id: "guard", label: "guardrails", note: ["injection, PII", "& policy checks"], kind: "box" },
  { id: "router", label: "router", note: ["intent, model", "& cache"], kind: "box" },
  { id: "retrieve", label: "retrieve", note: ["hybrid search", "+ rerank"], kind: "box" },
  { id: "agent", label: "LLM + tools", note: ["tool-call loop,", "step budget"], kind: "box" },
  { id: "gate", label: "confident?", note: ["grounded?", "schema-valid?"], kind: "gate" },
  { id: "answer", label: "answer", note: ["cited,", "streamed"], kind: "out" },
  { id: "handoff", label: "a human", note: ["low confidence"], kind: "alt" },
];

interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Note {
  x: number;
  y: number;
  anchor: "middle" | "start";
}

interface Edge {
  from: NodeId | "user";
  d: [number, number, number, number];
  label?: { text: string; x: number; y: number };
}

export interface Layout {
  w: number;
  h: number;
  user: { x: number; y: number };
  rects: Record<NodeId, Rect>;
  notes: Record<NodeId, Note>;
  edges: readonly Edge[];
  loop: string;
  rail: {
    line: [number, number, number];
    ticks: readonly number[];
    tickY: [number, number];
    label: readonly string[];
    labelX: number;
    labelY: number;
  };
}

const MAIN_Y = 110;
const MAIN_H = 64;
const WIDE_NOTE_Y = 200;

export const WIDE: Layout = {
  w: 1000,
  h: 318,
  user: { x: 22, y: 150 },
  rects: {
    guard: { x: 80, y: MAIN_Y, w: 125, h: MAIN_H },
    router: { x: 245, y: MAIN_Y, w: 115, h: MAIN_H },
    retrieve: { x: 400, y: MAIN_Y, w: 145, h: MAIN_H },
    agent: { x: 585, y: MAIN_Y, w: 145, h: MAIN_H },
    gate: { x: 765, y: 104, w: 110, h: 76 },
    answer: { x: 900, y: 40, w: 98, h: 60 },
    handoff: { x: 900, y: 184, w: 98, h: 60 },
  },
  notes: {
    guard: { x: 142, y: WIDE_NOTE_Y, anchor: "middle" },
    router: { x: 302, y: WIDE_NOTE_Y, anchor: "middle" },
    retrieve: { x: 472, y: WIDE_NOTE_Y, anchor: "middle" },
    agent: { x: 657, y: WIDE_NOTE_Y, anchor: "middle" },
    gate: { x: 820, y: WIDE_NOTE_Y + 6, anchor: "middle" },
    answer: { x: 949, y: 124, anchor: "middle" },
    handoff: { x: 949, y: 268, anchor: "middle" },
  },
  edges: [
    { from: "user", d: [50, 142, 74, 142] },
    { from: "guard", d: [211, 142, 239, 142] },
    { from: "router", d: [366, 142, 394, 142] },
    { from: "retrieve", d: [551, 142, 579, 142] },
    { from: "agent", d: [736, 142, 760, 142] },
    { from: "gate", d: [852, 124, 896, 78], label: { text: "yes", x: 884, y: 116 } },
    { from: "gate", d: [852, 160, 896, 208], label: { text: "no", x: 884, y: 178 } },
  ],
  loop: "M622 106 C 610 52, 706 52, 694 104",
  rail: {
    line: [142, 820, 272],
    ticks: [142, 302, 472, 657, 820],
    tickY: [234, 268],
    label: ["every step traced & scored: evals feed back into prompts, retrieval and routing"],
    labelX: 481,
    labelY: 304,
  },
};

const COL_X = 35;
const COL_W = 150;
const STEP = 90;
const tallRow = (i: number): Rect => ({ x: COL_X, y: 48 + i * STEP, w: COL_W, h: 56 });
const tallNote = (i: number): Note => ({ x: 205, y: 48 + i * STEP + 22, anchor: "start" });
const tallArrow = (from: NodeId, i: number): Edge => {
  const y = 48 + i * STEP + 56;
  return { from, d: [110, y + 4, 110, y + 30] };
};

export const TALL: Layout = {
  w: 360,
  h: 712,
  user: { x: 110, y: 20 },
  rects: {
    guard: tallRow(0),
    router: tallRow(1),
    retrieve: tallRow(2),
    agent: tallRow(3),
    gate: { x: 48, y: 408, w: 124, h: 74 },
    answer: { x: 10, y: 520, w: 120, h: 56 },
    handoff: { x: 200, y: 520, w: 120, h: 56 },
  },
  notes: {
    guard: tallNote(0),
    router: tallNote(1),
    retrieve: tallNote(2),
    agent: tallNote(3),
    gate: { x: 205, y: 438, anchor: "start" },
    answer: { x: 70, y: 602, anchor: "middle" },
    handoff: { x: 260, y: 602, anchor: "middle" },
  },
  edges: [
    { from: "user", d: [110, 28, 110, 44] },
    tallArrow("guard", 0),
    tallArrow("router", 1),
    tallArrow("retrieve", 2),
    { from: "agent", d: [110, 378, 110, 406] },
    { from: "gate", d: [86, 472, 72, 514], label: { text: "yes", x: 52, y: 500 } },
    { from: "gate", d: [136, 472, 238, 514], label: { text: "no", x: 186, y: 482 } },
  ],
  loop: "M37 330 C -2 322, -2 372, 33 364",
  rail: {
    line: [20, 340, 650],
    ticks: [],
    tickY: [0, 0],
    label: ["every step traced & scored:", "evals tune prompts & retrieval"],
    labelX: 180,
    labelY: 680,
  },
};

// Deterministic wobble so server and client render identical paths.
const jitter = (seed: number, n: number) => ((seed * 7 + n * 13) % 5) - 2;

export function boxPath({ x, y, w, h }: Rect, seed: number): string {
  const j = (n: number) => jitter(seed, n);
  return [
    `M${x + 3} ${y + 2 + j(1)}`,
    `C${x + w * 0.3} ${y - 2}, ${x + w * 0.7} ${y + 3}, ${x + w - 1} ${y + j(2)}`,
    `C${x + w + 2} ${y + h * 0.35}, ${x + w - 2} ${y + h * 0.7}, ${x + w + 1} ${y + h - 1}`,
    `C${x + w * 0.7} ${y + h + 2}, ${x + w * 0.3} ${y + h - 2}, ${x - 1} ${y + h + 1 + j(3)}`,
    `C${x + 2} ${y + h * 0.6}, ${x - 2} ${y + h * 0.3}, ${x + 6} ${y - 1}`,
  ].join(" ");
}

export function diamondPath({ x, y, w, h }: Rect): string {
  const cx = x + w / 2;
  const cy = y + h / 2;
  return [
    `M${cx + 2} ${y}`,
    `C${cx + w * 0.2} ${y + h * 0.2}, ${x + w * 0.85} ${cy - 6}, ${x + w} ${cy + 1}`,
    `C${x + w * 0.8} ${cy + h * 0.2}, ${cx + w * 0.2} ${y + h * 0.85}, ${cx - 1} ${y + h}`,
    `C${cx - w * 0.2} ${y + h * 0.8}, ${x + w * 0.15} ${cy + 5}, ${x} ${cy - 1}`,
    `C${x + w * 0.2} ${cy - h * 0.2}, ${cx - w * 0.22} ${y + h * 0.18}, ${cx + 6} ${y - 2}`,
  ].join(" ");
}

const HEAD_LEN = 9;
const HEAD_SPREAD = 0.5; // radians

function head(tipX: number, tipY: number, angle: number): string {
  const a1 = angle + Math.PI - HEAD_SPREAD;
  const a2 = angle + Math.PI + HEAD_SPREAD;
  const p = (a: number) =>
    `${(tipX + Math.cos(a) * HEAD_LEN).toFixed(1)} ${(tipY + Math.sin(a) * HEAD_LEN).toFixed(1)}`;
  return `M${p(a1)} L${tipX} ${tipY} L${p(a2)}`;
}

// A slightly bowed stroke from (x1,y1) to (x2,y2) plus an arrowhead.
export function arrowPaths([x1, y1, x2, y2]: readonly number[]): [string, string] {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const bow = 3;
  const nx = (-dy / Math.hypot(dx, dy)) * bow;
  const ny = (dx / Math.hypot(dx, dy)) * bow;
  const c1 = [x1 + dx / 3 + nx, y1 + dy / 3 + ny];
  const c2 = [x1 + (2 * dx) / 3 - nx, y1 + (2 * dy) / 3 - ny];
  const line = `M${x1} ${y1} C${c1[0].toFixed(1)} ${c1[1].toFixed(1)}, ${c2[0].toFixed(1)} ${c2[1].toFixed(1)}, ${x2} ${y2}`;
  return [line, head(x2, y2, Math.atan2(y2 - c2[1], x2 - c2[0]))];
}

// Arrowhead at the end of the loop path, pointing along its last segment.
export function loopHead(loop: string): string {
  const nums = loop.match(/-?\d+(\.\d+)?/g)?.map(Number) ?? [];
  const [cx, cy, x, y] = nums.slice(-4);
  return head(x, y, Math.atan2(y - cy, x - cx));
}
