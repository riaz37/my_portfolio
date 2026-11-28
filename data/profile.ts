export const SITE_URL = "https://riaz37.pages.dev";

export const profile = {
  name: "Riazul Islam",
  role: "Full Stack AI Engineer",
  location: "Dhaka, Bangladesh",
  availability: "Open to work",
  headline: "I build production AI systems that ship.",
  intro:
    "Full Stack AI Engineer at ESAP AI. I take LLM products from idea to production: RAG with citations, multi-agent workflows and natural-language database interfaces, including bilingual Arabic and English platforms used by businesses across the Gulf.",
  email: "riazulislam.dev@gmail.com",
  xHandle: "@riaz_37",
  resume: "/pdf/resume.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/riaz37", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/riaz37", icon: "linkedin" },
    { label: "X", href: "https://x.com/riaz_37", icon: "x" },
  ],
} as const;

export interface SkillGroup {
  group: string;
  items: ReadonlyArray<string>;
  /** Items to pick out with the highlighter. */
  highlight?: ReadonlyArray<string>;
}

export const skills: ReadonlyArray<SkillGroup> = [
  {
    group: "AI",
    items: ["LLMs", "RAG", "agentic workflows", "LangChain", "LangGraph", "MCP", "embeddings", "evals"],
    highlight: ["RAG", "agentic workflows", "MCP", "evals"],
  },
  {
    group: "Backend",
    items: ["Python", "FastAPI", "Node.js", "NestJS", "PostgreSQL", "MSSQL", "Redis", "vector DBs"],
  },
  {
    group: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Motion"],
  },
  { group: "Apple", items: ["Swift", "SwiftUI", "on-device ML (llama.cpp)"] },
  { group: "Infra", items: ["Docker", "Linux", "Vercel", "background jobs"] },
];

export const education = {
  degree: "B.Sc. Industrial and Production Engineering",
  school: "Military Institute of Science and Technology (MIST)",
  year: "2025",
};

export const certifications: ReadonlyArray<{ name: string; issuer: string }> = [
  { name: "Associate AI Engineer for Developers", issuer: "DataCamp" },
  { name: "Code in Place", issuer: "Stanford" },
  { name: "Scientific Computing with Python", issuer: "freeCodeCamp" },
  { name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp" },
];
