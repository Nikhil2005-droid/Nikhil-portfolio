"use client";

import React, { useRef, useEffect, useState } from "react";

interface AsciiPictureProps {
  src?: string;
  type?: "profile" | "project";
  charWidth?: number;
  charHeight?: number;
  className?: string;
  isColored?: boolean;
}

export default function AsciiPicture({
  src,
  type = "project",
  charWidth = 56,
  charHeight = 46,
  className = "",
  isColored = true,
}: AsciiPictureProps) {
  const [asciiText, setAsciiText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(type === "project");
  const [error, setError] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Cool static geometric profile art to display until user uploads photo
  const profileAscii = `
                       .=========.
                    .==           ==.
                 .==                 ==.
               .=                       =.
             .=   .=============.         =.
            /   .=               =.         \\
           /   /                   \\         \\
          /   /     .=========.     \\         \\
         |   |     /           \\     |         |
         |   |    |  NIKHIL G.  |    |         |
         |   |     \\           /     |         |
          \\   \\     '========='     /         /
           \\   \\                   /         /
            \\   '=               ='         /
             '=   '============='         ='
               '=                       ='
                 '==                 =='
                    '==           =='
                       '========='
  `;

  useEffect(() => {
    const imageSrc = type === "profile" ? (src || "/profile_image.png") : src;

    if (!imageSrc) {
      if (type === "profile") {
        setAsciiText(profileAscii);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
      return;
    }

    let active = true;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;

    img.onload = () => {
      if (!active) return;
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          if (type === "profile") {
            setAsciiText(profileAscii);
          } else {
            setError(true);
          }
          setLoading(false);
          return;
        }

        canvas.width = charWidth;
        canvas.height = charHeight;

        // Draw image stretched to low-resolution canvas size
        if (type === "profile") {
          // Crop bottom 15% of the profile image so the hair and top space fit in the square
          const sWidth = img.width;
          const sHeight = img.height * 0.85;
          ctx.drawImage(img, 0, 0, sWidth, sHeight, 0, 0, charWidth, charHeight);
        } else {
          ctx.drawImage(img, 0, 0, charWidth, charHeight);
        }

        const imgData = ctx.getImageData(0, 0, charWidth, charHeight);
        const pixels = imgData.data;

        // Character maps from darkest to lightest
        const standardRamp = "@#S%?*+;:,. ";
        const hoverRamp = "NG/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. ";

        const ramp = isHovered ? hoverRamp : standardRamp;
        let result = "";

        for (let y = 0; y < charHeight; y++) {
          for (let x = 0; x < charWidth; x++) {
            const idx = (y * charWidth + x) * 4;
            const r = pixels[idx];
            const g = pixels[idx + 1];
            const b = pixels[idx + 2];
            const a = pixels[idx + 3];

            // If completely transparent, add a space
            if (a < 10) {
              result += " ";
              continue;
            }

            // Luminance / brightness calculation
            const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
            
            // Map 0-255 brightness to ramp index
            const charIdx = Math.min(
              Math.floor((brightness / 255) * ramp.length),
              ramp.length - 1
            );
            result += ramp[charIdx];
          }
          result += "\n";
        }

        setAsciiText(result);
        setLoading(false);
      } catch (err) {
        console.error("Error generating ASCII art:", err);
        if (type === "profile") {
          setAsciiText(profileAscii);
        } else {
          setError(true);
        }
        setLoading(false);
      }
    };

    img.onerror = () => {
      if (active) {
        if (type === "profile") {
          setAsciiText(profileAscii);
        } else {
          setError(true);
        }
        setLoading(false);
      }
    };

    return () => {
      active = false;
    };
  }, [src, type, charWidth, charHeight, isHovered]);

  const fallbackAscii = `
               .---.
              /     \\
              | () () |
               \\  ^  /
                |||||
            .---'---'---.
           /             \\
          /  |         |  \\
         /   |         |   \\
        /    |         |    \\
  `;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`font-mono text-[7px] leading-[0.9] select-none cursor-crosshair transition-all duration-300 ${
        isHovered
          ? "text-[var(--foreground)] drop-shadow-[0_0_8px_rgba(101,106,124,0.2)]"
          : isColored
          ? "text-[var(--accent)]"
          : "text-[var(--foreground)]/65"
      } ${className}`}
      style={{
        whiteSpace: "pre",
        fontFamily: "var(--font-mono), Courier New, monospace",
      }}
    >
      {loading ? (
        <span>Loading representation...</span>
      ) : error ? (
        <pre className="text-rose-500 font-bold">{fallbackAscii}</pre>
      ) : (
        <pre className="m-0 p-0">{asciiText}</pre>
      )}
    </div>
  );
}
