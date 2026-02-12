// components/sections/Hero.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaRocket,
  FaCode,
} from "react-icons/fa";
import Image from "next/image";

const PROFESSIONAL_TITLES = [
  "Full Stack AI Engineer",
  "Software Engineer",
  "AI Solutions Architect",
  "Full Stack Developer",
];

const SocialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/riaz37",
    color: "hover:text-gray-800",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/riaz37",
    color: "hover:text-blue-600",
  },
  {
    icon: FaFacebook,
    href: "https://facebook.com/rafi302001",
    color: "hover:text-blue-400",
  },
];

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const titleCycle = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % PROFESSIONAL_TITLES.length);
    }, 3000);

    return () => clearInterval(titleCycle);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          {/* Name and Dynamic Title */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Riazul Islam
            </h1>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl text-primary"
              >
                {PROFESSIONAL_TITLES[currentTitle]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Description */}
          <p className="text-foreground/80 max-w-xl mx-auto md:mx-0 text-base leading-relaxed">
            Specializing in architecting production-ready AI systems with LLMs, RAG, and Agentic Workflows,
            while building scalable full-stack applications with modern technology stacks.
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <FaRocket /> View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/10 transition-colors"
            >
              <FaEnvelope /> Contact Me
            </motion.button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            {SocialLinks.map(({ icon: Icon, href, color }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`text-2xl text-foreground/70 ${color} transition-colors`}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center items-center relative"
        >
          <div className="absolute -inset-6 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96">
            <Image
              src="/pics/photo.png"
              alt="Riazul Islam"
              fill
              priority
              className="rounded-full object-cover shadow-2xl border-4 border-primary/30 hover:border-primary/50 transition-all duration-300"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
