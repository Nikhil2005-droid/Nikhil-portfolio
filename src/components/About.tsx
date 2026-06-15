"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={ref} className="relative py-40 px-6 md:px-12 lg:px-24">
      <motion.div style={{ opacity }} className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
        
        <motion.div style={{ y: y1 }} className="lg:w-1/2">
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] text-[var(--foreground)] uppercase">
            Logic & <br />
            <span className="text-[var(--accent-acid)]">Aesthetics.</span>
          </h2>
          <div className="mt-8 flex gap-8">
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col gap-1"
            >
              <span className="font-display text-5xl font-bold text-[var(--foreground)]">03+</span>
              <span className="font-sans uppercase tracking-[0.2em] text-xs font-bold text-[var(--accent-muted)]">Years Exp</span>
            </motion.div>
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="flex flex-col gap-1"
            >
              <span className="font-display text-5xl font-bold text-[var(--accent-acid)]">∞</span>
              <span className="font-sans uppercase tracking-[0.2em] text-xs font-bold text-[var(--accent-muted)]">Precision</span>
            </motion.div>
          </div>
        </motion.div>

        <div className="lg:w-1/2 flex flex-col gap-8 font-sans text-lg md:text-2xl font-medium leading-snug text-[var(--foreground)]/80">
          <p>
            I am a Computer Science student and Software Application Developer. Code is not just a tool for function; it is a medium for high-end digital craftsmanship.
          </p>
          <p>
            I build fluid, high-performance applications that don't just work—they feel expensive, deliberate, and perfectly choreographed. No templates, no compromises.
          </p>
        </div>

      </motion.div>
    </section>
  );
}
