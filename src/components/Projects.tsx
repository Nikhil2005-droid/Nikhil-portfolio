"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Text Pad",
    category: "Full Stack Application",
    description: "A workspace-based notes and code scratchpad featuring auto-save drafts, password-protected workspaces, and multi-language translation support.",
    image: "/text-pad-splash.png",
    tech: ["Node.js", "MongoDB", "Tailwind CSS", "Express", "React"],
    link: "/projects/text-pad",
  },
  {
    id: 2,
    title: "Quantum Sync",
    category: "Mobile Architecture",
    description: "An elegant, native-feeling mobile application with biometric security and offline capabilities.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
    tech: ["Flutter", "Firebase", "Dart"],
    link: "https://github.com/nikhilgorremuchu/quantum-sync",
  },
  {
    id: 3,
    title: "Nexus Core",
    category: "Backend Systems",
    description: "High-performance, beautifully architected REST API serving millions of daily requests.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",
    tech: ["Express", "MongoDB", "Redis"],
    link: "https://github.com/nikhilgorremuchu/nexus-core",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative w-full flex flex-col ${index % 2 !== 0 ? 'md:items-end' : ''}`}
    >
      {project.link.startsWith("/") ? (
        <Link href={project.link} className={`w-full ${index % 2 !== 0 ? 'md:w-3/4' : 'md:w-5/6'} overflow-hidden relative cursor-pointer border border-[var(--foreground)]/10 block`}>
          <motion.div style={{ y }} className="w-full h-[40vh] md:h-[50vh] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[120%] object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          </motion.div>
          <div className="absolute top-4 right-4 bg-[var(--accent-acid)] text-black w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.div
              animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiArrowUpRight size={24} />
            </motion.div>
          </div>
        </Link>
      ) : (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className={`w-full ${index % 2 !== 0 ? 'md:w-3/4' : 'md:w-5/6'} overflow-hidden relative cursor-pointer border border-[var(--foreground)]/10 block`}>
          <motion.div style={{ y }} className="w-full h-[40vh] md:h-[50vh] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[120%] object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          </motion.div>
          <div className="absolute top-4 right-4 bg-[var(--accent-acid)] text-black w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.div
              animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiArrowUpRight size={24} />
            </motion.div>
          </div>
        </a>
      )}
      
      <div className={`mt-8 w-full ${index % 2 !== 0 ? 'md:w-3/4' : 'md:w-5/6'} flex flex-col md:flex-row justify-between items-start md:items-end gap-4`}>
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[var(--accent-acid)] mb-2">{project.category}</p>
          <h3 className="font-display text-4xl md:text-6xl font-bold text-[var(--foreground)] uppercase tracking-tighter">{project.title}</h3>
        </div>
        <div className="max-w-xs">
          <p className="text-sm font-sans text-[var(--foreground)]/60 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="text-xs font-mono border border-[var(--foreground)]/20 px-2 py-1 text-[var(--foreground)]/80 uppercase">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="works" className="relative py-40 px-6 md:px-12 lg:px-24 border-t border-[var(--foreground)]/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-32 flex flex-col items-center text-center">
          <h2 className="font-display text-6xl md:text-8xl font-bold mb-6 text-[var(--foreground)] uppercase tracking-tighter">
            Selected <span className="text-[var(--accent-acid)]">Works.</span>
          </h2>
          <div className="w-[1px] h-24 bg-[var(--accent-acid)] mt-8"></div>
        </div>

        <div className="flex flex-col gap-32 md:gap-40">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
