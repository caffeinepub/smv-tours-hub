import { useCallback, useEffect, useRef, useState } from "react";

// ───────────────────────────────────────────────────────────────────────────
// Types & config
// ───────────────────────────────────────────────────────────────────────────

type Mood =
  | "wave"
  | "bounce"
  | "excited"
  | "proud"
  | "celebrate"
  | "thumbsup"
  | "phone";

interface SectionConfig {
  id: string;
  message: string;
  mood: Mood;
  emoji: string;
}

const SECTIONS: SectionConfig[] = [
  {
    id: "home",
    message:
      "Welcome to SMV Tours Hub! Your premium travel partner across India!",
    mood: "wave",
    emoji: "👋",
  },
  {
    id: "stats",
    message:
      "500+ happy customers & 50+ destinations — our numbers speak for themselves!",
    mood: "thumbsup",
    emoji: "👍",
  },
  {
    id: "services",
    message:
      "6 amazing services — hill stations, yatras, corporate travel and more!",
    mood: "excited",
    emoji: "✨",
  },
  {
    id: "fleet",
    message:
      "Our premium fleet — luxury 4-wheelers and spacious Tempo Travellers!",
    mood: "proud",
    emoji: "🚗",
  },
  {
    id: "destinations",
    message:
      "Explore 50+ stunning destinations across India — Agra, Ladakh, Kerala, Goa!",
    mood: "excited",
    emoji: "🗺️",
  },
  {
    id: "why",
    message: "Safety, comfort, reliability and 24/7 support on every journey!",
    mood: "bounce",
    emoji: "🏆",
  },
  {
    id: "testimonials",
    message: "Don't take our word — hear from 500+ happy SMV customers!",
    mood: "celebrate",
    emoji: "🎉",
  },
  {
    id: "contact",
    message: "Ready to travel? Book now and we'll call you back in minutes!",
    mood: "phone",
    emoji: "📞",
  },
];

// Static sparkle positions
const SPARKLE_ITEMS = [
  { key: "s1", left: "5%", top: "5%", delay: "0s", size: "12px" },
  { key: "s2", left: "80%", top: "10%", delay: "0.3s", size: "9px" },
  { key: "s3", left: "20%", top: "15%", delay: "0.6s", size: "11px" },
  { key: "s4", left: "65%", top: "20%", delay: "0.9s", size: "8px" },
  { key: "s5", left: "45%", top: "8%", delay: "1.2s", size: "10px" },
] as const;

const SECTION_KEYS = SECTIONS.map((s) => s.id);

// ───────────────────────────────────────────────────────────────────────────
// Action badge that appears for certain moods
// ───────────────────────────────────────────────────────────────────────────

