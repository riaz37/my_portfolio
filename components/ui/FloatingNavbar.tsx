"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaUser, 
  FaCode, 
  FaEnvelope, 
  FaProjectDiagram,
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

// Define nav items here to ensure consistency
const DEFAULT_NAV_ITEMS = [
  { name: "Home", link: "#home", icon: <FaHome /> },
  { name: "About", link: "#about", icon: <FaUser /> },
  { name: "Projects", link: "#projects", icon: <FaCode /> },
  { name: "Portfolio", link: "#portfolio", icon: <FaProjectDiagram /> },
  { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
];

export const FloatingNav = ({
  navItems = DEFAULT_NAV_ITEMS,
  className,
}: {
  navItems?: {
    name: string;
    link: string;
    icon: JSX.Element;
  }[];
  className?: string;
}) => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Track scroll position and active section
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sections = navItems.map((item) => item.link.slice(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(section);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="#home" className="flex-shrink-0">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold"
            >
              <span className="text-primary">Riaz</span>
              <span className="text-foreground">.js</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.link}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: idx * 0.1, 
                  duration: 0.5 
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href={item.link}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm lg:text-base font-medium",
                    "transition-all duration-200 ease-in-out",
                    activeSection === item.link.slice(1)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:bg-primary/5 hover:text-primary"
                  )}
                >
                  <motion.span
                    className="mr-2 inline-block"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    {item.icon}
                  </motion.span>
                  <span className="hidden lg:inline">{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
              className="text-foreground focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
              className="fixed top-0 left-0 bottom-0 w-64 bg-background/95 backdrop-blur-xl z-50 md:hidden shadow-2xl"
            >
              {/* Sidebar Header */}
              <div className="flex justify-between items-center p-4 border-b border-primary/10">
                <Link href="#home" onClick={closeMobileMenu} className="flex-grow">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold"
                  >
                    <span className="text-primary">Riaz</span>
                    <span className="text-foreground">.js</span>
                  </motion.span>
                </Link>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={closeMobileMenu}
                  className="text-foreground hover:text-primary p-2"
                >
                  <FaTimes size={24} />
                </motion.button>
              </div>

              {/* Navigation Items */}
              <div className="flex flex-col space-y-2 p-4">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.link}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: idx * 0.1, 
                      type: "spring", 
                      stiffness: 300 
                    }}
                  >
                    <Link
                      href={item.link}
                      onClick={closeMobileMenu}
                      className={cn(
                        "flex items-center space-x-3 p-3 rounded-xl text-base font-medium",
                        "transition-all duration-300 group",
                        activeSection === item.link.slice(1)
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:bg-primary/5"
                      )}
                    >
                      <motion.span
                        className="text-2xl opacity-70 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
