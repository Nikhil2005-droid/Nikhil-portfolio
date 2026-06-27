"use client";

import React, { useEffect, useRef, useState } from "react";

// --- 1. ASCII TEXT SCRAMBLE ---
interface AsciiTextScrambleProps {
  text: string;
  className?: string;
  triggerOn?: "hover" | "mount" | "both";
  delay?: number;
}

export function AsciiTextScramble({
  text,
  className = "",
  triggerOn = "both",
  delay = 0,
}: AsciiTextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const isAnimating = useRef(false);
  const chars = "!@#$%^&*()_+~{}|<>?:[]=-./";

  const scramble = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    let iteration = 0;
    const targetText = text;
    const length = targetText.length;
    
    const interval = setInterval(() => {
      setDisplayText(() => {
        return targetText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return targetText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
      });

      if (iteration >= length) {
        clearInterval(interval);
        isAnimating.current = false;
        setDisplayText(targetText);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    if (triggerOn === "mount" || triggerOn === "both") {
      const timer = setTimeout(() => {
        scramble();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [text, triggerOn, delay]);

  const handleMouseEnter = () => {
    if (triggerOn === "hover" || triggerOn === "both") {
      scramble();
    }
  };

  return (
    <span onMouseEnter={handleMouseEnter} className={className}>
      {displayText}
    </span>
  );
}

// --- 2. ASCII MATRIX BACKGROUND ---
interface AsciiMatrixRainProps {
  opacity?: number;
  className?: string;
}

export function AsciiMatrixRain({ opacity = 0.08, className = "" }: AsciiMatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const asciiChars = "010101010101ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%-+<>{}[]";
    const charArray = asciiChars.split("");
    const fontSize = 10;
    let columns = canvas.width / fontSize;

    let rainDrops: number[] = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(236, 235, 231, 0.15)"; // Soft ivory clear
      // If dark mode is supported or if the theme colors are used, we can match background
      const isDark = document.documentElement.classList.contains("dark");
      ctx.fillStyle = isDark ? "rgba(10, 10, 10, 0.15)" : "rgba(236, 235, 231, 0.15)";
      
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Accent color is #ab92bf (Amethyst)
      ctx.fillStyle = "rgba(171, 146, 191, 0.35)"; 
      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity, mixBlendMode: "multiply" }}
    />
  );
}

// --- 3. 3D ROTATING ASCII CUBE ---
interface AsciiCube3DProps {
  size?: number;
  className?: string;
}

export function AsciiCube3D({ size = 12, className = "" }: AsciiCube3DProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseRef.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let angleX = 0;
    let angleY = 0;
    let angleZ = 0;
    let animationFrameId: number;

    // Define 3D vertices of a cube
    const vertices = [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1],  [1, -1, 1],  [1, 1, 1],  [-1, 1, 1]
    ];

    // Define edges connecting the vertices
    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0], // Back face
      [4, 5], [5, 6], [6, 7], [7, 4], // Front face
      [0, 4], [1, 5], [2, 6], [3, 7]  // Connecting edges
    ];

    const render = () => {
      // Rotate based on time and influence of mouse
      const targetSpeedX = 0.015 + mouseRef.current.y * 0.05;
      const targetSpeedY = 0.02 + mouseRef.current.x * 0.05;
      
      angleX += targetSpeedX;
      angleY += targetSpeedY;
      angleZ += 0.005;

      // Projection parameters
      const width = 40;
      const height = 22;
      const grid = Array(height).fill(null).map(() => Array(width).fill(" "));

      // Rotate and project vertices
      const projected = vertices.map(([x, y, z]) => {
        // Rotate Z
        let x1 = x * Math.cos(angleZ) - y * Math.sin(angleZ);
        let y1 = x * Math.sin(angleZ) + y * Math.cos(angleZ);
        let z1 = z;

        // Rotate Y
        let x2 = x1 * Math.cos(angleY) + z1 * Math.sin(angleY);
        let y2 = y1;
        let z2 = -x1 * Math.sin(angleY) + z1 * Math.cos(angleY);

        // Rotate X
        let x3 = x2;
        let y3 = y2 * Math.cos(angleX) - z2 * Math.sin(angleX);
        let z3 = y2 * Math.sin(angleX) + z2 * Math.cos(angleX);

        // Perspective projection
        const distance = 3;
        const scaleX = width * 0.45;
        const scaleY = height * 0.85;
        const zp = 1 / (distance - z3);
        
        const px = Math.floor(width / 2 + x3 * scaleX * zp);
        const py = Math.floor(height / 2 + y3 * scaleY * zp);

        return [px, py];
      });

      // Draw edges using Bresenham's line algorithm
      edges.forEach(([v1Idx, v2Idx]) => {
        const [x0, y0] = projected[v1Idx];
        const [x1, y1] = projected[v2Idx];

        let dx = Math.abs(x1 - x0);
        let dy = Math.abs(y1 - y0);
        let sx = x0 < x1 ? 1 : -1;
        let sy = y0 < y1 ? 1 : -1;
        let err = dx - dy;

        let x = x0;
        let y = y0;

        const char = "+";

        while (true) {
          if (x >= 0 && x < width && y >= 0 && y < height) {
            grid[y][x] = char;
          }

          if (x === x1 && y === y1) break;
          let e2 = 2 * err;
          if (e2 > -dy) {
            err -= dy;
            x += sx;
          }
          if (e2 < dx) {
            err += dx;
            y += sy;
          }
        }
      });

      // Render grid to text
      let output = "";
      for (let r = 0; r < height; r++) {
        output += grid[r].join("") + "\n";
      }

      if (preRef.current) {
        preRef.current.textContent = output;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [size]);

  return (
    <div className="flex items-center justify-center p-4 bg-[var(--foreground)]/[0.01] overflow-hidden select-none border border-[var(--foreground)]/[0.03]">
      <pre
        ref={preRef}
        className={`font-mono text-xs leading-none text-[var(--accent)] ${className}`}
        style={{
          whiteSpace: "pre",
          fontFamily: "var(--font-mono), Courier New, monospace",
        }}
      />
    </div>
  );
}

