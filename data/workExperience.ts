// data/workExperience.ts
import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiNestjs, SiFramer, SiPostgresql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
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
    company: "Radyan Corporation",
    position: "Full Stack Developer Team Lead",
    duration: "January 2025 – Present",
    year: 2025,
    description: [
      "Leading a team of developers in architecting and building full-stack web applications using Next.js, NestJS, and TypeScript.",
      "Driving the adoption of microservices and scalable architectures to enhance application performance and maintainability.",
      "Collaborating with UI/UX designers, product managers, and DevOps teams to streamline the development process and meet business objectives.",
      "Providing mentorship to junior developers, ensuring adherence to best coding practices and fostering a culture of technical excellence.",
      "Developing and optimizing APIs, ensuring seamless integration between frontend and backend services.",
      "Implementing SSR and SSG techniques to improve SEO and page load speeds for high-traffic applications.",
      "Managing code quality through rigorous code reviews, enforcing best practices, and implementing CI/CD pipelines.",
      "Resolving complex challenges related to state management, server-side rendering, database optimization, and third-party integrations.",
    ],
    skills: [
      { name: "TypeScript", icon: BiLogoTypescript },
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: RiNextjsFill },
      { name: "Nest.js", icon: SiNestjs },
      { name: "Tailwind", icon: RiTailwindCssFill },
      { name: "MongoDB", icon: DiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Docker", icon: FaDocker },
    ],
    logo: "/logos/radyancorp.svg",
  },

  {
    company: "Acro Nation",
    position: "Project Lead",
    duration: "October 2024 – December 2024",
    year: 2024,
    description: [
      "Led a team of 10 developers in building scalable, high-performance web applications using Next.js, React, Tailwind CSS, and NestJS.",
      "Integrated microservice architecture with NestJS to improve scalability, maintainability, and flexibility of applications.",
      "Collaborated with cross-functional teams, including UI/UX designers, product managers, and DevOps, to ensure smooth project execution and fulfill client requirements.",
      "Mentored junior developers by providing technical guidance on best practices for Next.js, React, and TypeScript.",
      "Designed and implemented server-side rendering (SSR) and static site generation (SSG) solutions, optimizing page load times and enhancing SEO for large-scale websites.",
      "Developed custom API routes and integrated third-party APIs to enable seamless backend and frontend communication.",
      "Enforced coding standards and conducted code reviews to maintain high-quality, maintainable codebases.",
      "Resolved complex technical issues involving server-side rendering, state management, and third-party integrations.",
    ],
    skills: [
      { name: "TypeScript", icon: BiLogoTypescript },
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: RiNextjsFill },
      { name: "Nest.js", icon: SiNestjs },
      { name: "Tailwind", icon: RiTailwindCssFill },
      { name: "MongoDB", icon: DiMongodb },
    ],
    logo: "/logos/acronation.svg",
  },
  {
    company: "Freelancer",
    position: "Full Stack Developer",
    duration: "June 2022 – September 2024",
    year: 2022,
    description: [
      "Designed and developed custom web applications for clients using Next.js, React, and Tailwind CSS.",
      "Built efficient backend services with Node.js, NestJS, and MongoDB to ensure scalability and reliability.",
      "Collaborated closely with clients to understand requirements, deliver prototypes, and implement feedback for optimal solutions.",
      "Implemented responsive designs and ensured cross-browser compatibility for a seamless user experience.",
      "Developed and integrated APIs to facilitate seamless communication between frontend and backend systems.",
      "Deployed and maintained applications on cloud platforms like AWS and Vercel, ensuring high uptime and performance.",
      "Provided post-deployment support and optimization, ensuring continuous improvement and client satisfaction.",
    ],
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: RiNextjsFill },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },

      { name: "Node.js", icon: FaNodeJs },
      { name: "Nest.js", icon: SiNestjs },
      { name: "MongoDB", icon: DiMongodb },
    ],
    logo: "/logos/freelance.svg",
  },
];
