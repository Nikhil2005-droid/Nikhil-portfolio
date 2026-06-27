"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { AsciiTerminal, AsciiTextScramble } from "./AsciiEffects";

export default function Contact() {
  return (
    <section id="contact" className="relative pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-[var(--background)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[var(--foreground)] leading-[0.9] select-none">
              lets build <span className="text-[var(--accent)]">something</span> meaningful.
            </h2>
            <p className="font-sans text-sm text-[var(--foreground)]/60 leading-relaxed max-w-sm">
              If you have a project in mind, want to collaborate, or just want to say hi, feel free to reach out.
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-10 lg:pl-12">
            {/* Retro Terminal Simulator */}
            <AsciiTerminal />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--foreground)]/45 block mb-3 font-bold">
                  Email Address
                </span>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhilgorremuchu05@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xl md:text-2xl font-bold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-300 block break-all leading-tight"
                >
                  nikhilgorremuchu05@gmail.com
                </a>
              </div>

              <div className="flex gap-8">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--foreground)]/45 block mb-2 font-bold">
                    GitHub
                  </span>
                  <a 
                    href="https://github.com/Nikhil2005-droid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--foreground)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
                  >
                    <span>@Nikhil2005-droid</span>
                    <FiArrowUpRight size={14} />
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--foreground)]/45 block mb-2 font-bold">
                    LinkedIn
                  </span>
                  <a 
                    href="https://www.linkedin.com/in/nikhil-gorremuchu-b46b02399"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--foreground)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
                  >
                    <span>Nikhil Gorremuchu</span>
                    <FiArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}



