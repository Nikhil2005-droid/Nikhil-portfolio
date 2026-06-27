"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiArrowLeft, FiCode, FiDatabase, FiLayout, FiMaximize2, FiChevronLeft, FiChevronRight, FiSun, FiMoon } from "react-icons/fi";
import { AsciiTextScramble } from "@/components/AsciiEffects";
import Footer from "@/components/Footer";

interface ScreenshotMode {
  src: string;
  desc: string;
}

interface Screenshot {
  id: string;
  title: string;
  light: ScreenshotMode;
  dark: ScreenshotMode;
}

const screenshots: Screenshot[] = [
  {
    id: "portal",
    title: "Workspace Portal",
    light: {
      src: "/screenshots/01_workspace_gate_light.png",
      desc: "A clean, elegant splash screen for workspace access. Includes quick re-entry to recent workspaces, preferences, and a password-protected ID input field."
    },
    dark: {
      src: "/screenshots/02_workspace_gate_dark.png",
      desc: "The dark-themed entrance dashboard, offering distraction-free access, secure workspace verification, and clean entry navigation."
    }
  },
  {
    id: "lined-notes",
    title: "Lined Paper Notes",
    light: {
      src: "/screenshots/03_notes_view_light.png",
      desc: "The analogue-notebook notes view with an amber-ruled canvas, sidebar notes navigation, search filter, and focus mode for streamlined writing."
    },
    dark: {
      src: "/screenshots/06_notes_view_modern_dark.png",
      desc: "The dark mode variant of the modern note editor, offering high contrast and a highly polished distraction-free layout for night writing."
    }
  },
  {
    id: "modern-notes",
    title: "Modern Notes",
    light: {
      src: "/screenshots/05_notes_view_modern_light.png",
      desc: "A modern workspace variant of the note editor. Displays custom amber/slate guidelines for clean text design, font controls, and word counts."
    },
    dark: {
      src: "/screenshots/06_notes_view_modern_dark.png",
      desc: "The dark mode variant of the modern note editor, offering high contrast and a highly polished distraction-free layout for night writing."
    }
  },
  {
    id: "special-feature",
    title: "Special Feature",
    light: {
      src: "/screenshots/text-pad_special_feature_light.png",
      desc: "Transliteration & Bilingual Editors. Enables real-time phonetic typing in local languages like Telugu and Malayalam."
    },
    dark: {
      src: "/screenshots/text-pad_special_feature_dark.png",
      desc: "Transliteration & Bilingual Editors. Enables real-time phonetic typing in local languages like Telugu and Malayalam."
    }
  },
  {
    id: "code",
    title: "Code Studio",
    light: {
      src: "/screenshots/07_code_view_light.png",
      desc: "A developer-focused scratchpad in light mode. Supports multiple code font configurations (like JetBrains Mono), line numbering, and instant saves."
    },
    dark: {
      src: "/screenshots/08_code_view_dark.png",
      desc: "The dark mode developer workspace featuring line-number synchronization, a custom font switcher, and simple file management."
    }
  },
  {
    id: "docs",
    title: "Documentation",
    light: {
      src: "/screenshots/09_docs_view_light.png",
      desc: "Comprehensive in-app guides in light mode explaining workspace actions, navigation structures, and automatic saving safety logic."
    },
    dark: {
      src: "/screenshots/10_docs_view_dark.png",
      desc: "A beautiful dark-theme help section that outlines system architecture, notes organization, and secure state handling."
    }
  },
  {
    id: "settings",
    title: "Settings Panel",
    light: {
      src: "/screenshots/11_settings_view_light.png",
      desc: "Fine-tune the workspace experience. Customizes symbol auto-replacement, ruled lines toggle, autosave toast settings, and password protections."
    },
    dark: {
      src: "/screenshots/12_settings_view_dark.png",
      desc: "A rich settings page in dark mode for managing workspace identity, renaming paths, and configuring custom folder protection schemes."
    }
  },
  {
    id: "notfound",
    title: "404 Page",
    light: {
      src: "/screenshots/13_notfound_view_light.png",
      desc: "An elegant light-theme fallback screen containing quick redirects to active workspaces, settings, and documents if a path is invalid."
    },
    dark: {
      src: "/screenshots/14_notfound_view_dark.png",
      desc: "A dark-theme custom 404 page featuring a glassmorphic layout and clean navigation shortcuts back to safety."
    }
  }
];

