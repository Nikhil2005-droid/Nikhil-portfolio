"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-between items-center px-6 md:px-12 lg:px-24 py-4 ${
        scrolled ? "bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--foreground)]/10" : "bg-transparent"
      }`}
    >
      <div 
        className="font-display font-bold text-xl tracking-tighter uppercase cursor-pointer"
        onClick={() => scrollTo("home")}
      >
        N<span className="text-[var(--accent-acid)]">G</span>
      </div>

      <ul className="flex items-center gap-6 md:gap-10">
        {["About", "Skills", "Works", "Contact"].map((item) => (
          <li key={item}>
            <button
              onClick={() => scrollTo(item.toLowerCase())}
              className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[var(--foreground)]/70 hover:text-[var(--accent-acid)] transition-colors duration-300"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
