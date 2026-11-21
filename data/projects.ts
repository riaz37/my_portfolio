export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  context: string;
  metric: string;
  stack: ReadonlyArray<string>;
  url: string;
  image: string;
  imageAlt: string;
}

// Only projects with a working public link belong here.
export const projects: ReadonlyArray<Project> = [
  {
    slug: "clarly",
    title: "Clarly",
    tagline: "Arabic and English AI support",
    description:
      "AI sales and support for Gulf businesses on WhatsApp, Instagram and Messenger. Answers customers in Arabic and English from the business's own documents with source citations, and hands off to staff below a confidence threshold or on restricted topics.",
    year: "2026",
    context: "ESAP AI",
    metric: "3 channels · 4 store integrations",
    stack: ["RAG", "WhatsApp templates", "Salla", "Zid", "Shopify", "WooCommerce"],
    url: "https://clarly.chat",
    image: "/work/clarly.webp",
    imageAlt: "Clarly landing page, headline reading We answer every chat at 02:14, with WhatsApp, Instagram, Messenger and English & Arabic support listed",
  },
  {
    slug: "hormonaiq",
    title: "HormonaIQ",
    tagline: "Hormonal health, with an AI companion",
    description:
      "A daily check-in for PMDD, PCOS and perimenopause that shows how symptoms follow the cycle, so people can bring the proof to their doctor. Its AI companion, Ora, answers through a multi-round tool loop over a clinical knowledge graph and consent-gated personal data, and accepts voice and photo input.",
    year: "2026",
    context: "Solo founder, early access",
    metric: "91 API endpoints · iOS + Android",
    stack: ["Expo", "React Native", "FastAPI", "Neo4j", "pgvector", "Supabase"],
    url: "https://www.hormonaiq.com",
    image: "/work/hormonaiq.webp",
    imageAlt: "HormonaIQ landing page: track the weeks your period app ignores, beside the app's Today screen",
  },
  {
    slug: "memfind",
    title: "Memfind",
    tagline: "On-device search for everything",
    description:
      "Search photos, screenshots, videos, PDFs, documents and voice recordings by what is in them, in your own words. Everything is indexed and searched on the device; nothing is uploaded. Shipped on the App Store for iPhone, iPad and Mac.",
    year: "2026",
    context: "Solo, App Store",
    metric: "iOS · iPadOS · macOS",
    stack: ["Swift", "SwiftUI", "llama.cpp", "On-device embeddings"],
    url: "https://getmemfind.com",
    image: "/work/memfind.webp",
    imageAlt: "Memfind landing page with an iPhone searching for a booking code",
  },
  {
    slug: "remotionui",
    title: "RemotionUI",
    tagline: "Open-source motion components",
    description:
      "A shadcn-style CLI for copy-and-paste Remotion video components. Production-ready motion where you own the source. Built and distributed solo, grown by building in public.",
    year: "2026",
    context: "Solo, open source",
    metric: "CLI + component registry",
    stack: ["TypeScript", "React", "Remotion", "CLI"],
    url: "https://remotionui.com",
    image: "/work/remotionui.webp",
    imageAlt: "RemotionUI landing page: production-ready motion for Remotion, with the CLI install command",
  },
  {
    slug: "zyro",
    title: "Zyro",
    tagline: "Multi-agent code generation",
    description:
      "Three specialised agents turn a natural-language prompt into a full-stack Next.js app, executed in isolated E2B sandboxes with hot reload and shareable preview URLs.",
    year: "2025",
    context: "Personal",
    metric: "3 agents · sandboxed execution",
    stack: ["Inngest Agent Kit", "E2B", "Next.js", "TypeScript"],
    url: "https://zyro37.vercel.app",
    image: "/work/zyro.webp",
    imageAlt: "Zyro start screen with a prompt box and example app ideas",
  },
];
