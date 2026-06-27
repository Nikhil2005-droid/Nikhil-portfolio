"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AsciiCube3D } from "./AsciiEffects";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-[var(--background)]">
      <motion.div style={{ opacity }} className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
        
        <motion.div style={{ y: y1 }} className="lg:w-1/2 flex flex-col justify-center">
          {/* Rotating 3D ASCII Cube */}
          <div className="w-full max-w-[320px]">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--foreground)]/40 block mb-2 font-bold">// 3D Matrix Projection</span>
            <AsciiCube3D size={12} />
          </div>
        </motion.div>

        <div className="lg:w-1/2 flex flex-col gap-8 font-sans text-lg md:text-2xl font-medium leading-snug text-[var(--foreground)]/80 justify-center">
          <p>
            I am a Computer Science student who writes code. I build software because I enjoy creating things that are clean, useful, and work well.
          </p>
          <p>
            I build native mobile apps and responsive web tools using Flutter, React, Node.js, and MongoDB. I focus on keeping layouts simple and code easy to maintain.
          </p>
        </div>

      </motion.div>
    </section>
  );
}

