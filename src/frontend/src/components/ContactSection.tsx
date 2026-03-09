import { useState } from "react";
import { useSubmitInquiry } from "../hooks/useQueries";

interface FormData {
  name: string;
  phone: string;
  email: string;
  destination: string;
  travelDate: string;
  numPassengers: string;
  vehicleType: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  destination: "",
  travelDate: "",
  numPassengers: "",
  vehicleType: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const { mutate: submitInquiry, isPending, isError } = useSubmitInquiry();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitInquiry(
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        destination: form.destination,
        travelDate: form.travelDate,
        numPassengers: BigInt(Number.parseInt(form.numPassengers) || 1),
        vehicleType: form.vehicleType,
        message: form.message,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm(initialForm);
        },
      },
    );
  };

  const contactCards = [
    {
      icon: "👨\u200d💼",
      label: "Founded By",
      value: "Mr. Yashwanth Kumar",
      sub: "Serving with pride since 16 years",
      isFounder: true,
    },
    {
      icon: "📱",
      label: "Yashwanth Kumar",
      value: "+91 99729 79045 / +91 87626 80991",
      sub: "Call / WhatsApp",
      isFounder: false,
    },
    {
      icon: "📞",
      label: "Ravikumar",
      value: "+91 63636 01311",
      sub: "Call / WhatsApp",
      isFounder: false,
    },
    {
      icon: "📧",
      label: "Email Us",
      value: "info@smvtourshub.com",
      sub: "Response within 2 hours",
      isFounder: false,
    },
    {
      icon: "📍",
      label: "Our Office",
      value: "Hassan, Karnataka, India",
      sub: "Hassan District, Karnataka",
      isFounder: false,
    },
  ];

  return (
    <section
      id="contact"
      data-ocid="booking.section"
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.97 0.015 75) 0%, oklch(0.98 0.005 85) 100%)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, oklch(0.65 0.18 45 / 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div className="animate-slide-left">
            <div className="section-label">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Get In Touch
            </div>
            <h2 className="section-heading mb-6">
              Book Your
              <br />
              <span className="gradient-text">Dream Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Fill out the form and our travel experts will get back to you
              within 2 hours with the best package tailored to your needs.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactCards.map((item) =>
                item.isFounder ? (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.99 0.025 85) 0%, oklch(0.97 0.04 70) 100%)",
                      border: "1.5px solid oklch(0.78 0.13 60)",
                      boxShadow:
                        "0 4px 16px oklch(0.65 0.18 45 / 0.12), inset 0 1px 0 oklch(1 0 0 / 0.6)",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.78 0.13 60 / 0.25) 0%, oklch(0.65 0.18 45 / 0.15) 100%)",
                        border: "1px solid oklch(0.78 0.13 60 / 0.4)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div
                        className="text-xs font-bold uppercase tracking-wider mb-0.5"
                        style={{ color: "oklch(0.55 0.15 55)" }}
                      >
                        {item.label}
                      </div>
                      <div
                        className="font-display font-bold text-lg leading-tight"
                        style={{ color: "oklch(0.22 0.06 45)" }}
                      >
                        {item.value}
                      </div>
                      <div
                        className="text-xs font-medium mt-0.5"
                        style={{ color: "oklch(0.55 0.12 55)" }}
                      >
                        ✦ {item.sub}
                      </div>
                    </div>
                    {/* Founder badge */}
                    <div
                      className="flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider self-start"
                      style={{
                        background: "oklch(0.65 0.18 45)",
                        color: "white",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Founder
                    </div>
                  </div>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 rounded-xl"
                    style={{
                      background: "white",
                      border: "1px solid oklch(0.9 0.01 85)",
                      boxShadow: "0 2px 12px oklch(0.18 0.02 250 / 0.04)",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{
                        background: "oklch(0.65 0.18 45 / 0.1)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-0.5">
                        {item.label}
                      </div>
                      <div
                        className="font-display font-bold"
                        style={{ color: "oklch(0.18 0.02 250)" }}
                      >
                        {item.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Right: Form */}
          <div className="animate-slide-right">
            <div
              className="rounded-3xl p-8"
              style={{
                background: "white",
                boxShadow: "0 20px 60px oklch(0.18 0.02 250 / 0.1)",
                border: "1px solid oklch(0.9 0.01 85)",
              }}
            >
              {submitted ? (
                <div
                  data-ocid="booking.success_state"
                  className="text-center py-12"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6"
                    style={{
                      background: "oklch(0.65 0.18 45 / 0.1)",
                      border: "2px solid oklch(0.65 0.18 45 / 0.3)",
                    }}
                  >
                    ✅
                  </div>
                  <h3
                    className="font-display font-bold text-2xl mb-3"
                    style={{ color: "oklch(0.18 0.02 250)" }}
                  >
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Thank you! Our team will contact you within 2 hours.
                  </p>
                  <p className="text-sm text-muted-foreground mb-8">
                    Check your email for confirmation details.
                  </p>
                  <button
                    type="button"
                    data-ocid="booking.secondary_button"
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <>
                  <h3
                    className="font-display font-bold text-2xl mb-6"
                    style={{ color: "oklch(0.18 0.02 250)" }}
                  >
                    Send Us Your Inquiry
                  </h3>

                  {isError && (
                    <div
                      data-ocid="booking.error_state"
                      className="mb-4 p-4 rounded-xl text-sm font-medium"
                      style={{
                        background: "oklch(0.95 0.05 27)",
                        color: "oklch(0.45 0.15 25)",
                        border: "1px solid oklch(0.85 0.1 27)",
                      }}
                    >
                      ⚠️ Something went wrong. Please try again.
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="field-name"
                          className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-muted-foreground"
                        >
                          Full Name *
                        </label>
                        <input
                          id="field-name"
                          data-ocid="booking.input"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="field-phone"
                          className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-muted-foreground"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="field-phone"
                          data-ocid="booking.input"
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          required
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="field-email"
                        className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-muted-foreground"
                      >
                        Email Address
                      </label>
                      <input
                        id="field-email"
                        data-ocid="booking.input"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="form-input"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="field-destination"
                          className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-muted-foreground"
                        >
                          Destination *
                        </label>
                        <input
                          id="field-destination"
                          data-ocid="booking.input"
                          type="text"
                          name="destination"
                          value={form.destination}
                          onChange={handleChange}
                          placeholder="E.g. Goa, Ladakh, Agra"
                          required
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="field-date"
                          className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-muted-foreground"
                        >
                          Travel Date *
                        </label>
                        <input
                          id="field-date"
                          data-ocid="booking.input"
                          type="date"
                          name="travelDate"
                          value={form.travelDate}
                          onChange={handleChange}
                          required
                          className="form-input"
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="field-passengers"
                          className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-muted-foreground"
                        >
                          Passengers *
                        </label>
                        <input
                          id="field-passengers"
                          data-ocid="booking.input"
                          type="number"
                          name="numPassengers"
                          value={form.numPassengers}
                          onChange={handleChange}
                          placeholder="1"
                          min="1"
                          max="50"
                          required
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="field-vehicle"
                          className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-muted-foreground"
                        >
                          Vehicle Type *
                        </label>
                        <select
                          id="field-vehicle"
                          data-ocid="booking.select"
                          name="vehicleType"
                          value={form.vehicleType}
                          onChange={handleChange}
                          required
                          className="form-input"
                        >
                          <option value="">Select vehicle</option>
                          <option value="4-Wheeler">
                            4-Wheeler (Innova/Ertiga)
                          </option>
                          <option value="Tempo Traveller">
                            Tempo Traveller (9-17 Seater)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="field-message"
                        className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-muted-foreground"
                      >
                        Message / Special Requirements
                      </label>
                      <textarea
                        id="field-message"
                        data-ocid="booking.textarea"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your trip, any special needs, return date, etc."
                        rows={3}
                        className="form-input resize-none"
                      />
                    </div>

                    <button
                      data-ocid="booking.submit_button"
                      type="submit"
                      disabled={isPending}
                      className="btn-primary w-full justify-center text-base py-4"
                      style={{ opacity: isPending ? 0.8 : 1 }}
                    >
                      {isPending ? (
                        <>
                          <svg
                            className="w-5 h-5 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Sending Inquiry...
                        </>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
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
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      🔒 Your information is secure. We respect your privacy.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
