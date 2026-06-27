"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { AsciiTextScramble, ProjectSchematic } from "./AsciiEffects";

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
    description: "A text editor where you can lock notes inside private workspaces. It supports writing in English, Telugu, and Malayalam.",
    image: "/text_pad_poster.png",
    tech: ["Node.js", "MongoDB", "Tailwind CSS", "Express", "React"],
    link: "/projects/text-pad",
  },
  {
    id: 2,
    title: "Idea Tinder",
    category: "Mobile Architecture",
    description: "A mobile utility where you swipe to quickly catalog developer ideas and concept drafts.",
    image: "/idea_tinder_poster.png",
    tech: ["Flutter", "Hive", "Dart"],
    link: "/projects/idea-tinder",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const alignRight = index % 2 !== 0;
  const isInternal = project.link.startsWith("/");

  const CardContent = (
    <>
      <div className={`w-full ${alignRight ? "md:w-3/4" : "md:w-5/6"} overflow-hidden relative bg-[var(--foreground)]/[0.02] flex items-center justify-center min-h-[350px] md:min-h-[420px]`}>
        
        {/* Cybernetic Schematic Scanner by default */}
        <div className="absolute inset-0 w-full h-full group-hover:opacity-0 transition-opacity duration-500 z-10">
          <ProjectSchematic
            title={project.title}
            tech={project.tech}
          />
        </div>

        {/* Clear screenshot on hover */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-[120%] -top-[10%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
        </motion.div>

        {/* Arrow hover indicator */}
        <div className="absolute top-6 right-6 bg-[var(--accent)] text-[var(--background)] w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <FiArrowUpRight size={24} />
        </div>
      </div>
      
      {/* Meta/Text block */}
      <div className={`mt-8 w-full ${alignRight ? "md:w-3/4" : "md:w-5/6"} flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-left`}>
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[var(--accent)] mb-2">
            {project.category}
          </p>
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] uppercase tracking-tighter group-hover:text-[var(--accent)] transition-colors">
            <AsciiTextScramble text={project.title} triggerOn="hover" />
          </h3>
        </div>
        <div className="max-w-xs">
          <p className="text-sm font-sans text-[var(--foreground)]/60 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="text-[10px] font-mono border border-[var(--foreground)]/10 px-2.5 py-1 text-[var(--foreground)]/70 uppercase">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative w-full flex flex-col ${alignRight ? "md:items-end" : ""}`}
    >
      {isInternal ? (
        <Link href={project.link} className="w-full flex flex-col no-underline">
          {CardContent}
        </Link>
      ) : (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full flex flex-col no-underline">
          {CardContent}
        </a>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="works" className="relative py-32 px-6 md:px-12 lg:px-24 bg-[var(--background)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 flex flex-col items-center text-center">
          <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tight text-[var(--foreground)] mb-4 select-none">
            Selected <span className="text-[var(--accent)]">Works.</span>
          </h2>
          <p className="font-sans text-sm text-[var(--foreground)]/50 uppercase tracking-widest max-w-sm">
            Handcrafted software engineering portfolio.
          </p>
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


