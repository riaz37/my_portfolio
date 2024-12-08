// components/sections/Hero.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaCode,
  FaRocket,
  FaDownload,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import { cn } from "@/lib/utils";

const PROFESSIONAL_TITLES = [
  "Full Stack Developer",
  "AI Enthusiast",
  "Software Engineer",
  "Web Innovator",
];

const ACHIEVEMENTS = [
  {
    number: "3+",
    label: "Years of Experience",
    icon: FaCode,
  },
  {
    number: "20+",
    label: "Projects Completed",
    icon: FaRocket,
  },
];

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const imageControls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titleCycle = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTitle((prev) => (prev + 1) % PROFESSIONAL_TITLES.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(titleCycle);
  }, []);

  const handleImageInteraction = async () => {
    await imageControls.start({
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      transition: { duration: 0.5 },
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16"
    >
      <BackgroundGrid />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Professional Identity */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Riazul Islam
          </h1>

          <div className="h-20">
            <AnimatePresence mode="wait">
              {isVisible && (
                <motion.div
                  key={currentTitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl text-primary"
                >
                  {PROFESSIONAL_TITLES[currentTitle]}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <p className="text-foreground/80 mb-6 max-w-xl mx-auto md:mx-0">
            Passionate developer creating innovative web solutions at the
            intersection of technology and creativity. Transforming ideas into
            elegant, efficient, and impactful digital experiences.
          </p>

          {/* Achievements */}
          <div className="flex justify-center md:justify-start space-x-6 mb-6">
            {ACHIEVEMENTS.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
                className="flex items-center space-x-3 bg-background/50 p-4 rounded-lg"
              >
                <achievement.icon className="text-primary text-3xl" />
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-foreground/70">
                    {achievement.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 justify-center md:justify-start">
            <Link href="/projects" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-primary text-background rounded-full hover:bg-primary/90 transition-colors"
              >
                <FaCode />
                <span>View Projects</span>
              </motion.button>
            </Link>
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors"
            >
              <FaRocket />
              <span>Hire Me</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-64 h-64 md:w-96 md:h-96 relative group"
            animate={imageControls}
            onHoverStart={handleImageInteraction}
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl group-hover:opacity-50 transition-all duration-300"></div>
            <Image
              src="/pics/photo.png"
              alt="Riazul Islam"
              fill
              priority
              className="relative z-10 rounded-full object-cover shadow-2xl border-4 border-primary/50 group-hover:border-primary transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
