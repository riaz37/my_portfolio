// components/sections/Work.tsx
"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaDownload } from 'react-icons/fa';
import { workExperiences, WorkExperience } from '@/data/workExperience';
import WorkTimelineItem from '@/components/WorkTimelineItem';
import WorkPopup from '@/components/WorkPopup';
import { useScrollSection } from '@/hooks/use-scroll-section';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Work: React.FC = () => {
  const [active, setActive] = useState<WorkExperience | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollSection();

  useOutsideClick(popupRef, () => {
    if (active) {
      setActive(null);
    }
  });

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="flex items-center justify-between max-w-4xl mx-auto mb-10">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold text-primary flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <FaBriefcase className="mr-2"/> Work Experience
        </motion.h2>
      </div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary"></div>
        
        {workExperiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <WorkTimelineItem
              experience={experience}
              index={index}
              setActive={setActive}
            />
          </motion.div>
        ))}
        <div className="flex justify-end mt-4">
          <Link 
            href="/pdf/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <motion.button
              className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold transition duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FaDownload className="mr-2"/> Download Resume
            </motion.button>
          </Link>
        </div>
      </div>

      <AnimatePresence>
        <WorkPopup active={active} setActive={setActive} ref={popupRef} />
      </AnimatePresence>
    </section>
  );
};

export default Work;
