import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Destinations", href: "#destinations" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-ocid="nav.panel"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "navbar-scrolled" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <button
            type="button"
            data-ocid="nav.link"
            onClick={() => handleLinkClick("#home")}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "oklch(0.65 0.18 45)" }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
              </svg>
            </div>
            <div>
              <span className="block text-white font-display font-800 text-xl leading-tight tracking-tight">
                SMV Tours Hub
              </span>
              <span
                className="block text-xs font-medium tracking-widest uppercase"
                style={{ color: "oklch(0.72 0.17 60)" }}
              >
                All India Travel
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  data-ocid="nav.link"
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 rounded-lg cursor-pointer ${
                    activeSection === link.href.replace("#", "")
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace("#", "") && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "oklch(0.65 0.18 45)" }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Book Now CTA */}
          <button
            type="button"
            data-ocid="nav.primary_button"
            onClick={() => handleLinkClick("#contact")}
            className="hidden lg:flex btn-primary text-sm py-2.5 px-5"
          >
            <span>Book Now</span>
            <svg
              className="w-4 h-4"
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

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            data-ocid="nav.toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: "oklch(0.14 0.03 250 / 0.98)",
          backdropFilter: "blur(20px)",
        }}
      >
        <ul className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                data-ocid="nav.link"
                onClick={() => handleLinkClick(link.href)}
                className="w-full text-left px-4 py-3 text-white/80 hover:text-white text-base font-semibold rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <button
              type="button"
              data-ocid="nav.primary_button"
              onClick={() => handleLinkClick("#contact")}
              className="w-full btn-primary text-center justify-center"
            >
              Book Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
