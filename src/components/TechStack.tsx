"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  "FLUTTER", "NODE.JS", "EXPRESS.JS", "MONGODB", "FIREBASE", 
  "ANDROID", "JAVASCRIPT", "REACT", "NEXT.JS", "TAILWIND"
];

function MarqueeItem({ children, direction = 1 }: { children: React.ReactNode, direction?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const initialX = direction === 1 ? 0 : -3000;
  const finalX = direction === 1 ? -3000 : 0;
  const x = useTransform(scrollYProgress, [0, 1], [initialX, finalX]);

  return (
    <div ref={containerRef} className="flex whitespace-nowrap overflow-hidden">
      <motion.div style={{ x }} className="flex gap-8 font-display text-7xl md:text-[9rem] font-bold text-[var(--foreground)] uppercase leading-none">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="flex gap-8 items-center hover:text-[var(--accent-acid)] hover:[text-shadow:0_0_20px_#CCFF00] transition-all duration-300 cursor-default">
            {children} <span className="text-[var(--accent-acid)]">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="skills" className="relative py-40 overflow-hidden bg-[var(--background)]">
      <div className="mb-24 px-6 md:px-12 lg:px-24">
        <h2 className="font-sans text-sm tracking-[0.2em] uppercase font-bold text-[var(--accent-acid)] mb-4">Core Arsenal</h2>
        <div className="w-[1px] h-12 bg-[var(--accent-acid)]"></div>
      </div>

      <div className="flex flex-col gap-4 transform -rotate-3 scale-110">
        <MarqueeItem direction={1}>
          {skills.slice(0, 5).join(" ")}
        </MarqueeItem>
        <MarqueeItem direction={-1}>
          {skills.slice(5, 10).join(" ")}
        </MarqueeItem>
      </div>
    </section>
  );
}
