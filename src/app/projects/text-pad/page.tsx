"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiArrowLeft, FiCode, FiDatabase, FiLayers, FiLayout, FiMaximize2, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Screenshot {
  src: string;
  title: string;
  desc: string;
}

const screenshots: Screenshot[] = [
  {
    src: "/text-pad-splash.png",
    title: "Minimal Splash Screen",
    desc: "An elegant, distraction-free welcome screen showcasing the core concept: Notes & code, together."
  },
  {
    src: "/text-pad-gate-detailed.png",
    title: "Workspace Access Portal",
    desc: "A clean entrance dashboard detailing workspace options, password safety, and shortcuts."
  },
  {
    src: "/text-pad-gate-blurred.png",
    title: "Workspace Protection Gate",
    desc: "A password gate blurred overlay that locks active workspace contents until validated."
  },
  {
    src: "/text-pad-editor.png",
    title: "Workspace Editor Studio",
    desc: "The active desktop editor view featuring note library indexing, lined scratchpad canvases, and settings."
  },
  {
    src: "/text-pad-docs.png",
    title: "Desktop Documentation View",
    desc: "In-app guides explaining navigation paths, active auto-saves, and workspace protection schemes."
  },
  {
    src: "/text-pad-mobile-editor.jpg",
    title: "Mobile Responsive Editor",
    desc: "The compact workspace view optimized for portrait touchscreens, maintaining lined paper layouts."
  },
  {
    src: "/text-pad-mobile-docs.jpg",
    title: "Mobile Responsive Guides",
    desc: "Compact documentation lists and settings switches configured for easy finger-tap controls."
  },
  {
    src: "/text-pad-blur.png",
    title: "Access Gate Blurred Logo",
    desc: "A beautiful glassmorphic entrance mockup featuring the text-pad logo and dark-to-light blur gradients."
  }
];

