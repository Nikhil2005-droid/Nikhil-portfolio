"use client";

import React, { useEffect, useState } from "react";
import { AsciiTextScramble } from "./AsciiEffects";

export default function Footer() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hrs = String(now.getHours()).padStart(2, "0");
      const mins = String(now.getMinutes()).padStart(2, "0");
      const secs = String(now.getSeconds()).padStart(2, "0");
      setTimeString(`${hrs}:${mins}:${secs}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const marqueeText = "NIKHIL GORREMUCHU // SOFTWARE DEVELOPER // CS STUDENT // SYSTEMS_ACTIVE // BUILD_SUCCESS // ";
  
  return (
    <footer className="w-full bg-[var(--background)] border-t border-[var(--foreground)]/5 pt-12 pb-8 overflow-hidden flex flex-col gap-8 select-none">
      {/* CSS Keyframes for infinite marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>

      {/* Infinite Scrolling Marquee */}
      <div className="w-full border-y border-[var(--foreground)]/5 py-3 overflow-hidden relative bg-[var(--foreground)]/[0.01]">
        <div className="animate-marquee font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-bold">
          <span>{marqueeText.repeat(4)}</span>
          <span>{marqueeText.repeat(4)}</span>
        </div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] uppercase tracking-wider text-[var(--foreground)]/40">
        
        {/* Left: Live System Telemetry */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 items-center justify-center md:justify-start">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>SYS_STATUS: ACTIVE</span>
          </div>
          <div>
            <span>LOCAL_TIME: {timeString || "00:00:00"}</span>
          </div>
        </div>

        {/* Right: Copyright & Theme Meta */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
          <p>
            © {new Date().getFullYear()} <AsciiTextScramble text="Nikhil Gorremuchu" triggerOn="hover" />.
          </p>
          <div className="flex gap-2 items-center">
            <span>All rights reserved</span>
            <span className="font-bold">// <AsciiTextScramble text="Ivory Theme v1.0" triggerOn="hover" /></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
