import { RiNextjsFill } from "react-icons/ri";

export interface Skill {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  liveUrl?: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Zyro",
    description:
      "Multi-agent code generation system using Inngest Agent Kit and E2B sandbox for secure execution.",
    icon: RiNextjsFill,
    technologies: ["Inngest", "E2B", "Next.js", "TypeScript"],
    liveUrl: "https://zyro37.vercel.app/",
    skills: [
      { name: "Multi-agent Systems" },
      { name: "Agentic Workflows" },
      { name: "Secure Execution" },
    ],
  },
  {
    id: 2,
    title: "Pingpanda",
    description:
      "LangGraph multi-agent system with Strategic Supervisor and real-time risk analysis engine.",
    icon: RiNextjsFill,
    technologies: ["LangGraph", "Python", "FastAPI", "Redis"],
    liveUrl: "https://www.pingpanda.online/",
    skills: [
      { name: "Graph-based Agents" },
      { name: "Real-time Analysis" },
      { name: "System Architecture" },
    ],
  },
  {
    id: 3,
    title: "Exorous Code",
    description:
      "CLI coding agent (pip install exorous) with semantic search, AST-based chunking, and MCP integration.",
    icon: RiNextjsFill,
    technologies: ["Python", "Click", "MCP", "Embeddings"],
    liveUrl: "https://exorous-docs.vercel.app/",
    skills: [
      { name: "CLI Development" },
      { name: "Semantic Search" },
      { name: "AST Chunking" },
    ],
  },
  {
    id: 4,
    title: "Skateboard37",
    description:
      "An interactive and visually engaging skateboard e-commerce platform built using Next.js and React. It features dynamic animations, a seamless shopping experience, and a modern UI design.",
    icon: RiNextjsFill,
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "GSAP"],
    liveUrl: "https://skateboard37.vercel.app",
    skills: [
      { name: "E-commerce Development" },
      { name: "UI/UX Design" },
      { name: "3D Animations" },
      { name: "Performance Optimization" },
    ],
  },
  {
    id: 5,
    title: "Animated 3D E-Commerce Website",
    description:
      "A comprehensive 3D project that showcases a dynamic e-commerce website with interactive animations.",
    icon: RiNextjsFill,
    technologies: ["Next.js", "JavaScript", "TailwindCSS", "GSAP", "Prismic"],
    liveUrl: "https://fizzi37.vercel.app",
    skills: [
      { name: "Web Scraping" },
      { name: "Data Analysis" },
      { name: "Automation" },
      { name: "Machine Learning" },
      { name: "Document Generation" },
    ],
  },
  {
    id: 6,
    title: "Case Cobra",
    description: "An e-commerce website created using Next.js.",
    icon: RiNextjsFill,
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    liveUrl: "https://casecobra37.vercel.app",
    skills: [
      { name: "Full Stack Development" },
      { name: "UI/UX Design" },
      { name: "Responsive Web Design" },
      { name: "Performance Optimization" },
    ],
  },
  {
    id: 7,
    title: "Sensai",
    description:
      "An AI-powered productivity suite that combines note-taking, chat, and content generation features using LLMs.",
    icon: RiNextjsFill,
    technologies: ["Next.js", "TailwindCSS", "TypeScript", "OpenAI API"],
    liveUrl: "https://sensai37.vercel.app/",
    skills: [
      { name: "AI Integration" },
      { name: "Content Generation" },
      { name: "Productivity Tools" },
      { name: "LLM Prompt Engineering" },
    ],
  },
  {
    id: 8,
    title: "ShortLink",
    description:
      "A URL shortening platform with custom alias support, built for speed and minimalism.",
    icon: RiNextjsFill,
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
    liveUrl: "https://shortlink37.vercel.app/",
    skills: [
      { name: "Backend Integration" },
      { name: "URL Shortening" },
      { name: "Custom Alias Routing" },
      { name: "Minimal UI Design" },
    ],
  },
];