export default function TextPadDetailPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F4F4F5] font-sans selection:bg-[#CCFF00] selection:text-black pb-24">
      {/* Navbar / Header */}
      <header className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-[#F4F4F5]/10 py-6 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link
            href="/#works"
            className="flex items-center gap-2 text-sm uppercase tracking-wider font-bold text-[#F4F4F5]/60 hover:text-[#CCFF00] transition-colors"
          >
            <FiArrowLeft size={16} /> Back to Works
          </Link>
          <div className="font-display font-bold text-lg tracking-tighter uppercase">
            N<span className="text-[#CCFF00]">G</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 mt-16">
        {/* Project Header */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[#CCFF00] text-sm font-mono uppercase tracking-[0.2em] font-bold">Project 01</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter mt-4 mb-6">
              Text Pad
            </h1>
            <p className="text-lg md:text-xl text-[#F4F4F5]/70 max-w-3xl leading-relaxed">
              A minimalist, high-end, workspace-based text and code scratchpad. Combining a distraction-free analogue notebook aesthetic with robust developer features like syntax-folding scratchpads and dual-mode editing spaces.
            </p>
          </motion.div>
        </section>

        {/* Project Metadata Columns */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-[#F4F4F5]/10 mb-20 text-sm">
          <div>
            <h4 className="font-mono text-[#F4F4F5]/40 uppercase tracking-widest mb-2">Role</h4>
            <p className="font-bold text-lg text-[#F4F4F5]">Lead Full-Stack Developer</p>
          </div>
          <div>
            <h4 className="font-mono text-[#F4F4F5]/40 uppercase tracking-widest mb-2">Technologies</h4>
            <p className="font-bold text-lg text-[#F4F4F5]">Node.js, Express, MongoDB, Tailwind, React, Vite</p>
          </div>
          <div>
            <h4 className="font-mono text-[#F4F4F5]/40 uppercase tracking-widest mb-2">Deployment</h4>
            <p className="font-bold text-lg text-[#F4F4F5]">Root-Unified API Scripting</p>
          </div>
          <div>
            <h4 className="font-mono text-[#F4F4F5]/40 uppercase tracking-widest mb-2">Special Feature</h4>
            <p className="font-bold text-lg text-[#CCFF00]">Transliteration & Bilingual Editors</p>
          </div>
        </section>

        {/* Interactive Screenshot Gallery */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter">
                Interactive <span className="text-[#CCFF00]">Gallery.</span>
              </h2>
              <p className="text-sm text-[#F4F4F5]/50 mt-2">Browse the live app layouts and workspaces</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center border border-[#F4F4F5]/20 hover:border-[#CCFF00] hover:text-[#CCFF00] transition-colors rounded-full"
              >
                <FiChevronLeft size={20} />
              </button>
              <span className="font-mono text-sm tracking-wider">
                {String(activeSlide + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")}
              </span>
              <button
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center border border-[#F4F4F5]/20 hover:border-[#CCFF00] hover:text-[#CCFF00] transition-colors rounded-full"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Interactive Slide Viewer */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-[#F4F4F5]/10 group">
            <motion.img
              key={activeSlide}
              src={screenshots[activeSlide].src}
              alt={screenshots[activeSlide].title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-contain bg-[#0a0a0a] cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            />
            
            {/* Overlay Title */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#050505]/90 to-transparent p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg md:text-2xl font-bold text-[#F4F4F5]">
                  {screenshots[activeSlide].title}
                </h3>
                <p className="text-xs md:text-sm text-[#F4F4F5]/70 mt-1 max-w-xl">
                  {screenshots[activeSlide].desc}
                </p>
              </div>
              <button
                onClick={() => setLightboxOpen(true)}
                className="self-start md:self-auto flex items-center gap-2 text-xs font-mono text-[#CCFF00] border border-[#CCFF00]/20 px-3 py-1.5 hover:bg-[#CCFF00] hover:text-black transition-all"
              >
                <FiMaximize2 size={12} /> Expand View
              </button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mt-6">
            {screenshots.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`flex-1 text-left p-4 border transition-all duration-300 ${
                  activeSlide === idx 
                    ? "border-[#CCFF00] bg-[#CCFF00]/5" 
                    : "border-[#F4F4F5]/10 hover:border-[#F4F4F5]/30 bg-transparent"
                }`}
              >
                <span className="font-mono text-xs text-[#CCFF00]">0{idx + 1}</span>
                <h4 className="font-bold text-sm text-[#F4F4F5] mt-1 block truncate">{s.title}</h4>
              </button>
            ))}
          </div>
        </section>

        {/* Project Context & Introduction */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#CCFF00]">01 / Purpose & Pitch</h3>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter uppercase">
              Notes & code, together.
            </h2>
            <p className="text-[#F4F4F5]/80 leading-relaxed">
              Text Pad was built to solve a simple workflow problem: developers constantly jump between a browser window for writing drafts or notes and their local IDE scratchpad for tinkering with temporary snippets. Text Pad unites these workflows into a single workspace-driven digital studio.
            </p>
            <p className="text-[#F4F4F5]/80 leading-relaxed">
              Designed with physical paper analogies, Text Pad boasts a warm cream-ruled canvas overlay, a custom transliteration keyboard driver (perfect for writing drafts in local scripts like Telugu and Malayalam), and instant automatic saving. Every state React-ively responds to the Workspace ID, ensuring zero stale pages and absolute simplicity.
            </p>
          </div>

          <div className="lg:col-span-5 p-8 border border-[#F4F4F5]/10 bg-[#F4F4F5]/[0.02] flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#CCFF00] mb-6">Key Engineering Principles</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-sm text-[#F4F4F5]/80"><strong className="text-[#F4F4F5]">Responsive Access Control:</strong> Password-protected workspaces encrypt content updates locally and securely.</p>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-sm text-[#F4F4F5]/80"><strong className="text-[#F4F4F5]">Zero-Memorization Entry:</strong> Users can enter, lock, edit, and leave safely with a secure, instant access gate.</p>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-sm text-[#F4F4F5]/80"><strong className="text-[#F4F4F5]">Unified Monorepo Architecture:</strong> The application relies on a node root controller linking React client builds to static Express endpoints.</p>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-[#F4F4F5]/10 text-xs font-mono text-[#F4F4F5]/40">
              Workspace-Based State Flow
            </div>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section className="mb-24">
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#CCFF00] mb-8">02 / Technical Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-[#F4F4F5]/10 hover:border-[#CCFF00]/40 transition-colors bg-[#080808]">
              <div className="text-[#CCFF00] mb-6">
                <FiLayout size={32} />
              </div>
              <h3 className="font-display text-xl font-bold uppercase tracking-tighter mb-4 text-[#F4F4F5]">
                Tailwind CSS UI
              </h3>
              <p className="text-sm text-[#F4F4F5]/70 leading-relaxed">
                Utilizes Tailwind's modular design values to create a sleek analog-to-digital writing interface. Blends deep neutral card panels with glassmorphic top navigation bars and smooth transition frames.
              </p>
            </div>

            <div className="p-8 border border-[#F4F4F5]/10 hover:border-[#CCFF00]/40 transition-colors bg-[#080808]">
              <div className="text-[#CCFF00] mb-6">
                <FiCode size={32} />
              </div>
              <h3 className="font-display text-xl font-bold uppercase tracking-tighter mb-4 text-[#F4F4F5]">
                Express.js Server
              </h3>
              <p className="text-sm text-[#F4F4F5]/70 leading-relaxed">
                Robust routing handles notes creation, deletion, security queries, and multi-language dictionary fetches. Underpinned by standard Node environments supporting CORS configuration and production static client-serving.
              </p>
            </div>

            <div className="p-8 border border-[#F4F4F5]/10 hover:border-[#CCFF00]/40 transition-colors bg-[#080808]">
              <div className="text-[#CCFF00] mb-6">
                <FiDatabase size={32} />
              </div>
              <h3 className="font-display text-xl font-bold uppercase tracking-tighter mb-4 text-[#F4F4F5]">
                MongoDB Data Store
              </h3>
              <p className="text-sm text-[#F4F4F5]/70 leading-relaxed">
                Schema definitions modeled via Mongoose manage sub-documents, workspace records, configuration values, and timestamped saves. Assures lightweight concurrency and fast document querying.
              </p>
            </div>
          </div>
        </section>

        {/* Live Code Structure & Sequence */}
        <section className="p-8 md:p-12 border border-[#F4F4F5]/10 bg-[#080808] mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#CCFF00]">03 / Synchronization</h3>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tighter text-[#F4F4F5]">
                Concurrency Safety
              </h2>
              <p className="text-sm text-[#F4F4F5]/70 leading-relaxed">
                To prevent accidental save overwrites across multiple open tabs of the same workspace ID, Text Pad implements version checks. The server validates request timestamps against MongoDB documents, preventing delta collision and keeping local state in sync.
              </p>
            </div>
            
            <div className="lg:col-span-7 bg-[#050505] p-6 border border-[#F4F4F5]/10 font-mono text-xs space-y-4">
              <div className="text-[#CCFF00] border-b border-[#F4F4F5]/10 pb-2 flex justify-between">
                <span>Concurrency Flow Diagram</span>
                <span>Active</span>
              </div>
              <div className="space-y-2 text-[#F4F4F5]/80">
                <div className="flex justify-between items-center bg-[#F4F4F5]/[0.02] p-2">
                  <span className="text-[#CCFF00]">1. Browser Tab A</span>
                  <span>➜ PATCH /api/workspace/notes</span>
                  <span className="text-[#555555]">Success (200 OK)</span>
                </div>
                <div className="flex justify-between items-center bg-[#F4F4F5]/[0.02] p-2">
                  <span className="text-[#CCFF00]">2. Browser Tab B</span>
                  <span>➜ PATCH /api/workspace/notes</span>
                  <span className="text-red-400">Rejected (409 Conflict)</span>
                </div>
                <div className="flex justify-between items-center bg-[#F4F4F5]/[0.02] p-2">
                  <span className="text-[#CCFF00]">3. Graceful Sync</span>
                  <span>➜ Pull Fresh Server Payload</span>
                  <span className="text-green-400">Merged Safely</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox / Overlay Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-center items-center p-4 cursor-zoom-out"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="max-w-[90vw] max-h-[85vh] relative">
            <img 
              src={screenshots[activeSlide].src} 
              alt={screenshots[activeSlide].title} 
              className="max-w-full max-h-[85vh] object-contain border border-[#F4F4F5]/15"
            />
            <div className="absolute bottom-[-40px] left-0 right-0 text-center font-mono text-sm text-[#F4F4F5]/70">
              {screenshots[activeSlide].title} — Click anywhere to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
