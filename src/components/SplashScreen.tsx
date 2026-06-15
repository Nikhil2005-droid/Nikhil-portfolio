"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const letters = "NIKHIL GORREMUCHU".split("");

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[9999] bg-[var(--background)] flex flex-col items-center justify-center overflow-hidden"
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          {/* Animated Name */}
          <div className="flex items-center justify-center mb-8 overflow-hidden">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`font-display font-bold text-3xl md:text-6xl tracking-tighter uppercase ${
                  letter === " " ? "w-4" : ""
                } text-[var(--foreground)]`}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="font-sans text-xs uppercase tracking-[0.3em] text-[var(--accent-acid)] mb-16"
          >
            Creative Developer
          </motion.p>

          {/* Progress Bar */}
          <div className="w-64 md:w-96 h-[1px] bg-[var(--foreground)]/10 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-[var(--accent-acid)]"
              initial={{ width: "0%" }}
              animate={{ width: `${counter}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>

          {/* Counter */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-mono text-xs text-[var(--foreground)]/40 mt-4 tabular-nums"
          >
            {String(Math.min(counter, 100)).padStart(3, "0")}
          </motion.span>

          {/* Acid Chartreuse accent blob */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-[var(--accent-acid)]/5 blur-3xl"
            animate={{ scaleX: [1, 1.2, 1], scaleY: [1, 1.3, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
