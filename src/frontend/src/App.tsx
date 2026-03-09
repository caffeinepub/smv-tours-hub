import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import { CharacterGuide } from "./components/CharacterGuide";
import { ContactSection } from "./components/ContactSection";
import { DestinationsSection } from "./components/DestinationsSection";
import { FleetSection } from "./components/FleetSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ServicesSection } from "./components/ServicesSection";
import { StatsSection } from "./components/StatsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export default function App() {
  // Initialize scroll-triggered animations
  useScrollAnimation();

  // Set page title and meta
  useEffect(() => {
    document.title = "SMV Tours Hub - Premium Tours & Travel Across India";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "SMV Tours Hub - Your trusted travel partner for premium tours across India. 4-Wheelers, Tempo Travellers, and unforgettable journeys across all 28 states.",
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navbar - sticky, transparent to dark */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Animated Stats Counter */}
        <StatsSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Fleet Section */}
        <FleetSection />

        {/* Popular Destinations */}
        <DestinationsSection />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Testimonials Carousel */}
        <TestimonialsSection />

        {/* Contact / Booking Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Character Guide — fixed overlay explains each section */}
      <CharacterGuide />

      {/* Toast notifications */}
      <Toaster richColors position="top-right" />
    </div>
  );
}
