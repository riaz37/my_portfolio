import React from "react";
import { motion } from "framer-motion";
import { 
  FaCertificate, 
  FaAward, 
  FaCode, 
  FaCloud, 
  FaRobot,
  FaHtml5,
  FaPython,
  FaReact,
  FaJsSquare 
} from "react-icons/fa";

const CERTIFICATIONS = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    icon: FaHtml5,
    color: "text-orange-500",
    year: 2023,
    link: "https://www.freecodecamp.org/certification/riaz37/responsive-web-design"
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    icon: FaJsSquare,
    color: "text-yellow-500",
    year: 2024,
    link: "https://www.freecodecamp.org/certification/riaz37/javascript-algorithms-and-data-structures-v8"
  },
  {
    title: "Front-End Development Libraries",
    issuer: "freeCodeCamp",
    icon: FaReact,
    color: "text-blue-500",
    year: 2024,
    link: "https://www.freecodecamp.org/certification/riaz37/front-end-development-libraries"
  },
  {
    title: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    icon: FaPython,
    color: "text-green-500",
    year: 2024,
    link: "https://www.freecodecamp.org/certification/riaz37/scientific-computing-with-python-v7"
  },
  {
    title: "Code in Place",
    issuer: "Stanford University",
    icon: FaCode,
    color: "text-red-500",
    year: 2024,
    link: "https://codeinplace.stanford.edu/cip4/certificate/xlil3s"
  },
  
];

const Certifications = () => {
  return (
    <section 
      id="certifications" 
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
          Professional Certifications
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group text-center block"
            >
              <div className={`text-5xl mb-6 mx-auto w-max ${cert.color} group-hover:scale-110 transition-transform`}>
                <cert.icon />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {cert.title}
              </h3>
              <p className="text-foreground/80 mb-2">
                {cert.issuer}
              </p>
              <p className="text-sm text-foreground/60">
                Earned in {cert.year}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
