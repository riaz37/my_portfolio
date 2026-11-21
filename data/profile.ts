export const SITE_URL = "https://riaz37.vercel.app";

export const profile = {
  name: "Riazul Islam",
  role: "Full Stack AI Engineer",
  location: "Dhaka, Bangladesh",
  availability: "Open to work · Remote, Gulf, Dhaka",
  headline: "I build production AI systems that ship.",
  intro:
    "Full Stack AI Engineer at ESAP AI. I take LLM products from idea to production: RAG with citations, multi-agent workflows and natural-language database interfaces, including bilingual Arabic and English platforms used by businesses across the Gulf.",
  email: "riazulislam.dev@gmail.com",
  resume: "/pdf/resume.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/riaz37" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/riaz37" },
  ],
} as const;

export const skills: ReadonlyArray<{ group: string; items: string }> = [
  {
    group: "AI",
    items: "LLMs, RAG, agentic workflows, LangChain, LangGraph, MCP, embeddings, evals",
  },
  {
    group: "Backend",
    items: "Python, FastAPI, Node.js, NestJS, PostgreSQL, MSSQL, Redis, vector DBs",
  },
  {
    group: "Frontend",
    items: "TypeScript, React, Next.js, Tailwind CSS, Motion",
  },
  { group: "Apple", items: "Swift, SwiftUI, on-device ML (llama.cpp)" },
  { group: "Infra", items: "Docker, Linux, Vercel, background jobs" },
];

export const education = {
  degree: "B.Sc. Industrial and Production Engineering",
  school: "Military Institute of Science and Technology (MIST)",
  year: "2025",
};

export const certifications =
  "Associate AI Engineer for Developers (DataCamp) · Code in Place (Stanford) · Scientific Computing with Python, JavaScript Algorithms and Data Structures (freeCodeCamp)";
