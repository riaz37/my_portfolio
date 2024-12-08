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

const Home = () => {
  return (
    <AnimatePresence>
      <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto pt-16 sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Hero />
          <Services />
          <Work />
          <Certifications />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
    </AnimatePresence>
  );
}

export default Home;