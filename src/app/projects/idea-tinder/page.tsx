"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiArrowLeft, FiLayout, FiDatabase, FiSmartphone, FiChevronLeft, FiChevronRight, FiMaximize2 } from "react-icons/fi";
import { AsciiTextScramble } from "@/components/AsciiEffects";
import Footer from "@/components/Footer";

interface Screenshot {
  src: string;
  title: string;
  desc: string;
}

const screenshots: Screenshot[] = [
  {
    src: "/idea_tinder/splash_screen.jpg",
    title: "Splash Screen",
    desc: "The clean, minimal entrance screen of the application with a branded logo and boot check."
  },
  {
    src: "/idea_tinder/caputr_idea.jpg",
    title: "Capture Idea",
    desc: "Write down and catalog developer ideas and concept drafts instantly."
  },
  {
    src: "/idea_tinder/swipe_interface.jpg",
    title: "Swipe Interface",
    desc: "The main swipe deck interface showing idea cards. Swipe right to save, swipe left to dismiss."
  },
  {
    src: "/idea_tinder/add_to inbox.jpg",
    title: "Add to Inbox",
    desc: "Instantly catalog your brainstormed concepts into local device memory."
  },
  {
    src: "/idea_tinder/vault.jpg",
    title: "Saved Vault",
    desc: "A local offline vault of saved ideas, easily browsable and searchable."
  },
  {
    src: "/idea_tinder/about.jpg",
    title: "About & Settings",
    desc: "Explore system information, clear cache, and manage local storage boxes."
  }
];

