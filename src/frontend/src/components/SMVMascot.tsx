/**
 * SMV Tours Hub — Image-Based Animated Mascot
 * Uses the uploaded captain character /assets/uploads/Hero-01-1.png
 * with CSS animations driven by scroll position.
 * Includes a matching SMV car for wave/excited/drive moods.
 */

import { useEffect, useRef, useState } from "react";

type Mood = "idle" | "wave" | "excited" | "drive";

interface MoodConfig {
  speech: string;
  color: string;
  anim: string;
}

const MOODS: Record<Mood, MoodConfig> = {
  idle: {
    speech: "🙏 Welcome to SMV Tours Hub!",
    color: "oklch(0.65 0.18 45)",
    anim: "char-img-idle",
  },
  wave: {
    speech: "✨ Explore all of India!",
    color: "oklch(0.55 0.18 160)",
    anim: "char-img-wave",
  },
  excited: {
    speech: "🚗 Best vehicles. Best prices!",
    color: "oklch(0.58 0.2 25)",
    anim: "char-img-excited",
  },
  drive: {
    speech: "🗺️ Book your dream trip!",
    color: "oklch(0.48 0.18 260)",
    anim: "char-img-drive",
  },
};

const MOOD_ORDER: Mood[] = ["idle", "wave", "excited", "drive"];

function getScrollMood(ratio: number): Mood {
  if (ratio < 0.25) return "idle";
  if (ratio < 0.5) return "wave";
  if (ratio < 0.75) return "excited";
  return "drive";
}

const SPARKLE_DEFS = [
  {
    id: "sp-a",
    left: "8%",
    top: "18%",
    size: "8px",
    color: "#ffd166",
    delay: "0s",
  },
  {
    id: "sp-b",
    left: "22%",
    top: "8%",
    size: "6px",
    color: "#ff6b35",
    delay: "0.3s",
  },
  {
    id: "sp-c",
    left: "68%",
    top: "12%",
    size: "8px",
    color: "#fff",
    delay: "0.6s",
  },
  {
    id: "sp-d",
    left: "82%",
    top: "26%",
    size: "6px",
    color: "#ffd166",
    delay: "0.9s",
  },
  {
    id: "sp-e",
    left: "75%",
    top: "52%",
    size: "8px",
    color: "#ff6b35",
    delay: "1.2s",
  },
];