// --- 4. ASCII SINE WAVE ---
interface AsciiWaveProps {
  className?: string;
  speed?: number;
}

export function AsciiWave({ className = "", speed = 0.05 }: AsciiWaveProps) {
  const [waveText, setWaveText] = useState("");

  useEffect(() => {
    let offset = 0;
    let animationId: number;

    const width = 60;
    const height = 6;

    const updateWave = () => {
      let output = "";
      for (let y = 0; y < height; y++) {
        let line = "";
        for (let x = 0; x < width; x++) {
          // Create two overlaying sine waves
          const val1 = Math.sin(x * 0.15 + offset) * 2;
          const val2 = Math.cos(x * 0.08 - offset * 0.5) * 1.5;
          const targetY = height / 2 + val1 + val2;

          const distance = Math.abs(y - targetY);
          if (distance < 0.8) {
            line += "@";
          } else if (distance < 1.5) {
            line += "#";
          } else if (distance < 2.2) {
            line += "+";
          } else if (distance < 3) {
            line += ":";
          } else {
            line += " ";
          }
        }
        output += line + "\n";
      }
      setWaveText(output);
      offset += speed;
      animationId = requestAnimationFrame(updateWave);
    };

    updateWave();
    return () => cancelAnimationFrame(animationId);
  }, [speed]);

  return (
    <pre
      className={`font-mono text-[8px] md:text-[10px] leading-none text-[var(--foreground)]/30 select-none ${className}`}
      style={{
        whiteSpace: "pre",
        fontFamily: "var(--font-mono), Courier New, monospace",
      }}
    >
      {waveText}
    </pre>
  );
}