export default function TextPadDetailPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [galleryTheme, setGalleryTheme] = useState<"light" | "dark">("dark");
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
            <span className="text-[var(--accent)] font-mono text-xs uppercase tracking-widest font-bold">// Project 01</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mt-4 mb-6 leading-none select-none">
              Text Pad
            </h1>
            <p className="text-lg text-[var(--foreground)]/70 max-w-3xl leading-relaxed">
              A minimalist, workspace-driven digital studio for writing and coding scratchpads. Text Pad combines the analog layout of a ruled paper notebook with essential developer features like syntax-folding scratchpads, keyboard-driven transliteration, and concurrent-safe database saves.
            </p>
          </motion.div>
        </section>

        {/* Project Metadata Columns */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-[var(--foreground)]/10 mb-20 text-xs uppercase font-mono tracking-wider text-[var(--foreground)]/40">
          <div>
            <h4 className="mb-2">// Role</h4>
            <p className="font-bold text-sm text-[var(--foreground)]">Full-Stack Developer</p>
          </div>
          <div>
            <h4 className="mb-2">// Technologies</h4>
            <p className="font-bold text-sm text-[var(--foreground)]">Node.js, Express, MongoDB, Tailwind CSS, React</p>
          </div>
          <div>
            <h4 className="mb-2">// Workspace Safety</h4>
            <p className="font-bold text-sm text-[var(--accent)]">Password-protected paths</p>
          </div>
        </section>

        {/* Interactive Screenshot Gallery */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 pb-4 border-b border-[var(--foreground)]/10">
            <div>
              <h2 className="font-display text-2xl md:text-4xl font-bold uppercase select-none">
                Interactive Gallery
              </h2>
              <p className="text-xs text-[var(--foreground)]/50 mt-1">Browse the live app layouts and workspaces</p>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              {/* Interactive Theme Switcher */}
              <div className="flex items-center gap-1 bg-[var(--foreground)]/[0.03] p-1 border border-[var(--foreground)]/10 rounded-full">
                <button
                  onClick={() => setGalleryTheme("light")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${galleryTheme === "light"
                    ? "bg-[var(--accent)] text-white shadow-sm"
                    : "text-[var(--foreground)]/60 hover:text-[var(--foreground)]"
                    }`}
                >
                  <FiSun size={12} /> Light
                </button>
                <button
                  onClick={() => setGalleryTheme("dark")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${galleryTheme === "dark"
                    ? "bg-[var(--accent)] text-white shadow-sm"
                    : "text-[var(--foreground)]/60 hover:text-[var(--foreground)]"
                    }`}
                >
                  <FiMoon size={12} /> Dark
                </button>
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
          </div>

          {/* Interactive Slide Viewer */}
          <div className="relative w-full aspect-[16/9] overflow-hidden border border-[var(--foreground)]/10 bg-[var(--foreground)]/[0.01] rounded-2xl p-2 md:p-3">
            <div className="w-full h-full relative overflow-hidden rounded-xl bg-neutral-950/5 flex items-center justify-center">
              <motion.img
                key={`${activeSlide}-${galleryTheme}`}
                src={screenshots[activeSlide][galleryTheme].src}
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
                  {screenshots[activeSlide].title} <span className="text-[var(--accent)] font-mono text-xs font-normal">({galleryTheme === "light" ? "Light" : "Dark"})</span>
                </h3>
                <p className="text-xs text-[var(--foreground)]/70 mt-1 max-w-xl">
                  {screenshots[activeSlide][galleryTheme].desc}
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
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mt-6">
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
              A workspace for notes and code.
            </h2>
            <p className="text-[var(--foreground)]/70 leading-relaxed text-base">
              Text Pad was built as a clean workspace to save notes and code drafts. It uses password-protected workspaces to isolate note folders. It features a built-in Telugu and Malayalam transliteration driver that lets you type in local scripts easily. Data is saved automatically in real-time, and it prevents save conflicts if you have the same workspace open in multiple tabs.
            </p>
          </div>

          <div className="lg:col-span-5 p-8 premium-card flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-6 font-bold">// Design Pillars</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-sm text-[var(--foreground)]/80">
                    <strong className="text-[var(--foreground)]">Secure Access:</strong> Secure, password-protected workspaces encrypt content updates locally and securely.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-sm text-[var(--foreground)]/80">
                    <strong className="text-[var(--foreground)]">Simple Access:</strong> Clean, instant-verification access gates allow users to enter, lock, edit, and leave safely.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-sm text-[var(--foreground)]/80">
                    <strong className="text-[var(--foreground)]">Unified Framework:</strong> The node root controller links React build assets with static, optimized Express endpoints.
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
                <FiLayout size={28} />
              </div>
              <h3 className="font-sans text-xs uppercase tracking-wider font-bold mb-4 text-[var(--foreground)]">
                Structured UI
              </h3>
              <p className="text-sm text-[var(--foreground)]/75 leading-relaxed">
                Built with clean, simple panels and guides that mimic a physical notebook layout.
              </p>
            </div>

            <div className="p-8 premium-card">
              <div className="text-[var(--accent)] mb-6">
                <FiCode size={28} />
              </div>
              <h3 className="font-sans text-xs uppercase tracking-wider font-bold mb-4 text-[var(--foreground)]">
                Express Server
              </h3>
              <p className="text-sm text-[var(--foreground)]/75 leading-relaxed">
                An Express server handles creating, deleting, and searching notes inside a workspace.
              </p>
            </div>

            <div className="p-8 premium-card">
              <div className="text-[var(--accent)] mb-6">
                <FiDatabase size={28} />
              </div>
              <h3 className="font-sans text-xs uppercase tracking-wider font-bold mb-4 text-[var(--foreground)]">
                MongoDB Store
              </h3>
              <p className="text-sm text-[var(--foreground)]/75 leading-relaxed">
                MongoDB stores notes and configurations indexed by workspace paths.
              </p>
            </div>
          </div>
        </section>

        {/* Synchronization Safety */}
        <section className="p-8 md:p-12 premium-card mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold">// 03 / CONCURRENCY</h3>
              <h2 className="font-display text-2xl md:text-3xl font-black uppercase text-[var(--foreground)] leading-none select-none">
                Concurrency Safety
              </h2>
              <p className="text-sm text-[var(--foreground)]/70 leading-relaxed font-sans mt-2">
                To prevent save collisions across multiple open browser tabs of the same Workspace ID, Text Pad checks client timestamps. The Express API validates changes against MongoDB documents, preventing delta collision and keeping state synchronized.
              </p>
            </div>

            <div className="lg:col-span-7 bg-[var(--foreground)]/[0.02] p-6 border border-[var(--foreground)]/10 rounded-2xl font-mono text-[11px] space-y-4 shadow-sm">
              <div className="text-[var(--accent)] border-b border-[var(--foreground)]/10 pb-2 flex justify-between uppercase tracking-wider">
                <span>Concurrency Flow</span>
                <span>Active</span>
              </div>
              <div className="space-y-2 text-[var(--foreground)]/80">
                <div className="flex justify-between items-center bg-[var(--foreground)]/[0.02] p-2.5 border border-[var(--foreground)]/10 rounded-lg">
                  <span className="text-[var(--accent)]">1. Browser Tab A</span>
                  <span>➜ PATCH /api/workspace/notes</span>
                  <span className="text-emerald-500 font-bold">Success (200 OK)</span>
                </div>
                <div className="flex justify-between items-center bg-[var(--foreground)]/[0.02] p-2.5 border border-[var(--foreground)]/10 rounded-lg">
                  <span className="text-[var(--accent)]">2. Browser Tab B</span>
                  <span>➜ PATCH /api/workspace/notes</span>
                  <span className="text-rose-500 font-bold">Rejected (409 Conflict)</span>
                </div>
                <div className="flex justify-between items-center bg-[var(--foreground)]/[0.02] p-2.5 border border-[var(--foreground)]/10 rounded-lg">
                  <span className="text-[var(--accent)]">3. Graceful Sync</span>
                  <span>➜ Pull Fresh Server Payload</span>
                  <span className="text-[var(--accent)] font-bold">Merged Safely</span>
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
          <div className="max-w-[90vw] max-h-[85vh] relative bg-black p-2 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={screenshots[activeSlide][galleryTheme].src}
              alt={screenshots[activeSlide].title}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-[-40px] left-0 right-0 text-center font-mono text-xs text-white/70 uppercase tracking-widest">
              {screenshots[activeSlide].title} ({galleryTheme === "light" ? "Light" : "Dark"}) — Click anywhere to close
            </div>
          </div>
        </div>
      )}

      {/* Animated Footer */}
      <Footer />
    </div>
  );
}
