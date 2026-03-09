import { useRef } from "react";
import { useCounterAnimation } from "../hooks/useScrollAnimation";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  delay: number;
}

function StatItem({ value, suffix, label, icon, delay }: StatItemProps) {
  const numRef = useRef<HTMLSpanElement>(null);
  useCounterAnimation(numRef, value);

  return (
    <div
      className="animate-on-scroll text-center"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="inline-flex flex-col items-center gap-3 p-8 rounded-2xl"
        style={{
          background: "oklch(1 0 0 / 0.05)",
          border: "1px solid oklch(1 0 0 / 0.1)",
        }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
          style={{
            background: "oklch(0.65 0.18 45 / 0.15)",
            border: "1px solid oklch(0.65 0.18 45 / 0.3)",
          }}
        >
          {icon}
        </div>
        <div>
          <div className="stat-number">
            <span ref={numRef}>0</span>
            <span>{suffix}</span>
          </div>
          <div
            className="mt-1 text-sm font-semibold tracking-wide uppercase"
            style={{
              color: "oklch(0.75 0.02 85 / 0.7)",
              letterSpacing: "0.08em",
            }}
          >
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

export function StatsSection() {
  const stats = [
    { value: 500, suffix: "+", label: "Happy Customers", icon: "😊", delay: 0 },
    {
      value: 50,
      suffix: "+",
      label: "Destinations Covered",
      icon: "📍",
      delay: 150,
    },
    {
      value: 100,
      suffix: "+",
      label: "Trips Completed",
      icon: "🚗",
      delay: 300,
    },
    {
      value: 10,
      suffix: "+",
      label: "Premium Vehicles",
      icon: "🚌",
      delay: 450,
    },
  ];

  return (
    <section
      id="stats"
      data-ocid="stats.section"
      className="section-dark py-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.18 45) 0%, transparent 70%)",
        }}
      />
      <div className="noise-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14 animate-on-scroll">
          <div className="section-label text-center justify-center mb-3">
            <span style={{ color: "oklch(0.65 0.18 45)" }}>
              — Our Track Record —
            </span>
          </div>
          <h2 className="section-heading text-white">
            Numbers That Tell
            <br />
            <span className="gradient-text">Our Story</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>

        {/* Marquee strip */}
        <div className="mt-14 marquee-container">
          <div className="marquee-track flex gap-12 whitespace-nowrap">
            {(["a", "b"] as const).map((key) => (
              <div key={key} className="flex gap-12 items-center">
                {[
                  "🏔️ Himalayas",
                  "🌊 Beaches",
                  "🛕 Religious Tours",
                  "🌿 Kerala Backwaters",
                  "🏜️ Rajasthan",
                  "❄️ Ladakh",
                  "🌺 Northeast India",
                  "🌊 Andaman",
                  "🦁 Wildlife Safari",
                  "🏰 Heritage Sites",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-sm font-semibold tracking-wide"
                    style={{ color: "oklch(0.75 0.02 85 / 0.5)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
