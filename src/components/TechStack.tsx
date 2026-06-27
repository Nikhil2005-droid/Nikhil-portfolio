"use client";

import React from "react";
import { FaNodeJs, FaJava } from "react-icons/fa";
import { SiAndroid, SiFlutter, SiNextdotjs, SiExpress, SiDart, SiKotlin, SiMongodb, SiMysql, SiJavascript, SiTypescript, SiReact, SiFirebase } from "react-icons/si";
import { AsciiWave, AsciiTextScramble } from "./AsciiEffects";

const technologies = [
  { name: "Android", icon: SiAndroid },
  { name: "Flutter", icon: SiFlutter },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Kotlin", icon: SiKotlin },
  { name: "Java", icon: FaJava },
  { name: "Dart", icon: SiDart },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },
  { name: "MySQL", icon: SiMysql },
];

export default function TechStack() {
  return (
    <section id="skills" className="relative py-32 px-6 md:px-12 lg:px-24 bg-[var(--background)]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-xl">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-[var(--foreground)] uppercase tracking-tighter mb-4 select-none">
              Tech Stack
            </h2>
            <p className="font-sans text-sm text-[var(--foreground)]/65 tracking-wide leading-relaxed">
              Languages, frameworks, and databases I use to design and build digital tools.
            </p>
          </div>
          <div className="hidden md:block select-none pointer-events-none opacity-85">
            <AsciiWave speed={0.03} />
          </div>
        </div>

        {/* Tech Logos Flex Wrap */}
        <div className="flex flex-wrap gap-x-8 gap-y-8 md:gap-x-12 md:gap-y-12 items-center justify-start mt-12">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div 
                key={tech.name}
                className="group flex items-center gap-3 cursor-default select-none transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-[var(--foreground)]/[0.02] text-[var(--foreground)]/50 group-hover:text-[var(--accent)] transition-colors duration-300 flex items-center justify-center">
                  <Icon size={32} />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--foreground)]/40 group-hover:text-[var(--foreground)] transition-colors duration-300 font-bold">
                  <AsciiTextScramble text={tech.name} triggerOn="hover" />
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