// --- 5. RETRO TERMINAL SIMULATOR ---
export function AsciiTerminal() {
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "nikhil@portfolio:~$ finger nikhil",
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const script = [
    { type: "output", lines: [
      "Login: nikhil             Name: Nikhil Gorremuchu",
      "Directory: /home/nikhil    Shell: /bin/zsh",
      "Status: Computer Science Student & Software Engineer",
      "Interests: Native Mobile Apps, Web Tools, Creative Coding",
      " "
    ]},
    { type: "command", text: "cat contact_info.json" },
    { type: "output", lines: [
      "{",
      '  "email": "nikhilgorremuchu05@gmail.com",',
      '  "github": "github.com/nikhilgorremuchu",',
      '  "location": "India",',
      '  "status": "Available for select opportunities & collaboration"',
      "}",
      " "
    ]},
    { type: "command", text: "ping -c 3 opportunity" },
    { type: "output", lines: [
      "PING opportunity (127.0.0.1) 56(84) bytes of data.",
      "64 bytes from localhost: icmp_seq=1 ttl=64 time=0.034 ms",
      "64 bytes from localhost: icmp_seq=2 ttl=64 time=0.041 ms",
      "64 bytes from localhost: icmp_seq=3 ttl=64 time=0.038 ms",
      " ",
      "--- opportunity ping statistics ---",
      "3 packets transmitted, 3 received, 0% packet loss, time 2003ms",
      "rtt min/avg/max/mdev = 0.034/0.037/0.041/0.005 ms",
      " "
    ]},
    { type: "command", text: "echo 'Let\\'s build something meaningful!'" },
    { type: "output", lines: [
      "Let's build something meaningful!",
      " "
    ]}
  ];

  useEffect(() => {
    let scriptIndex = 0;
    let isMounted = true;

    const runScript = async () => {
      if (!isMounted) return;

      // Wait a bit before starting
      await new Promise((resolve) => setTimeout(resolve, 1000));

      while (scriptIndex < script.length && isMounted) {
        const step = script[scriptIndex];
        
        if (step.type === "command" && step.text) {
          setIsTyping(true);
          const prompt = "nikhil@portfolio:~$ ";
          let typedText = "";
          
          // Type command char by char
          for (let i = 0; i < step.text.length; i++) {
            if (!isMounted) return;
            typedText += step.text[i];
            setTerminalLines((prev) => {
              const next = [...prev];
              next[next.length - 1] = prompt + typedText;
              return next;
            });
            await new Promise((resolve) => setTimeout(resolve, 60 + Math.random() * 40));
          }
          
          setIsTyping(false);
          await new Promise((resolve) => setTimeout(resolve, 400));
        } else if (step.type === "output" && step.lines) {
          // Print output lines
          for (const line of step.lines) {
            if (!isMounted) return;
            setTerminalLines((prev) => [...prev, line]);
            await new Promise((resolve) => setTimeout(resolve, 100));
          }
          // Add next prompt line
          setTerminalLines((prev) => [...prev, "nikhil@portfolio:~$ "]);
        }

        scriptIndex++;
        
        // Loop back to start if finished
        if (scriptIndex >= script.length) {
          await new Promise((resolve) => setTimeout(resolve, 6000));
          if (isMounted) {
            setTerminalLines(["nikhil@portfolio:~$ finger nikhil"]);
            scriptIndex = 0;
          }
        }
      }
    };

    runScript();

    return () => {
      isMounted = false;
    };
  }, []);

  // Auto scroll to bottom of terminal
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [terminalLines]);

  return (
    <div className="w-full bg-[#18191b] border border-[#2f3239] text-[#a9b1d6] font-mono text-[10px] md:text-xs p-4 md:p-6 shadow-2xl relative select-none">
      {/* Terminal Header */}
      <div className="flex items-center justify-between mb-4 border-b border-[#2f3239] pb-3">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">bash // portfolio</span>
        <span className="w-12" />
      </div>

      {/* Terminal Body */}
      <div 
        ref={containerRef}
        className="h-64 overflow-y-auto flex flex-col gap-1 pr-2 scrollbar-thin scrollbar-thumb-slate-800"
        style={{ scrollbarWidth: "thin" }}
      >
        {terminalLines.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap leading-relaxed">
            {line.startsWith("nikhil@portfolio:~$") ? (
              <span>
                <span className="text-[var(--accent)] font-bold">nikhil@portfolio</span>
                <span className="text-slate-400">:</span>
                <span className="text-[#7aa2f7]">~$</span>{" "}
                {line.substring(20)}
              </span>
            ) : (
              line
            )}
            {idx === terminalLines.length - 1 && isTyping && (
              <span className="inline-block w-1.5 h-3.5 bg-[var(--accent)] ml-0.5 animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// --- 6. CYBERNETIC SCHEMATIC SCANNER ---
interface ProjectSchematicProps {
  title: string;
  tech: string[];
  className?: string;
}

export function ProjectSchematic({ title, tech, className = "" }: ProjectSchematicProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let scanY = 0;
    let scanDirection = 1;
    let angleX = 0;
    let angleY = 0;

    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      canvas.width = containerRef.current.clientWidth || 400;
      canvas.height = containerRef.current.clientHeight || 300;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // 3D vertices of a double pyramid (octahedron)
    const vertices = [
      [0, -1.2, 0],  // Top
      [0, 1.2, 0],   // Bottom
      [-0.9, 0, -0.9], // Middle square 4 points
      [0.9, 0, -0.9],
      [0.9, 0, 0.9],
      [-0.9, 0, 0.9]
    ];

    const edges = [
      [0, 2], [0, 3], [0, 4], [0, 5], // Top to middle
      [1, 2], [1, 3], [1, 4], [1, 5], // Bottom to middle
      [2, 3], [3, 4], [4, 5], [5, 2]  // Middle square
    ];

    const draw = () => {
      // Clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      // Draw digital blueprint grid (ivory backdrop or dark background)
      const isDark = document.documentElement.classList.contains("dark");
      
      // Grid lines
      ctx.strokeStyle = isDark ? "rgba(101, 106, 124, 0.04)" : "rgba(101, 106, 124, 0.06)";
      ctx.lineWidth = 1;
      const gridSpacing = 30;
      for (let x = 0; x < w; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw corner crosshairs
      const offset = 15;
      const len = 6;
      ctx.strokeStyle = "rgba(171, 146, 191, 0.4)"; // Accent (Amethyst)
      ctx.lineWidth = 1.5;

      const corners = [
        [offset, offset],
        [w - offset, offset],
        [w - offset, h - offset],
        [offset, h - offset]
      ];

      corners.forEach(([cx, cy]) => {
        ctx.beginPath();
        ctx.moveTo(cx - len, cy);
        ctx.lineTo(cx + len, cy);
        ctx.moveTo(cx, cy - len);
        ctx.lineTo(cx, cy + len);
        ctx.stroke();
      });

      // Draw scanning laser bar
      ctx.strokeStyle = "rgba(171, 146, 191, 0.15)";
      ctx.fillStyle = "rgba(171, 146, 191, 0.02)";
      ctx.lineWidth = 1;
      
      // Laser sweep math
      const speed = isHovered ? 4 : 2;
      scanY += speed * scanDirection;
      if (scanY > h - 10 || scanY < 10) {
        scanDirection *= -1;
      }

      // Draw scanning beam
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(w, scanY);
      ctx.stroke();
      
      ctx.fillRect(0, Math.min(scanY, scanY - 20), w, 20);

      // Draw rotating 3D octahedron in the center
      const centerX = w / 2;
      const centerY = h / 2;
      const scale = Math.min(w, h) * 0.22;

      // Accelerate rotation on hover
      const rotSpeedX = isHovered ? 0.03 : 0.01;
      const rotSpeedY = isHovered ? 0.04 : 0.015;
      angleX += rotSpeedX;
      angleY += rotSpeedY;

      // Project vertices
      const projected = vertices.map(([x, y, z]) => {
        // Rotate Y
        let x1 = x * Math.cos(angleY) + z * Math.sin(angleY);
        let y1 = y;
        let z1 = -x * Math.sin(angleY) + z * Math.cos(angleY);

        // Rotate X
        let x2 = x1;
        let y2 = y1 * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = y1 * Math.sin(angleX) + z1 * Math.cos(angleX);

        // Perspective
        const d = 3;
        const zp = 1 / (d - z2);

        return [
          centerX + x2 * scale * zp,
          centerY + y2 * scale * zp
        ];
      });

      // Draw octahedron edges
      ctx.strokeStyle = "rgba(171, 146, 191, 0.55)";
      ctx.lineWidth = 1;
      edges.forEach(([i, j]) => {
        const [x0, y0] = projected[i];
        const [x1, y1] = projected[j];
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
      });

      // Draw nodes on vertices
      ctx.fillStyle = "rgba(101, 106, 124, 0.8)";
      projected.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Telemetry metadata overlay (techy fonts)
      ctx.fillStyle = "rgba(101, 106, 124, 0.6)";
      ctx.font = "bold 9px monospace";
      ctx.textAlign = "left";

      // Top-left telemetry
      ctx.fillText(`SYS_STATUS: ${isHovered ? "ONLINE_ENGAGED" : "SCANNING_ACTIVE"}`, 25, 30);
      ctx.fillText(`TARGET: ${title.toUpperCase().replace(" ", "_")}`, 25, 42);
      ctx.fillText(`MATRIX_RES: 0.125`, 25, 54);

      // Bottom-left telemetry
      ctx.fillText(`X_POS: ${mousePos.x.toFixed(0)}`, 25, h - 42);
      ctx.fillText(`Y_POS: ${mousePos.y.toFixed(0)}`, 25, h - 30);

      // Top-right telemetry
      ctx.textAlign = "right";
      ctx.fillText(`SUB_SYS: VECTORS_3D`, w - 25, 30);
      ctx.fillText(`MODULE_ID: 0x8F9A`, w - 25, 42);
      ctx.fillText(`TECH_TAGS: ${tech.length}`, w - 25, 54);

      // Center radar circle
      ctx.strokeStyle = "rgba(171, 146, 191, 0.08)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, scale * 1.2, 0, Math.PI * 2);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [title, tech, mousePos, isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full h-full min-h-[350px] md:min-h-[420px] relative overflow-hidden select-none cursor-crosshair ${className}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}

