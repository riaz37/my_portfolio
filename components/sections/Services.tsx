import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaRobot,
  FaChartLine,
  FaLaptopCode,
  FaPalette
} from "react-icons/fa";

const SERVICES = [
  {
    icon: FaCode,
    title: "Web Development",
    description: "Creating responsive, performant web applications using modern technologies like Next.js, React, and TypeScript.",
    color: "text-blue-500"
  },
  {
    icon: FaPalette,
    title: "Responsive Web Design",
    description: "Crafting pixel-perfect, mobile-first designs that look stunning and function seamlessly across all devices and screen sizes.",
    color: "text-purple-500"
  },
  {
    icon: FaDatabase,
    title: "Backend Solutions",
    description: "Designing scalable backend architectures with Node.js, Express, NestJS, Django, and implementing robust REST API development strategies.",
    color: "text-green-500"
  },
  {
    icon: FaRobot,
    title: "AI engineering",
    description: "Architecting production-ready AI systems with LLMs, RAG, and Agentic Workflows using LangChain and LangGraph.",
    color: "text-red-500"
  },
  {
    icon: FaChartLine,
    title: "Performance Optimization",
    description: "Enhancing application performance, conducting thorough audits, and implementing best practices.",
    color: "text-orange-500"
  },
  {
    icon: FaLaptopCode,
    title: "Technical Consulting",
    description: "Providing expert guidance on technology stack selection, architecture design, and strategic development approaches.",
    color: "text-indigo-500"
  }
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center justify-center px-4 py-16 bg-background"
    >
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/[0.1] opacity-50 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          My Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2
              }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`text-5xl mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                <service.icon />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-foreground/80">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
