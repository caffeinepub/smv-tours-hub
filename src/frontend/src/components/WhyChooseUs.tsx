const features = [
  {
    icon: "🚗",
    title: "Premium & Well-Maintained Vehicles",
    description:
      "All our vehicles are fully AC, regularly serviced, sanitized before every trip, and equipped with first-aid kits. Your comfort is our top priority.",
    highlight: "100% AC Fleet",
    align: "left" as const,
    delay: 0,
  },
  {
    icon: "🗺️",
    title: "All India Coverage",
    description:
      "From the snowfields of Kashmir to the beaches of Kanyakumari — we operate across all 28 states and 8 union territories with local expertise.",
    highlight: "28+ States",
    align: "right" as const,
    delay: 100,
  },
  {
    icon: "📞",
    title: "24/7 Customer Support",
    description:
      "Our dedicated team is available round the clock for any assistance, emergency support, or last-minute changes to your travel plans.",
    highlight: "Always Available",
    align: "left" as const,
    delay: 0,
  },
  {
    icon: "👨‍✈️",
    title: "Experienced & Verified Drivers",
    description:
      "All drivers are professionally trained, police-verified, and have extensive knowledge of routes. Your safety is our utmost priority.",
    highlight: "Police Verified",
    align: "right" as const,
    delay: 100,
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="about"
      data-ocid="why-us.section"
      className="py-24 section-dark relative overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, oklch(0.65 0.18 45) 0%, transparent 70%)",
        }}
      />
      <div className="noise-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="section-label justify-center">
            <span style={{ color: "oklch(0.65 0.18 45)" }}>Why Choose Us</span>
          </div>
          <h2 className="section-heading text-white">
            The SMV Tours Hub
            <br />
            <span className="gradient-text">Difference</span>
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-lg"
            style={{ color: "oklch(0.75 0.02 85 / 0.7)" }}
          >
            We don't just drive you places — we create memorable travel
            experiences built on trust, comfort, and reliability.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat, index) => (
            <div
              key={feat.title}
              data-ocid={`why-us.item.${index + 1}`}
              className={`animate-${feat.align === "left" ? "slide-left" : "slide-right"} p-8 rounded-2xl flex gap-6 items-start`}
              style={{
                transitionDelay: `${feat.delay}ms`,
                background: "oklch(0.22 0.03 250)",
                border: "1px solid oklch(1 0 0 / 0.07)",
              }}
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                style={{
                  background: "oklch(0.65 0.18 45 / 0.12)",
                  border: "1px solid oklch(0.65 0.18 45 / 0.25)",
                }}
              >
                {feat.icon}
              </div>

              {/* Content */}
              <div>
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-2 px-2 py-0.5 rounded-md inline-block"
                  style={{
                    background: "oklch(0.65 0.18 45 / 0.15)",
                    color: "oklch(0.72 0.17 60)",
                  }}
                >
                  {feat.highlight}
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2 leading-tight">
                  {feat.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.72 0.02 85 / 0.75)" }}
                >
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA card */}
        <div
          className="mt-10 rounded-2xl p-8 text-center animate-on-scroll delay-400"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.65 0.18 45 / 0.2) 0%, oklch(0.52 0.2 35 / 0.15) 100%)",
            border: "1px solid oklch(0.65 0.18 45 / 0.3)",
          }}
        >
          <h3 className="font-display font-bold text-2xl text-white mb-3">
            Ready to Experience the SMV Difference?
          </h3>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            Join 500+ happy travelers who trust SMV Tours Hub for their journeys
            across India.
          </p>
          <button
            type="button"
            data-ocid="why-us.primary_button"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            Start Planning Your Trip
          </button>
        </div>
      </div>
    </section>
  );
}
