const fleetData = [
  {
    type: "4-Wheeler",
    image: "/assets/generated/four-wheeler.dim_800x500.jpg",
    emoji: "🚗",
    models: "Toyota Innova / Ertiga / Sedan",
    capacity: "4–7 Passengers",
    features: [
      { icon: "❄️", text: "Full AC" },
      { icon: "🪑", text: "Comfortable Seating" },
      { icon: "👨‍✈️", text: "Experienced Drivers" },
      { icon: "📍", text: "GPS Tracked" },
      { icon: "🎵", text: "Music System" },
      { icon: "🔋", text: "Phone Charger" },
    ],
    ideal:
      "Perfect for families and small groups looking for comfort and privacy.",
    delay: 0,
    animClass: "animate-slide-left",
  },
  {
    type: "Tempo Traveller",
    image: "/assets/generated/tempo-traveller.dim_800x500.jpg",
    emoji: "🚌",
    models: "Force Traveller / Winger",
    capacity: "9–17 Passengers",
    features: [
      { icon: "❄️", text: "Full AC" },
      { icon: "🪑", text: "Luxury Push-Back Seats" },
      { icon: "📺", text: "Entertainment System" },
      { icon: "🔊", text: "Premium Audio" },
      { icon: "💡", text: "Reading Lights" },
      { icon: "👜", text: "Luggage Space" },
    ],
    ideal: "Ideal for large groups, corporate teams, and family reunions.",
    delay: 200,
    animClass: "animate-slide-right",
  },
];

export function FleetSection() {
  return (
    <section
      id="fleet"
      data-ocid="fleet.section"
      className="section-dark py-24 relative overflow-hidden"
    >
      {/* Decorative dots pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(oklch(1 0 0 / 0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="noise-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="section-label justify-center">
            <span style={{ color: "oklch(0.65 0.18 45)" }}>
              Our Premium Fleet
            </span>
          </div>
          <h2 className="section-heading text-white">
            Travel in Style &
            <br />
            <span className="gradient-text">Ultimate Comfort</span>
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-lg"
            style={{ color: "oklch(0.75 0.02 85 / 0.7)" }}
          >
            All our vehicles are meticulously maintained, regularly sanitized,
            and equipped with safety features for your peace of mind.
          </p>
        </div>

        {/* Fleet Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {fleetData.map((vehicle) => (
            <div
              key={vehicle.type}
              data-ocid="fleet.card"
              className={`fleet-card ${vehicle.animClass}`}
              style={{ transitionDelay: `${vehicle.delay}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={`SMV Tours Hub - ${vehicle.type}`}
                  className="w-full h-full object-cover"
                />
                <div className="overlay" />

                {/* Vehicle Badge */}
                <div
                  className="absolute top-4 left-4 px-4 py-2 rounded-xl flex items-center gap-2"
                  style={{
                    background: "oklch(0.65 0.18 45 / 0.9)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <span className="text-xl">{vehicle.emoji}</span>
                  <span className="text-white font-display font-bold text-sm">
                    {vehicle.type}
                  </span>
                </div>

                {/* Capacity badge */}
                <div
                  className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg text-xs font-bold text-white"
                  style={{
                    background: "oklch(0.16 0.03 250 / 0.85)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid oklch(1 0 0 / 0.1)",
                  }}
                >
                  👥 {vehicle.capacity}
                </div>
              </div>

              {/* Content */}
              <div
                className="p-6"
                style={{ background: "oklch(0.22 0.03 250)" }}
              >
                <div
                  className="mb-1 text-sm font-semibold"
                  style={{ color: "oklch(0.65 0.18 45)" }}
                >
                  {vehicle.models}
                </div>

                <p
                  className="text-sm mb-5 leading-relaxed"
                  style={{ color: "oklch(0.75 0.02 85 / 0.7)" }}
                >
                  {vehicle.ideal}
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-5">
                  {vehicle.features.map((feat) => (
                    <div
                      key={feat.text}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg"
                      style={{
                        background: "oklch(0.16 0.03 250)",
                        border: "1px solid oklch(1 0 0 / 0.07)",
                      }}
                    >
                      <span className="text-base">{feat.icon}</span>
                      <span
                        className="text-xs font-medium"
                        style={{ color: "oklch(0.82 0.01 85)" }}
                      >
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  data-ocid="fleet.primary_button"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-primary w-full justify-center"
                >
                  Book This Vehicle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
