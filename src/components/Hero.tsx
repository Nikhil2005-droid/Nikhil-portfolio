"use client";

import { motion, Variants } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";
import AsciiPicture from "./AsciiPicture";
import { AsciiMatrixRain, AsciiTextScramble } from "./AsciiEffects";

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

  const scrollToWorks = () => {
    const worksSection = document.getElementById("works");
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col px-6 md:px-12 lg:px-24 pb-24 pt-36 overflow-hidden bg-[var(--background)]">
      {/* Background Matrix Rain */}
      <AsciiMatrixRain opacity={0.05} />

      {/* Background ambient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[var(--accent)]/5 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.04, 0.1, 0.04] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[10%] right-[-5%] w-[30vw] h-[30vw] rounded-full bg-[var(--accent)]/5 blur-[120px] pointer-events-none"
      />

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full"
      >
        {/* Left: Typography */}
        <div className="lg:col-span-8 flex flex-col gap-8 w-full text-left">
          <div>
            <motion.p
              variants={item}
              className="text-[var(--accent)] font-mono text-xs tracking-[0.3em] uppercase font-bold mb-4"
            >
              Portfolio
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-6 select-none"
            >
              <span className="block text-[var(--foreground)]">
                <AsciiTextScramble text="Nikhil" triggerOn="mount" />
              </span>
              <span className="block text-[var(--accent)] mt-1">
                <AsciiTextScramble text="Gorremuchu" triggerOn="mount" />
              </span>
            </motion.h1>
          </div>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <p className="font-sans text-sm md:text-base leading-relaxed text-[var(--foreground)]/60 max-w-sm">
              Computer science student building mobile and web apps. I focus on keeping code clean and layouts simple.
            </p>
            <button
              onClick={scrollToWorks}
              className="group flex-shrink-0 flex items-center gap-4 bg-[var(--accent)] text-[var(--background)] px-8 py-4 font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <span>Explore Work</span>
              <FiArrowDownRight className="text-xl group-hover:rotate-[-45deg] transition-all duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Right: Profile ASCII Display */}
        <motion.div
          variants={item}
          className="lg:col-span-4 flex justify-center lg:justify-end w-full"
        >
          <div className="relative group p-1 bg-[var(--foreground)]/[0.02] border border-[var(--foreground)]/10 overflow-hidden w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex items-start justify-center shadow-lg">
            {/* dynamic ASCII photo */}
            <div className="absolute inset-x-0 top-0 flex justify-center overflow-hidden">
              <div className="scale-[0.27] lg:scale-[0.37] origin-top">
                <AsciiPicture
                  type="profile"
                  charWidth={300}
                  charHeight={225}
                  isColored={true}
                  className="font-bold text-[6px] leading-[0.75]"
                />
              </div>
            </div>
            
            {/* Info badge */}
            <motion.div
              variants={item}
              className="absolute -bottom-1 right-2 bg-[var(--accent)] text-[var(--background)] px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider z-10"
            >
              CS Student // Dev
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


