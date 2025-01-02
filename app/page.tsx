'use client'
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Certifications from "@/components/sections/Certifications";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import { AnimatePresence } from 'framer-motion';
import Projects from "@/components/sections/Projects";
import ContactForm from "@/components/sections/Contact";
import Skills from '@/components/sections/Skills';

export default function Home() {
  return (
    <AnimatePresence>
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <Skills />
        <Work />
        <Projects />
        <Services />
        <Certifications />
        <Contact />
      </main>
    </AnimatePresence>
  );
}