function ActionBadge({ mood }: { mood: Mood }) {
  const badges: Partial<
    Record<Mood, { icon: string; label: string; color: string }>
  > = {
    thumbsup: { icon: "👍", label: "Great!", color: "oklch(0.65 0.18 45)" },
    celebrate: { icon: "🎉", label: "Yay!", color: "oklch(0.6 0.2 300)" },
    phone: { icon: "📞", label: "Call us!", color: "oklch(0.55 0.18 150)" },
  };

  const badge = badges[mood];
  if (!badge) return null;

  return (
    <div
      className="absolute pointer-events-none flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold text-white shadow-lg"
      style={{
        top: "10%",
        left: "-50px",
        background: badge.color,
        animation:
          "badgePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, badgeBob 1.5s ease-in-out 0.5s infinite",
        zIndex: 10,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        whiteSpace: "nowrap",
      }}
    >
      <span>{badge.icon}</span>
      <span>{badge.label}</span>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Sparkle dots rendered above character
// ───────────────────────────────────────────────────────────────────────────

function Sparkles({ mood }: { mood: Mood }) {
  if (mood !== "excited" && mood !== "celebrate") return null;
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      {SPARKLE_ITEMS.map((sp) => (
        <span
          key={sp.key}
          className="guide-sparkle absolute"
          style={{
            left: sp.left,
            top: sp.top,
            animationDelay: sp.delay,
            fontSize: sp.size,
            color: "oklch(0.72 0.17 60)",
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Progress dots
// ───────────────────────────────────────────────────────────────────────────

function ProgressDots({ current }: { current: number }) {
  return (
    <div className="flex flex-col gap-1.5 items-center">
      {SECTION_KEYS.map((key, i) => (
        <div
          key={key}
          className="rounded-full transition-all duration-300"
          style={{
            width: i === current ? "8px" : "5px",
            height: i === current ? "8px" : "5px",
            background:
              i === current
                ? "oklch(0.65 0.18 45)"
                : "oklch(0.65 0.18 45 / 0.3)",
          }}
        />
      ))}
    </div>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Speech bubble
// ───────────────────────────────────────────────────────────────────────────

function SpeechBubble({ message, emoji }: { message: string; emoji: string }) {
  return (
    <div
      className="guide-bubble relative px-3 py-2.5 rounded-xl shadow-lg text-left"
      style={{
        background: "white",
        maxWidth: "200px",
        minWidth: "150px",
        border: "1.5px solid oklch(0.65 0.18 45 / 0.3)",
        boxShadow:
          "0 8px 32px oklch(0 0 0 / 0.14), 0 2px 8px oklch(0.65 0.18 45 / 0.12)",
      }}
      data-ocid="guide.panel"
    >
      <span className="text-base leading-none mr-1">{emoji}</span>
      <span
        className="text-xs leading-snug font-medium"
        style={{
          color: "oklch(0.22 0.03 250)",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {message}
      </span>

      {/* Tail pointing down-right toward the character */}
      <div
        className="absolute"
        style={{
          bottom: "-9px",
          right: "22px",
          width: 0,
          height: 0,
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderTop: "9px solid white",
          filter: "drop-shadow(0 2px 1px oklch(0 0 0 / 0.08))",
        }}
      />
    </div>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Mood → body animation style
// ───────────────────────────────────────────────────────────────────────────

function getMoodStyle(_mood: Mood): React.CSSProperties {
  // All moods use a gentle idle float — character stays stable
  return {
    animation: "guideBodyIdle 2.5s ease-in-out infinite",
  };
}

// ───────────────────────────────────────────────────────────────────────────
// Main component
// ───────────────────────────────────────────────────────────────────────────

export function CharacterGuide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const [bubbleKey, setBubbleKey] = useState(0);
  const [charKey, setCharKey] = useState(0);
  const prevIndexRef = useRef(0);

  // Detect active section via IntersectionObserver
  useEffect(() => {
    const ratios: Record<string, number> = {};

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios[entry.target.id] = entry.intersectionRatio;
        }

        let bestId = "";
        let bestRatio = 0;
        for (const [id, ratio] of Object.entries(ratios)) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        const idx = SECTIONS.findIndex((s) => s.id === bestId);
        if (idx !== -1 && idx !== prevIndexRef.current) {
          prevIndexRef.current = idx;
          setActiveIndex(idx);
          setBubbleKey((k) => k + 1);
          setCharKey((k) => k + 1);
        }
      },
      { threshold: [0.1, 0.3, 0.5, 0.7] },
    );

    for (const { id } of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleDismiss = useCallback(() => setDismissed(true), []);
  const handleRestore = useCallback(() => setDismissed(false), []);

  const current = SECTIONS[activeIndex];

  // ── Restore button ──────────────────────────────────────────────────────
  if (dismissed) {
    return (
      <button
        type="button"
        data-ocid="guide.button"
        onClick={handleRestore}
        className="fixed z-50 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
        style={{
          right: "16px",
          bottom: "80px",
          width: "52px",
          height: "52px",
          background: "oklch(0.65 0.18 45)",
          boxShadow: "0 4px 20px oklch(0.65 0.18 45 / 0.5)",
          border: "2px solid white",
        }}
        aria-label="Show tour guide"
        title="Show SMV tour guide"
      >
        <img
          src="/assets/uploads/Hero-1-1.png"
          alt="SMV Guide"
          className="w-8 h-8 object-contain"
        />
      </button>
    );
  }

  // ── Main guide ──────────────────────────────────────────────────────────
  return (
    <div
      data-ocid="guide.section"
      className="fixed z-50 flex flex-col items-end gap-2 pointer-events-none"
      style={{
        right: "16px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <div className="guide-wrapper flex flex-col items-end gap-2 pointer-events-auto">
        {/* Speech bubble */}
        <div key={bubbleKey} className="guide-bubble-enter mb-1">
          <SpeechBubble message={current.message} emoji={current.emoji} />
        </div>

        {/* Row: progress dots + character */}
        <div className="flex items-end gap-2">
          <ProgressDots current={activeIndex} />

          {/* Character container */}
          <div className="relative" style={{ width: "120px" }}>
            <Sparkles mood={current.mood} />
            <ActionBadge mood={current.mood} />

            {/* Character image with mood animation via inline style */}
            <div
              key={charKey}
              style={{
                position: "relative",
                display: "inline-block",
                animation:
                  "guideCharEnter 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
              }}
            >
              <div style={getMoodStyle(current.mood)}>
                <img
                  src="/assets/uploads/Hero-1-1.png"
                  alt="SMV Tour Guide Captain"
                  className="guide-char-img block select-none"
                  style={{
                    filter:
                      "drop-shadow(0 6px 18px oklch(0 0 0 / 0.35)) contrast(1.05) saturate(1.1)",
                  }}
                  draggable={false}
                />
              </div>
            </div>

            {/* Shadow underfoot */}
            <div className="guide-char-shadow" />
          </div>
        </div>

        {/* Dismiss button */}
        <button
          type="button"
          data-ocid="guide.close_button"
          onClick={handleDismiss}
          className="self-end mt-1 rounded-full flex items-center justify-center text-xs font-bold transition-all hover:scale-110 active:scale-95"
          style={{
            width: "22px",
            height: "22px",
            background: "oklch(0.88 0.015 85)",
            color: "oklch(0.4 0.02 250)",
            border: "1px solid oklch(0.78 0.01 85)",
            lineHeight: 1,
            cursor: "pointer",
          }}
          aria-label="Close tour guide"
          title="Hide guide"
        >
          ×
        </button>
      </div>
    </div>
  );
}
