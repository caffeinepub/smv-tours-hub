const services = [
  {
    icon: "🛣️",
    title: "Outstation Trips",
    description:
      "Comfortable one-way and round-trip outstation travel to any city in India with experienced drivers.",
    features: ["GPS Tracked", "24/7 Support", "Flexible Stops"],
  },
  {
    icon: "🏔️",
    title: "Hill Station Tours",
    description:
      "Explore the majestic Himalayas, Western Ghats & Nilgiris in our premium vehicles built for mountain terrain.",
    features: [
      "Mountain Terrain Vehicles",
      "Scenic Routes",
      "Professional Drivers",
    ],
  },
  {
    icon: "🛕",
    title: "Religious Yatras",
    description:
      "Sacred pilgrimages to Char Dham, Vaishno Devi, Tirupati & all major religious sites across India.",
    features: ["All Sacred Sites", "Group Discounts", "Special Arrangements"],
  },
  {
    icon: "💼",
    title: "Corporate Travel",
    description:
      "Reliable, punctual corporate travel solutions for meetings, events, and employee transportation.",
    features: ["Punctual Service", "Bulk Booking", "Invoice Support"],
  },
  {
    icon: "✈️",
    title: "Airport Transfers",
    description:
      "Stress-free airport pickups and drops across all major airports in India, 24 hours a day.",
    features: ["Flight Tracking", "Meet & Greet", "All Airports"],
  },
  {
    icon: "🌴",
    title: "Weekend Getaways",
    description:
      "Refreshing weekend escapes to beaches, forests, hills and heritage sites near your city.",
    features: ["Custom Packages", "Hotel Tie-ups", "Guided Tours"],
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      data-ocid="services.section"
      className="py-24 section-warm relative overflow-hidden"
    >
      {/* Decorative background */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.17 60 / 0.3) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="section-label justify-center">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Our Services
          </div>
          <h2 className="section-heading">
            Everything You Need
            <br />
            <span className="gradient-text">For Perfect Travel</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            From solo adventures to large group tours, we have a perfect travel
            solution for every journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-ocid={`services.item.${index + 1}`}
              className={`service-card animate-${index % 2 === 0 ? "slide-left" : "slide-right"}`}
              style={{ transitionDelay: `${(index % 3) * 120}ms` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3
                className="font-display font-bold text-xl mb-3"
                style={{ color: "oklch(0.18 0.02 250)" }}
              >
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: "oklch(0.65 0.18 45 / 0.1)",
                      color: "oklch(0.52 0.18 40)",
                      border: "1px solid oklch(0.65 0.18 45 / 0.2)",
                    }}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
