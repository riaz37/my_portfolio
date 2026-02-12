import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaCode,
  FaRobot,
  FaBrain,
  FaSearch,
  FaProjectDiagram,
  FaMagic,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiRedis,
  SiNestjs,
  SiTensorflow,
  SiDjango,
  SiFramer,
  SiFastapi,
  SiSocketdotio,
  SiGreensock,
  SiChainlink,
} from "react-icons/si";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { icon: FaReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiGreensock, name: "GSAP" },
      { icon: SiFramer, name: "Framer Motion" },
      { icon: FaReact, name: "Zustand" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiNestjs, name: "NestJS" },
      { icon: FaPython, name: "Python" },
      { icon: SiFastapi, name: "FastAPI" },
      { icon: SiGraphql, name: "GraphQL" },
      { icon: SiSocketdotio, name: "Socket.IO" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiRedis, name: "Redis" },
      { icon: FaDatabase, name: "Vector DB" },
    ],
  },
  {
    name: "AI engineering",
    skills: [
      { icon: SiChainlink, name: "LangChain" },
      { icon: FaProjectDiagram, name: "LangGraph" },
      { icon: FaSearch, name: "RAG" },
      { icon: FaBrain, name: "LLM" },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-primary flex items-center justify-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Technologies
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            className="bg-card text-card-foreground rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: categoryIndex * 0.2,
            }}
          >
            <h3 className="text-xl font-semibold text-primary mb-6 border-b pb-2">
              {category.name}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-2 text-foreground"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <skill.icon className="text-primary text-2xl" />
                  <span className="text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
