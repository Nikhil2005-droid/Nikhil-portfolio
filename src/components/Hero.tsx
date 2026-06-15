"use client";

import { motion, Variants } from "framer-motion";
import { FiArrowDownRight, FiUser } from "react-icons/fi";

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col px-6 md:px-12 lg:px-24 pb-24 pt-28 overflow-hidden">
      {/* Background ambient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[var(--accent-acid)]/5 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[10%] right-[-5%] w-[30vw] h-[30vw] rounded-full bg-[var(--accent-acid)]/10 blur-[120px] pointer-events-none"
      />

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 flex flex-col lg:flex-row items-start justify-between gap-16"
      >
        {/* Left: Typography */}
        <div className="flex-1 flex flex-col justify-between h-full gap-12">
          <div>
            <motion.p
              variants={item}
              className="text-[var(--accent-acid)] font-sans text-xs tracking-[0.3em] uppercase font-bold mb-6"
            >
              Portfolio
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-5xl md:text-7xl lg:text-[7rem] font-bold leading-[0.85] tracking-tighter text-[var(--foreground)] uppercase"
            >
              Nikhil<br />
              <span className="text-[var(--accent-acid)]">Gorremuchu</span>
            </motion.h1>
          </div>

          <motion.div
            variants={item}
            className="flex flex-col md:flex-row items-start md:items-end gap-8 border-t border-[var(--foreground)]/10 pt-8"
          >
            <p className="font-sans text-sm md:text-base leading-relaxed text-[var(--foreground)]/50 max-w-sm">
              Bridging the gap between strict logic and brutalist aesthetics. Building fluid, high-performance applications.
            </p>
            <button className="group flex-shrink-0 flex items-center gap-4 bg-[var(--accent-acid)] text-black px-8 py-4 font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform duration-300">
              <span>Explore Work</span>
              <FiArrowDownRight className="text-xl group-hover:rotate-[-45deg] transition-all duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Right: Profile Photo Placeholder */}
        <motion.div
          variants={item}
          className="w-full lg:w-auto lg:flex-shrink-0 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-72 md:w-80 md:h-96 lg:w-96 lg:h-[480px] group">
            {/* Photo container */}
            <div className="w-full h-full border border-[var(--foreground)]/20 bg-[var(--foreground)]/5 relative overflow-hidden flex flex-col items-center justify-center cursor-pointer">
              {/* Abstract Visual */}
              <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden z-10">
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[150%] h-[150%] opacity-20 pointer-events-none"
                  style={{
                    background: "conic-gradient(from 0deg, transparent, var(--accent-acid) 10%, transparent 30%)"
                  }}
                />
                
                {/* Core Orb */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border border-[var(--accent-acid)]/50 bg-[var(--background)] flex items-center justify-center overflow-hidden shadow-[0_0_30px_#CCFF0033]"
                >
                  <motion.div
                    animate={{ rotate: 180 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full opacity-30"
                    style={{
                      background: "linear-gradient(45deg, transparent, var(--accent-acid) 50%, transparent)"
                    }}
                  />
                  
                  {/* Inner element */}
                  <div className="absolute inset-2 rounded-full border border-[var(--foreground)]/10 bg-[var(--background)] flex items-center justify-center">
                    <span className="font-display text-4xl font-bold text-[var(--foreground)] tracking-tighter uppercase">NG</span>
                  </div>
                </motion.div>
                
                <p className="font-mono text-xs text-[var(--foreground)]/30 uppercase tracking-widest text-center px-6 mt-8 z-10 relative">
                  Creative<br />Developer
                </p>
              </div>

              {/* Animated corner accent */}
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--accent-acid)]"
              />
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--accent-acid)]"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[var(--accent-acid)]/0 group-hover:bg-[var(--accent-acid)]/5 transition-colors duration-500" />
            </div>

            {/* Info badge */}
            <motion.div
              variants={item}
              className="absolute -bottom-4 -right-4 bg-[var(--accent-acid)] text-black px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider"
            >
              CS Student
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

