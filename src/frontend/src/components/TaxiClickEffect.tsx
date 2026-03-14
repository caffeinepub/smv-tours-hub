import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface TaxiCar {
  id: number;
  startX: number;
}

let audioCtx: AudioContext | null = null;

function playTaxiHonk() {
  try {
    if (!audioCtx) {
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    const ctx = audioCtx;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "square";
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.linearRampToValueAtTime(380, now + 0.1);
    gain.gain.setValueAtTime(0.0, now);
    gain.gain.linearRampToValueAtTime(0.35, now + 0.02);
    gain.gain.setValueAtTime(0.35, now + 0.12);
    gain.gain.linearRampToValueAtTime(0.0, now + 0.22);
    osc.start(now);
    osc.stop(now + 0.25);
  } catch {
    // Audio not supported — silently fail
  }
}

export function TaxiClickEffect() {
  const [taxis, setTaxis] = useState<TaxiCar[]>([]);
  const counterRef = useRef(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Play honk sound when clicking buttons or links
      const isButton =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") !== null ||
        target.closest("a") !== null ||
        target.getAttribute("role") === "button";

      if (isButton) {
        playTaxiHonk();
      }

      // Always animate taxi on any click
      const id = ++counterRef.current;
      const startX = Math.max(0, e.clientX - 30);
      setTaxis((prev) => [...prev, { id, startX }]);

      setTimeout(() => {
        setTaxis((prev) => prev.filter((t) => t.id !== id));
      }, 1400);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (taxis.length === 0) return null;

  return createPortal(
    <>
      {taxis.map((taxi) => (
        <div
          key={taxi.id}
          style={{
            position: "fixed",
            bottom: "40px",
            left: taxi.startX,
            width: "60px",
            height: "60px",
            pointerEvents: "none",
            zIndex: 99999,
            animation: "taxiDrive 1.2s ease-in forwards",
          }}
        >
          <img
            src="/assets/generated/yellow-taxi-cursor-transparent.dim_32x32.png"
            alt=""
            style={{
              width: "60px",
              height: "60px",
              objectFit: "contain",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
            }}
          />
        </div>
      ))}
      <style>{`
        @keyframes taxiDrive {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(100vw + 80px)); }
        }
      `}</style>
    </>,
    document.body,
  );
}
