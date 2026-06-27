"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    const hasShown = sessionStorage.getItem("splashShown");
    if (hasShown) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          sessionStorage.setItem("splashShown", "true");
          setTimeout(() => setIsVisible(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 45);
    return () => clearInterval(interval);
  }, []);

  const letters = "NIKHIL GORREMUCHU".split("");

  if (!isMounted || !isVisible) {
    return null;
  }

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
          {/* Subtle Ambient glow bubble during load */}
          <div className="absolute w-[60vw] h-[60vw] rounded-full bg-[var(--accent)]/5 blur-[120px] pointer-events-none" />

          {/* Animated Name */}
          <div className="flex items-center justify-center mb-6 overflow-hidden z-10">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.03,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`font-sans font-black text-3xl md:text-6xl tracking-tighter uppercase ${
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
            transition={{ delay: 0.7, duration: 0.5 }}
            className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--accent)] mb-12 font-bold z-10 transition-colors"
          >
            Software Developer / Engineer
          </motion.p>

          {/* Progress Bar & Counter */}
          <div className="flex flex-col items-center justify-center font-mono text-[10px] md:text-xs text-[var(--accent)] tracking-wider mb-2 select-none z-10">
            <pre className="mb-3 font-bold">
              {"[" + "█".repeat(Math.floor(counter / 5)) + "░".repeat(20 - Math.floor(counter / 5)) + "]"}
            </pre>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[var(--foreground)]/50 tabular-nums font-bold"
            >
              SYSTEM_BOOT // {String(Math.min(counter, 100)).padStart(3, "0")}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


