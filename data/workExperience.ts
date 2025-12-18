// data/workExperience.ts
import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiNestjs, SiPostgresql } from "react-icons/si";
import React from "react";
import { DiMongodb } from "react-icons/di";

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  year: number;
  description: string[];
  skills: Skill[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Empowering Energy",
    position: "Full Stack Engineer",
    duration: "1 Jun 2025 – Present",
    year: 2025,
    description: [
      "Developed interactive and animated user interfaces for ESAP’s AI products using Next.js, TypeScript, and modern JavaScript frameworks.",
      "Built voice-operated features for the AI Framework and Next-Gen ERP system, enhancing usability through natural interaction.",
      "Engineered full-stack solutions involving backend services, AI/ML integration, and real-time data visualization, supporting complex user queries via NLP pipelines.",
      "Contributed to the Zakira knowledge management platform and Jawib conversational interfaces for enterprise AI agent integration.",
      "Ensured responsive design and cross-device compatibility while maintaining high code quality in a fast-paced environment.",
      "Adapted to evolving project scopes and contributed to scalable feature development across the full technology stack.",
    ],
    skills: [
      { name: "TypeScript", icon: BiLogoTypescript },
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: RiNextjsFill },
      { name: "Nest.js", icon: SiNestjs },
      { name: "Tailwind", icon: RiTailwindCssFill },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Docker", icon: FaDocker },
    ],
    logo: "/logos/esap-log.svg",
  },
  {
    company: "Radyan Corporation",
    position: "Full Stack Engineer",
    duration: "2 Jan 2025 – Apr 2025",
    year: 2025,
    description: [
      "Led full stack development and architecture for high-traffic applications, ensuring scalability and maintainability.",
      "Implemented real-time systems using Socket.IO and Redis to support interactive features.",
      "Mentored a team of engineers through code reviews and architecture guidance, promoting best practices.",
      "Collaborated cross-functionally with product, design, and DevOps to align on technical delivery.",
      "Drove long-term architecture planning and infrastructure decisions to support business growth.",
      "Monitored application health through performance tuning, security audits, and observability tools.",
    ],
    skills: [
      { name: "TypeScript", icon: BiLogoTypescript },
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: RiNextjsFill },
      { name: "Nest.js", icon: SiNestjs },
      { name: "Tailwind", icon: RiTailwindCssFill },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Docker", icon: FaDocker },
    ],
    logo: "/logos/radyancorp.jpg",
  },
  
];
