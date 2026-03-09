const destinations = [
  {
    name: "Agra & Taj Mahal",
    tagline: "Witness Eternal Love",
    image: "/assets/generated/destination-agra.dim_600x400.jpg",
    duration: "1-2 Days",
    distance: "From Delhi: 230 km",
    description:
      "Marvel at the world's most iconic monument to love, the Taj Mahal, alongside Agra Fort and Fatehpur Sikri.",
    tags: ["UNESCO Heritage", "Mughal History", "Romantic"],
    delay: 0,
  },
  {
    name: "Ladakh",
    tagline: "The Land Above Clouds",
    image: "/assets/generated/destination-ladakh.dim_600x400.jpg",
    duration: "7-12 Days",
    distance: "From Delhi: 980 km",
    description:
      "High-altitude desert landscape with Pangong Lake, ancient monasteries, and breathtaking mountain passes.",
    tags: ["Adventure", "Mountains", "Buddhist Culture"],
    delay: 150,
  },
  {
    name: "Kerala",
    tagline: "God's Own Country",
    image: "/assets/generated/destination-kerala.dim_600x400.jpg",
    duration: "5-8 Days",
    distance: "From Mumbai: 1,200 km",
    description:
      "Serene backwaters, lush spice gardens, pristine beaches and the rich cultural heritage of South India.",
    tags: ["Backwaters", "Ayurveda", "Nature"],
    delay: 300,
  },
  {
    name: "Goa",
    tagline: "Sun, Sand & Serenity",
    image: "/assets/generated/destination-goa.dim_600x400.jpg",
    duration: "3-5 Days",
    distance: "From Mumbai: 600 km",
    description:
      "India's beach paradise with golden sands, vibrant nightlife, Portuguese architecture and delicious seafood.",
    tags: ["Beaches", "Nightlife", "Portuguese Heritage"],
    delay: 450,
  },
];

export function DestinationsSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="destinations"
      data-ocid="destinations.section"
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "oklch(0.97 0.015 75)" }}
      />
      <div
        className="absolute -bottom-20 left-0 right-0 h-64 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, oklch(0.98 0.005 85), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="section-label justify-center">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Popular Destinations
          </div>
          <h2 className="section-heading">
            Where Will Your
            <br />
            <span className="gradient-text">Story Begin?</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            From the mighty Himalayas to sun-kissed beaches, we take you
            everywhere in India with comfort and care.
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <div
              key={dest.name}
              data-ocid={`destinations.item.${index + 1}`}
              className="destination-card animate-scale-in"
              style={{ transitionDelay: `${dest.delay}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-72">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="card-overlay" />

                {/* Duration badge */}
                <div
                  className="absolute top-4 right-4 px-2.5 py-1 rounded-lg text-xs font-bold text-white"
                  style={{
                    background: "oklch(0.65 0.18 45 / 0.9)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  ⏱️ {dest.duration}
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display font-bold text-xl text-white leading-tight mb-0.5">
                    {dest.name}
                  </h3>
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: "oklch(0.72 0.17 60)" }}
                  >
                    {dest.tagline}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {dest.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full text-white/80"
                        style={{
                          background: "oklch(1 0 0 / 0.12)",
                          border: "1px solid oklch(1 0 0 / 0.2)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover description */}
                  <p className="text-xs text-white/70 leading-relaxed mb-3 hidden group-hover:block">
                    {dest.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/60 font-medium">
                      📍 {dest.distance}
                    </span>
                    <button
                      type="button"
                      data-ocid="destinations.primary_button"
                      onClick={scrollToContact}
                      className="text-xs font-bold px-3 py-1.5 rounded-lg transition-all hover:scale-105"
                      style={{
                        background: "oklch(0.65 0.18 45)",
                        color: "white",
                      }}
                    >
                      Explore →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-muted-foreground mb-4">
            Can't find your destination? We cover all of India!
          </p>
          <button
            type="button"
            data-ocid="destinations.secondary_button"
            onClick={scrollToContact}
            className="btn-primary"
          >
            Request Custom Tour
          </button>
        </div>
      </div>
    </section>
  );
}
