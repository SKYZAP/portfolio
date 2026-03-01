"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function WaveBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-[40%] opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ animation: "wave-drift 20s ease-in-out infinite" }}
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={isDark ? "rgba(34, 197, 94, 0.08)" : "rgba(22, 163, 74, 0.05)"} />
            <stop offset="50%" stopColor={isDark ? "rgba(34, 197, 94, 0.12)" : "rgba(22, 163, 74, 0.08)"} />
            <stop offset="100%" stopColor={isDark ? "rgba(34, 197, 94, 0.08)" : "rgba(22, 163, 74, 0.05)"} />
          </linearGradient>
        </defs>
        <path
          fill="url(#wave-gradient)"
          d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,128C672,107,768,117,864,144C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      {isDark && (
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-[150px] opacity-20"
          style={{
            background: "radial-gradient(ellipse, rgba(34, 197, 94, 0.3) 0%, transparent 70%)",
          }}
        />
      )}
    </div>
  );
}
