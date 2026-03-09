import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    avatar: "RS",
    trip: "Family Trip to Goa",
    review:
      "Absolutely wonderful experience! The Innova was spotless, the driver was very professional and knew all the best scenic routes. Our family trip to Goa was made truly memorable by SMV Tours Hub. Will definitely book again!",
  },
  {
    name: "Priya Menon",
    location: "Bangalore, Karnataka",
    rating: 5,
    avatar: "PM",
    trip: "Ladakh Adventure Tour",
    review:
      "Booked a Tempo Traveller for our 14-member group to Ladakh. The vehicle was perfectly maintained for high-altitude terrain. The driver's local knowledge was invaluable. Couldn't have asked for a better travel partner!",
  },
  {
    name: "Amit Gupta",
    location: "Delhi, NCR",
    rating: 5,
    avatar: "AG",
    trip: "Char Dham Yatra",
    review:
      "SMV Tours Hub made our Char Dham pilgrimage deeply comfortable and safe. The driver was patient, respectful, and helped us at every temple. 24/7 support meant we never felt stranded. Highly recommend!",
  },
  {
    name: "Sunita Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    avatar: "SP",
    trip: "Kerala Backwaters Tour",
    review:
      "The entire Kerala trip was organized flawlessly. Clean AC vehicle, on-time pickup, and a driver who was more like a local guide. We saw hidden gems we would have missed otherwise. Truly 5-star service!",
  },
  {
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
    rating: 5,
    avatar: "VS",
    trip: "Corporate Team Outing",
    review:
      "Used SMV Tours Hub for our team of 20 people for an outstation conference. Two Tempo Travellers, perfectly coordinated, on time, professional. The corporate booking process was smooth and hassle-free.",
  },
];

const STAR_INDEXES = [0, 1, 2, 3, 4] as const;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {STAR_INDEXES.map((i) => (
        <svg
          key={i}
          className="w-4 h-4"
          style={{
            color: i < rating ? "oklch(0.72 0.17 60)" : "oklch(0.4 0 0)",
          }}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(nextTestimonial, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlay, nextTestimonial]);

  return (
    <section
      data-ocid="testimonials.section"
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.97 0.015 75)" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.18 45) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="section-label justify-center">
            <span style={{ color: "oklch(0.65 0.18 45)" }}>
              Customer Stories
            </span>
          </div>
          <h2 className="section-heading">
            What Our Travelers
            <br />
            <span className="gradient-text">Say About Us</span>
          </h2>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-3xl p-8 md:p-10 relative"
            style={{
              background: "white",
              boxShadow: "0 20px 60px oklch(0.18 0.02 250 / 0.1)",
              border: "1px solid oklch(0.9 0.01 85)",
            }}
          >
            {/* Quote icon */}
            <div
              className="absolute -top-5 left-10 w-10 h-10 rounded-full flex items-center justify-center text-2xl"
              style={{ background: "oklch(0.65 0.18 45)", color: "white" }}
            >
              "
            </div>

            {/* Review */}
            <p
              className="text-lg leading-relaxed mb-8 italic"
              style={{
                color: "oklch(0.3 0.02 250)",
                fontWeight: 500,
              }}
            >
              {testimonials[activeIndex].review}
            </p>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.65 0.18 45), oklch(0.52 0.2 35))",
                  }}
                >
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <div
                    className="font-display font-bold text-base"
                    style={{ color: "oklch(0.18 0.02 250)" }}
                  >
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].location}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <StarRating rating={testimonials[activeIndex].rating} />
                <span
                  className="text-xs font-semibold"
                  style={{ color: "oklch(0.65 0.18 45)" }}
                >
                  {testimonials[activeIndex].trip}
                </span>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                data-ocid="testimonials.toggle"
                className={`testimonial-dot ${i === activeIndex ? "active" : ""}`}
                onClick={() => {
                  setActiveIndex(i);
                  setIsAutoPlay(false);
                  setTimeout(() => setIsAutoPlay(true), 10000);
                }}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Prev/Next */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              type="button"
              data-ocid="testimonials.pagination_prev"
              onClick={() => {
                setActiveIndex(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length,
                );
                setIsAutoPlay(false);
                setTimeout(() => setIsAutoPlay(true), 10000);
              }}
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:scale-105"
              style={{
                borderColor: "oklch(0.88 0.015 85)",
                color: "oklch(0.45 0.02 250)",
              }}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              type="button"
              data-ocid="testimonials.pagination_next"
              onClick={() => {
                nextTestimonial();
                setIsAutoPlay(false);
                setTimeout(() => setIsAutoPlay(true), 10000);
              }}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-105"
              style={{ background: "oklch(0.65 0.18 45)" }}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        {/* Mini testimonial previews */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-12">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              data-ocid="testimonials.toggle"
              onClick={() => {
                setActiveIndex(i);
                setIsAutoPlay(false);
                setTimeout(() => setIsAutoPlay(true), 10000);
              }}
              className={`p-3 rounded-xl text-left transition-all cursor-pointer ${
                i === activeIndex ? "ring-2" : "hover:bg-white/50"
              }`}
              style={{
                background: i === activeIndex ? "white" : "oklch(0.93 0.01 85)",
                boxShadow:
                  i === activeIndex
                    ? "0 4px 20px oklch(0.65 0.18 45 / 0.15)"
                    : "none",
                border:
                  i === activeIndex
                    ? "2px solid oklch(0.65 0.18 45)"
                    : "2px solid transparent",
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white mb-2"
                style={{
                  background:
                    i === activeIndex
                      ? "oklch(0.65 0.18 45)"
                      : "oklch(0.55 0.02 250)",
                }}
              >
                {t.avatar}
              </div>
              <div
                className="text-xs font-bold truncate"
                style={{ color: "oklch(0.25 0.02 250)" }}
              >
                {t.name.split(" ")[0]}
              </div>
              <div className="flex gap-0.5 mt-1" aria-label="5 stars">
                {STAR_INDEXES.map((si) => (
                  <div
                    key={si}
                    className="w-2 h-2"
                    style={{
                      background: "oklch(0.72 0.17 60)",
                      clipPath:
                        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                    }}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
