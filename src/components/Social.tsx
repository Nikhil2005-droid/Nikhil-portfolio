"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";

const socials = [
  {
    id: "github",
    label: "GitHub",
    handle: "@nikhilgorremuchu",
    description: "Open source contributions & personal projects",
    icon: FiGithub,
    url: "https://github.com/",
    color: "#CCFF00",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "Nikhil Gorremuchu",
    description: "Professional network & career highlights",
    icon: FiLinkedin,
    url: "https://linkedin.com/",
    color: "#CCFF00",
  },
];

export default function Social() {
  return (
    <section className="relative py-40 px-6 md:px-12 lg:px-24 border-t border-[var(--foreground)]/10 overflow-hidden">
      {/* Background label */}
      <motion.div 
        animate={{ rotate: [-90, -85, -90] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-8 top-1/2 -translate-y-1/2 font-display text-[8rem] font-bold text-[var(--foreground)]/3 uppercase select-none pointer-events-none whitespace-nowrap tracking-tighter origin-center"
      >
        Connect
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-[var(--accent-acid)] mb-6"
        >
          Find Me Online
        </motion.h2>

        <div className="flex flex-col gap-0">
          {socials.map((social, index) => (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover="hover"
              className="group flex flex-col md:flex-row md:items-center justify-between border-b border-[var(--foreground)]/10 py-10 gap-6 cursor-pointer"
            >
              {/* Left: Icon + Name */}
              <div className="flex items-center gap-6">
                <motion.div
                  variants={{
                    hover: {
                      backgroundColor: "var(--accent-acid)",
                      color: "#050505",
                      rotate: 45,
                      scale: 1.1,
                    },
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-16 h-16 border border-[var(--foreground)]/20 flex items-center justify-center text-[var(--foreground)] transition-colors duration-300"
                >
                  <social.icon size={28} />
                </motion.div>

                <div>
                  <motion.h3
                    variants={{ hover: { x: 8 } }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-[var(--foreground)] group-hover:text-[var(--accent-acid)] transition-colors duration-300"
                  >
                    {social.label}
                  </motion.h3>
                  <p className="font-mono text-sm text-[var(--foreground)]/40 mt-1">{social.handle}</p>
                </div>
              </div>

              {/* Right: Description + Arrow */}
              <div className="flex items-center gap-8 ml-[5.5rem] md:ml-0">
                <p className="font-sans text-sm text-[var(--foreground)]/50 max-w-[200px] hidden md:block">
                  {social.description}
                </p>
                <motion.div
                  variants={{ hover: { x: 8, y: -8, rotate: 0 } }}
                  initial={{ rotate: 45 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-12 h-12 rounded-full border border-[var(--foreground)]/20 flex items-center justify-center group-hover:bg-[var(--accent-acid)] group-hover:border-[var(--accent-acid)] group-hover:text-black transition-all duration-300 flex-shrink-0"
                >
                  <FiArrowUpRight size={20} />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
