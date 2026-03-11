import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface TaxiCar {
  id: number;
  startX: number;
}

let audioCtx: AudioContext | null = null;

function playTaxiHorn() {
  try {
    if (!audioCtx) {
      audioCtx = new AudioContext();
    }
    const ctx = audioCtx;

    const playTone = (freq: number, startTime: number, duration: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "square";
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(0.15, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      osc.start(startTime);
      osc.stop(startTime + duration);
    };

    const now = ctx.currentTime;
    playTone(480, now, 0.08);
    playTone(600, now + 0.12, 0.08);
  } catch {
    // Audio not supported or blocked — silently fail
  }
}

export function TaxiClickEffect() {
  const [taxis, setTaxis] = useState<TaxiCar[]>([]);
  const counterRef = useRef(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      playTaxiHorn();

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
            src="/assets/generated/taxi-cursor-v2-transparent.dim_32x32.png"
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
