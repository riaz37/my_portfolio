export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: ReadonlyArray<{ text: string; metric?: string }>;
}

export const experience: ReadonlyArray<Experience> = [
  {
    company: "ESAP AI",
    role: "Full Stack AI Engineer",
    period: "2025 — Now",
    location: "Remote",
    highlights: [
      {
        text: "Building Clarly, an Arabic and English AI sales and support platform on WhatsApp, Instagram and Messenger, with cited answers and confidence-based human handoff.",
      },
      {
        text: "Architected a FastAPI natural-language SQL agent that lets non-technical users query MSSQL databases conversationally.",
        metric: "95% query accuracy",
      },
      {
        text: "Built embeddings-based semantic search, AI-assisted Excel-to-database mapping and Redis-backed background jobs.",
        metric: "1,000+ concurrent file operations",
      },
      {
        text: "Owned end-to-end delivery of ESAP RAG, an Arabic and English document intelligence platform for banking, energy, telco, retail and public-sector workflows.",
      },
    ],
  },
  {
    company: "Radyan Corporation",
    role: "Full Stack Engineer",
    period: "2023 — 2024",
    location: "Remote",
    highlights: [
      {
        text: "Architected and delivered two production web platforms on Next.js and NestJS.",
        metric: "40% faster load time",
      },
      {
        text: "Managed deliverables for a 10-person team, set code quality standards and mentored 5+ junior developers.",
        metric: "30% faster onboarding",
      },
    ],
  },
];
