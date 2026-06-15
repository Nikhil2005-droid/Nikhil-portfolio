"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-[80vh] flex flex-col items-center justify-between pt-32 pb-10 px-6 md:px-12 lg:px-24 bg-[var(--foreground)] text-[var(--background)]">
      
      <div className="w-full max-w-6xl flex flex-col items-center text-center mt-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[var(--accent-warm)] font-sans text-xs uppercase tracking-[0.2em] mb-8"
        >
          Let's create something meaningful
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-8xl lg:text-[10rem] font-medium leading-none tracking-tight mb-16 hover:text-[var(--accent-muted)] transition-colors duration-500 cursor-pointer origin-center"
        >
          Get in touch.
        </motion.h2>

        <a href="mailto:hello@nikhilgorremuchu.com" className="group flex items-center gap-4 border-b border-[var(--background)]/30 pb-2 hover:border-[var(--background)] transition-colors duration-300">
          <span className="font-sans text-xl md:text-3xl">hello@nikhilgorremuchu.com</span>
          <FiArrowRight className="text-2xl group-hover:translate-x-2 transition-transform duration-300" />
        </a>
      </div>

      <div className="w-full mt-32 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[var(--background)]/10 pt-8 font-sans text-xs tracking-widest uppercase text-[var(--background)]/50">

        <p>
          © {new Date().getFullYear()} Nikhil Gorremuchu
        </p>
        
        <div className="flex gap-4">
          <span>All rights reserved</span>
        </div>
      </div>
    </section>
  );
}