export default function IdeaTinderDetailPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans pb-0 relative overflow-hidden">
      
      {/* Background grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(171,146,191,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(171,146,191,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Navbar / Header */}
      <header className="sticky top-0 z-40 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--foreground)]/5 py-6 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link
            href="/#works"
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[var(--foreground)]/60 hover:text-[var(--accent)] transition-colors"
          >
            <FiArrowLeft size={14} /> Back to Projects
          </Link>
          <div className="font-sans font-black text-xl tracking-tighter uppercase select-none">
            N<span className="text-[var(--accent)] font-light">G</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 mt-16 relative z-10">
        
        {/* Project Header */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[var(--accent)] font-mono text-xs uppercase tracking-widest font-bold">// Project 02</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mt-4 mb-6 leading-none select-none">
              Idea Tinder
            </h1>
            <p className="text-lg text-[var(--foreground)]/70 max-w-3xl leading-relaxed">
              A mobile application to capture brainstorming ideas quickly on your phone using simple swipe gestures and offline local storage.
            </p>
          </motion.div>
        </section>

        {/* Project Metadata Columns */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-[var(--foreground)]/10 mb-20 text-xs uppercase font-mono tracking-wider text-[var(--foreground)]/40">
          <div>
            <h4 className="mb-2">// Role</h4>
            <p className="font-bold text-sm text-[var(--foreground)]">Mobile Developer</p>
          </div>
          <div>
            <h4 className="mb-2">// Technologies</h4>
            <p className="font-bold text-sm text-[var(--foreground)]">Flutter, Hive, Dart</p>
          </div>
          <div>
            <h4 className="mb-2">// Database Engine</h4>
            <p className="font-bold text-sm text-[var(--accent)]">Hive Local NoSQL</p>
          </div>
        </section>

        {/* Screenshot Gallery */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 pb-4 border-b border-[var(--foreground)]/10">
            <div>
              <h2 className="font-display text-2xl md:text-4xl font-bold uppercase select-none">
                App Screenshots
              </h2>
              <p className="text-xs text-[var(--foreground)]/50 mt-1">Visual layouts of the mobile interface</p>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center border border-[var(--foreground)]/10 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-pointer bg-[var(--foreground)]/[0.02] rounded-full"
              >
                <FiChevronLeft size={18} />
              </button>
              <span className="font-mono text-xs tracking-widest text-[var(--foreground)]/70">
                {String(activeSlide + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")}
              </span>
              <button
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center border border-[var(--foreground)]/10 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-pointer bg-[var(--foreground)]/[0.02] rounded-full"
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Slide Viewer */}
          <div className="relative w-full aspect-[16/9] overflow-hidden border border-[var(--foreground)]/10 bg-[var(--foreground)]/[0.01] rounded-2xl p-2 md:p-3">
            <div className="w-full h-full relative overflow-hidden rounded-xl bg-neutral-950/5 flex items-center justify-center">
              <motion.img
                key={activeSlide}
                src={screenshots[activeSlide].src}
                alt={screenshots[activeSlide].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-contain cursor-zoom-in"
                onClick={() => setLightboxOpen(true)}
              />
            </div>

            {/* Overlay Title */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[var(--background)] via-[var(--background)]/90 to-transparent p-6 pt-16 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg md:text-xl font-bold text-[var(--foreground)] uppercase">
                  {screenshots[activeSlide].title}
                </h3>
                <p className="text-xs text-[var(--foreground)]/70 mt-1 max-w-xl">
                  {screenshots[activeSlide].desc}
                </p>
              </div>
              <button
                onClick={() => setLightboxOpen(true)}
                className="self-start md:self-auto flex items-center gap-2 text-xs font-mono text-[var(--accent)] border border-[var(--accent)]/30 px-4 py-2 hover:bg-[var(--accent)] hover:text-white transition-all cursor-pointer rounded-full bg-[var(--background)] shadow-sm"
              >
                <FiMaximize2 size={12} /> Expand View
              </button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
            {screenshots.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`text-left p-3.5 transition-all duration-300 cursor-pointer rounded-xl border ${activeSlide === idx
                  ? "border-[var(--accent)] bg-[var(--accent)]/5 text-[var(--accent)]"
                  : "border-[var(--foreground)]/10 bg-[var(--foreground)]/[0.01] hover:border-[var(--accent)]/50"
                  }`}
              >
                <span className="font-mono text-[10px] text-[var(--accent)]">{String(idx + 1).padStart(2, "0")}</span>
                <h4 className="font-sans font-bold text-[10px] uppercase tracking-wider text-[var(--foreground)] mt-1 block truncate">{s.title}</h4>
              </button>
            ))}
          </div>
        </section>

        {/* Project Context & Introduction */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 pb-12 border-b border-[var(--foreground)]/10">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold">// 01 / OVERVIEW</h3>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold uppercase select-none">
              Filtering thoughts in real time.
            </h2>
            <p className="text-[var(--foreground)]/70 leading-relaxed text-base">
              Idea Tinder is a mobile application where you can quickly write down ideas and filter them. You swipe right to save an idea to your list, and swipe left to discard it. It uses Hive to store all data locally on your device, which makes the app fast and fully functional offline without needing a server connection.
            </p>
          </div>

          <div className="lg:col-span-5 p-8 premium-card flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-6 font-bold">// Design Pillars</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-sm text-[var(--foreground)]/80">
                    <strong className="text-[var(--foreground)]">Swipe Gestures:</strong> Swipe right to save ideas, swipe left to discard. Extremely fast and minimizes friction.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-sm text-[var(--foreground)]/80">
                    <strong className="text-[var(--foreground)]">Local Storage:</strong> Uses Hive to save ideas on the device without requiring an active internet connection or server sync.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section className="mb-24">
          <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-8 font-bold">// 02 / ARCHITECTURE</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 premium-card">
              <div className="text-[var(--accent)] mb-6">
                <FiSmartphone size={28} />
              </div>
              <h3 className="font-sans text-xs uppercase tracking-wider font-bold mb-4 text-[var(--foreground)]">
                User Interface
              </h3>
              <p className="text-sm text-[var(--foreground)]/75 leading-relaxed">
                Built using Flutter's gesture detection and custom swipe cards for intuitive interaction.
              </p>
            </div>

            <div className="p-8 premium-card">
              <div className="text-[var(--accent)] mb-6">
                <FiDatabase size={28} />
              </div>
              <h3 className="font-sans text-xs uppercase tracking-wider font-bold mb-4 text-[var(--foreground)]">
                Local Database
              </h3>
              <p className="text-sm text-[var(--foreground)]/75 leading-relaxed">
                Uses Hive boxes for rapid, lightweight offline reading and writing.
              </p>
            </div>

            <div className="p-8 premium-card">
              <div className="text-[var(--accent)] mb-6">
                <FiLayout size={28} />
              </div>
              <h3 className="font-sans text-xs uppercase tracking-wider font-bold mb-4 text-[var(--foreground)]">
                State Management
              </h3>
              <p className="text-sm text-[var(--foreground)]/75 leading-relaxed">
                Utilizes clean Provider architectures to maintain state consistency across screens.
              </p>
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
          <div className="max-w-[90vw] max-h-[85vh] relative bg-black p-2 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={screenshots[activeSlide].src}
              alt={screenshots[activeSlide].title}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-[-40px] left-0 right-0 text-center font-mono text-xs text-white/70 uppercase tracking-widest">
              {screenshots[activeSlide].title} — Click anywhere to close
            </div>
          </div>
        </div>
      )}

      {/* Animated Footer */}
      <Footer />
    </div>
  );
}
