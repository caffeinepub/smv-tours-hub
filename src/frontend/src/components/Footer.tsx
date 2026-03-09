const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Fleet", href: "#fleet" },
  { label: "Destinations", href: "#destinations" },
  { label: "Why Choose Us", href: "#about" },
  { label: "Book Now", href: "#contact" },
];

const destinations = [
  "Agra & Taj Mahal",
  "Ladakh & Leh",
  "Kerala Backwaters",
  "Goa Beaches",
  "Rajasthan Heritage",
  "Char Dham Yatra",
];

export function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="section-dark relative overflow-hidden">
      {/* Decorative top border */}
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.65 0.18 45), oklch(0.72 0.17 60), oklch(0.65 0.18 45))",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/assets/generated/smv-logo-transparent.dim_300x300.png"
                alt="SMV Tours Hub"
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="font-display font-bold text-xl text-white leading-tight">
                  SMV Tours Hub
                </div>
                <div
                  className="text-xs font-medium tracking-widest uppercase"
                  style={{ color: "oklch(0.65 0.18 45)" }}
                >
                  All India Travel
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "oklch(0.7 0.02 85 / 0.7)" }}
            >
              Your trusted travel partner for premium tours across India.
              4-Wheelers, Tempo Travellers, and unforgettable journeys.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { label: "WhatsApp", icon: "💬" },
                { label: "Instagram", icon: "📷" },
                { label: "Facebook", icon: "👍" },
                { label: "YouTube", icon: "▶️" },
              ].map((social) => (
                <button
                  key={social.label}
                  type="button"
                  data-ocid="footer.button"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110 text-sm"
                  style={{
                    background: "oklch(1 0 0 / 0.08)",
                    border: "1px solid oklch(1 0 0 / 0.12)",
                  }}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    data-ocid="footer.link"
                    onClick={() => scrollTo(link.href)}
                    className="text-sm font-medium transition-colors hover:text-white cursor-pointer text-left"
                    style={{ color: "oklch(0.7 0.02 85 / 0.65)" }}
                  >
                    <span
                      className="mr-2 inline-block transition-transform hover:translate-x-1"
                      style={{ color: "oklch(0.65 0.18 45)" }}
                    >
                      →
                    </span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5">
              Popular Destinations
            </h4>
            <ul className="space-y-3">
              {destinations.map((dest) => (
                <li key={dest}>
                  <button
                    type="button"
                    data-ocid="footer.link"
                    onClick={() => scrollTo("#destinations")}
                    className="text-sm font-medium transition-colors hover:text-white cursor-pointer text-left"
                    style={{ color: "oklch(0.7 0.02 85 / 0.65)" }}
                  >
                    <span
                      className="mr-2"
                      style={{ color: "oklch(0.65 0.18 45)" }}
                    >
                      📍
                    </span>
                    {dest}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <div className="space-y-4">
              {[
                {
                  icon: "📱",
                  label: "+91 98765 43210",
                  sub: "Call / WhatsApp",
                },
                { icon: "📧", label: "info@smvtourshub.com", sub: "Email Us" },
                { icon: "📍", label: "Mumbai, Maharashtra", sub: "India" },
                {
                  icon: "⏰",
                  label: "Mon – Sun: 6AM – 11PM",
                  sub: "Support Hours",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-base mt-0.5 flex-shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <div className="text-sm font-medium text-white/80">
                      {item.label}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(0.6 0.02 85 / 0.6)" }}
                    >
                      {item.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-5 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "oklch(1 0 0 / 0.08)" }}
        >
          <p
            className="text-sm"
            style={{ color: "oklch(0.65 0.02 85 / 0.55)" }}
          >
            © {year} SMV Tours Hub. All Rights Reserved.
          </p>
          <p
            className="text-sm"
            style={{ color: "oklch(0.65 0.02 85 / 0.55)" }}
          >
            Built with <span style={{ color: "oklch(0.65 0.18 45)" }}>♥</span>{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
              style={{ color: "oklch(0.65 0.02 85 / 0.55)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
