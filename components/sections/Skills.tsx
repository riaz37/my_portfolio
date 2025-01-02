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
} from "react-icons/si";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { icon: FaReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiFramer, name: "Framer Motion" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiNestjs, name: "NestJS" },
      { icon: FaPython, name: "Python" },
      { icon: SiDjango, name: "Django" },
      { icon: SiGraphql, name: "GraphQL" },
      { icon: FaCode, name: "REST API" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiRedis, name: "Redis" },
      { icon: FaDatabase, name: "Database Design" },
    ],
  },
  {
    name: "AI & Machine Learning",
    skills: [
      { icon: FaPython, name: "Python" },
      { icon: SiTensorflow, name: "TensorFlow" },

      { icon: FaRobot, name: "Machine Learning" },
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
