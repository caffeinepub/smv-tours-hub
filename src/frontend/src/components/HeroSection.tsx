import { useEffect, useRef } from "react";
import { useParallax } from "../hooks/useScrollAnimation";

const heroWords = ["Your", "Journey,", "Our", "Passion"];

export function HeroSection() {
  const parallaxRef = useParallax();
  const wordsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wordEls = wordsContainerRef.current?.querySelectorAll(".hero-word");
    if (wordEls) {
      wordEls.forEach((word, i) => {
        (word as HTMLElement).style.animationDelay = `${i * 180 + 200}ms`;
      });
    }
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDestinations = () => {
    document
      .getElementById("destinations")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={parallaxRef}
          className="hero-parallax absolute inset-0 scale-110"
        >
          <img
            src="/assets/generated/hero-bg.dim_1600x900.jpg"
            alt="SMV Tours Hub - Premium Travel across India"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.12 0.04 250 / 0.88) 0%, oklch(0.16 0.03 250 / 0.75) 50%, oklch(0.12 0.04 30 / 0.65) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.12 0.04 250 / 0.9) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* Floating decorative circles */}
      <div
        className="absolute top-1/4 right-[8%] w-72 h-72 rounded-full opacity-10 spin-slow"
        style={{ border: "1px solid oklch(0.65 0.18 45)" }}
      />
      <div
        className="absolute top-1/3 right-[10%] w-48 h-48 rounded-full opacity-15 spin-slow"
        style={{
          border: "2px dashed oklch(0.65 0.18 45)",
          animationDirection: "reverse",
          animationDuration: "8s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
            style={{
              background: "oklch(0.65 0.18 45 / 0.15)",
              borderColor: "oklch(0.65 0.18 45 / 0.4)",
              backdropFilter: "blur(10px)",
              animationDelay: "100ms",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "oklch(0.65 0.18 45)" }}
            />
            <span className="text-sm font-semibold text-white/90 tracking-wide">
              🇮🇳 All India Travel Coverage
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-display font-extrabold text-white leading-none mb-6"
            style={{
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            <div
              ref={wordsContainerRef}
              className="flex flex-wrap gap-x-4 items-center"
            >
              {heroWords.map((word) => (
                <span
                  key={word}
                  className="hero-word"
                  style={{ perspective: "500px" }}
                >
                  {word === "Passion" ? (
                    <span className="gradient-text">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </div>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-white/75 mb-10 leading-relaxed"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
              fontWeight: 500,
              animation:
                "heroFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1s both",
            }}
          >
            Premium Tours Across India &nbsp;|&nbsp; 4-Wheelers & Tempo
            Travellers
            <br />
            <span style={{ color: "oklch(0.72 0.17 60)" }}>
              Comfort · Safety · Reliability · 24/7 Support
            </span>
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 items-center"
            style={{
              animation:
                "heroFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1.3s both",
            }}
          >
            <button
              type="button"
              data-ocid="hero.primary_button"
              onClick={scrollToContact}
              className="btn-primary text-base px-8 py-4"
            >
              <span>Book Your Trip</span>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button
              type="button"
              data-ocid="hero.secondary_button"
              onClick={scrollToDestinations}
              className="btn-outline text-base px-8 py-4"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Explore Destinations
            </button>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap gap-6 mt-12 pt-8 border-t"
            style={{
              borderColor: "oklch(1 0 0 / 0.15)",
              animation:
                "heroFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1.6s both",
            }}
          >
            {[
              { icon: "✓", text: "500+ Happy Customers" },
              { icon: "✓", text: "50+ Destinations" },
              { icon: "✓", text: "10+ Premium Vehicles" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "oklch(0.65 0.18 45)" }}
                >
                  {item.icon}
                </span>
                <span className="text-white/70 text-sm font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating All India Coverage Badge */}
        <div
          className="absolute right-8 top-1/2 -translate-y-1/2 float-badge hidden xl:block"
          style={{
            animation:
              "heroFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 2s both, floatBadge 4s ease-in-out 3s infinite",
          }}
        >
          <div
            className="rounded-2xl p-6 text-center"
            style={{
              background: "oklch(0.65 0.18 45 / 0.15)",
              backdropFilter: "blur(20px)",
              border: "1px solid oklch(0.65 0.18 45 / 0.4)",
            }}
          >
            <div className="text-4xl mb-2">🗺️</div>
            <div className="text-white font-display font-bold text-lg leading-tight">
              All India
              <br />
              Coverage
            </div>
            <div
              className="mt-2 text-sm font-medium"
              style={{ color: "oklch(0.72 0.17 60)" }}
            >
              28 States Covered
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          animation: "heroFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 2.2s both",
        }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll Down
        </span>
        <div
          className="w-px h-10 overflow-hidden"
          style={{ background: "oklch(1 0 0 / 0.2)" }}
        >
          <div
            className="w-full h-full"
            style={{
              background: "oklch(0.65 0.18 45)",
              animation: "shimmer 2s linear infinite",
              backgroundSize: "100px 100%",
            }}
          />
        </div>
      </div>
    </section>
  );
}