/** Sparkle dots floating around character in excited / drive mode */
function Sparkles({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {SPARKLE_DEFS.map((sp) => (
        <div
          key={sp.id}
          className="sparkle-float absolute rounded-full"
          style={{
            width: sp.size,
            height: sp.size,
            background: sp.color,
            left: sp.left,
            top: sp.top,
            animationDelay: sp.delay,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}

/** Speech bubble to the left of the character with right-pointing tail */
function SpeechBubble({ mood }: { mood: Mood }) {
  const config = MOODS[mood];
  return (
    <div
      className="mascot-bubble absolute right-full mr-3 top-1/3 -translate-y-1/2 pointer-events-none"
      aria-live="polite"
    >
      <div
        className="relative bg-white rounded-2xl px-4 py-3 shadow-xl border-2"
        style={{ borderColor: config.color, maxWidth: "172px" }}
      >
        <p className="text-xs font-bold text-gray-800 leading-snug whitespace-normal">
          {config.speech}
        </p>
        {/* Outer arrow (border color) */}
        <div
          className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-0 h-0"
          style={{
            borderTop: "9px solid transparent",
            borderBottom: "9px solid transparent",
            borderLeft: `12px solid ${config.color}`,
          }}
          aria-hidden="true"
        />
        {/* Inner arrow (white fill) */}
        <div
          className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0"
          style={{
            borderTop: "7px solid transparent",
            borderBottom: "7px solid transparent",
            borderLeft: "9px solid white",
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

/** Road line SVG scrolling under the character's feet (drive mood) */
function RoadLines() {
  return (
    <div
      className="absolute bottom-10 left-0 right-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="14"
        viewBox="0 0 180 14"
        role="presentation"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="7"
          x2="180"
          y2="7"
          stroke="oklch(0.65 0.18 45)"
          strokeWidth="2.5"
          strokeDasharray="16 10"
          className="mascot-road-line"
        />
      </svg>
    </div>
  );
}

/** Platform glow ellipse under the character */
function PlatformGlow({ color }: { color: string }) {
  return (
    <div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full pointer-events-none transition-all duration-700"
      style={{
        width: "100px",
        height: "24px",
        background: color,
        opacity: 0.32,
        filter: "blur(14px)",
      }}
      aria-hidden="true"
    />
  );
}

/** Progress dots below the character */
function ProgressDots({ mood }: { mood: Mood }) {
  const config = MOODS[mood];
  return (
    <div className="flex gap-2 mt-3" aria-hidden="true">
      {MOOD_ORDER.map((m) => (
        <div
          key={m}
          className="rounded-full transition-all duration-500"
          style={{
            width: mood === m ? "10px" : "7px",
            height: mood === m ? "10px" : "7px",
            background: mood === m ? config.color : "oklch(0.85 0.01 85)",
            boxShadow: mood === m ? `0 0 8px ${config.color}` : "none",
          }}
        />
      ))}
    </div>
  );
}

/** Car that appears in wave/excited/drive moods */
function MascotCar({ mood, carKey }: { mood: Mood; carKey: number }) {
  const showCar = mood !== "idle";
  if (!showCar) return null;

  const isDrive = mood === "drive";

  return (
    <div
      key={carKey}
      className="car-enter absolute"
      style={{
        bottom: "-8px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "210px",
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      <img
        src="/assets/generated/smv-car-transparent.dim_600x380.png"
        alt=""
        className={`w-full h-auto select-none ${isDrive ? "car-drive" : "car-float"}`}
        style={{
          filter:
            "drop-shadow(0 8px 24px oklch(0 0 0 / 0.35)) drop-shadow(0 2px 6px oklch(0.65 0.18 45 / 0.2))",
        }}
        draggable={false}
      />
    </div>
  );
}

/* ─── Main exported component ─── */
export function SMVMascot() {
  const [mood, setMood] = useState<Mood>("idle");
  const prevMoodRef = useRef<Mood>("idle");
  const [charKey, setCharKey] = useState(0);
  const [carKey, setCarKey] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
      const newMood = getScrollMood(ratio);
      if (newMood !== prevMoodRef.current) {
        const prevMood = prevMoodRef.current;
        prevMoodRef.current = newMood;
        setMood(newMood);
        setCharKey((k) => k + 1);
        // Re-trigger car entrance animation when going from idle → something visible
        // or when car changes between moods
        if (prevMood === "idle" || newMood === "idle") {
          setCarKey((k) => k + 1);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const config = MOODS[mood];
  const showCar = mood !== "idle";

  return (
    <div
      className="fixed right-3 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center"
      style={{ width: "210px" }}
      aria-label="SMV Tours Hub captain mascot"
      role="complementary"
    >
      {/* Scene container: character + car layered */}
      <div
        className="relative flex flex-col items-center w-full"
        style={{
          paddingBottom: showCar ? "90px" : "0px",
          transition: "padding-bottom 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Sparkle particles for excited / drive moods */}
        <Sparkles active={mood === "excited" || mood === "drive"} />

        {/* Speech bubble on the left — re-mounts on mood change */}
        <SpeechBubble key={`bubble-${mood}`} mood={mood} />

        {/* Road lines in drive mode */}
        {mood === "drive" && <RoadLines />}

        {/* Platform glow under feet */}
        <PlatformGlow color={config.color} />

        {/* Character image with entrance + mood animation */}
        <div
          key={charKey}
          className="char-img-enter relative z-10"
          style={{ width: "170px" }}
        >
          <img
            src="/assets/uploads/Hero-01-1.png"
            alt="SMV Tours Hub captain character"
            className={`w-full h-auto select-none ${config.anim}`}
            style={{
              filter:
                "drop-shadow(0 12px 32px oklch(0 0 0 / 0.3)) drop-shadow(0 3px 8px oklch(0.65 0.18 45 / 0.22))",
            }}
            draggable={false}
          />
        </div>

        {/* Car — appears below the captain in wave/excited/drive moods */}
        <MascotCar mood={mood} carKey={carKey} />

        {/* Progress indicator dots */}
        <ProgressDots mood={mood} />
      </div>
    </div>
  );
}
