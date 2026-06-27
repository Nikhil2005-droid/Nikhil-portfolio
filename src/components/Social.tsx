"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";
import { AsciiTextScramble } from "./AsciiEffects";

const socials = [
  {
    id: "email",
    label: "Email",
    handle: "nikhilgorremuchu05@gmail.com",
    description: "Inquiries & project proposals",
    icon: FiMail,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=nikhilgorremuchu05@gmail.com",
  },
  {
    id: "github",
    label: "GitHub",
    handle: "@Nikhil2005-droid",
    description: "Open source contributions & personal projects",
    icon: FiGithub,
    url: "https://github.com/Nikhil2005-droid",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "Nikhil Gorremuchu",
    description: "Professional network & career highlights",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/nikhil-gorremuchu-b46b02399",
  },
];

export default function Social() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-[var(--background)]">
      {/* Background label */}
      <motion.div 
        animate={{ rotate: [-90, -85, -90] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-8 top-1/2 -translate-y-1/2 font-display text-[8rem] font-bold text-[var(--foreground)]/[0.02] uppercase select-none pointer-events-none whitespace-nowrap tracking-tighter origin-center"
      >
        Connect
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-[var(--foreground)] uppercase tracking-tighter mb-4 select-none">
          Find Me Online
        </h2>

        <div className="flex flex-col gap-4">
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
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 gap-6 cursor-pointer select-none"
            >
              {/* Left: Icon + Name */}
              <div className="flex items-center gap-6">
                <motion.div
                  variants={{
                    hover: {
                      backgroundColor: "var(--accent)",
                      color: "var(--background)",
                      rotate: 45,
                      scale: 1.1,
                    },
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-16 h-16 bg-[var(--foreground)]/[0.02] flex items-center justify-center text-[var(--foreground)] transition-colors duration-300"
                >
                  <social.icon size={28} />
                </motion.div>

                <div>
                  <motion.h3
                    variants={{ hover: { x: 8 } }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-300"
                  >
                    <AsciiTextScramble text={social.label} triggerOn="hover" />
                  </motion.h3>
                  <p className="font-mono text-xs text-[var(--foreground)]/40 mt-1">{social.handle}</p>
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
                  className="w-12 h-12 rounded-full bg-[var(--foreground)]/[0.02] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:text-[var(--background)] transition-all duration-300 flex-shrink-0"
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


