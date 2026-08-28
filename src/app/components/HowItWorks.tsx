const STEPS = [
  {
    number: "01",
    emoji: "🎯",
    title: "Pick your spot",
    description:
      "Browse the 6 available zones on the outfit — torso or legs — and choose where you want your brand to appear. Each spot is exclusive; only one brand per zone.",
  },
  {
    number: "02",
    emoji: "📁",
    title: "Send your logo",
    description:
      "Once your payment is confirmed, send me your logo as a high-resolution PNG or SVG. I'll handle everything: printing, placement, and making it look great.",
  },
  {
    number: "03",
    emoji: "💪",
    title: "Get seen at the gym",
    description:
      "Your brand is worn 5 sessions a week at Aqua Sport Clubs, Vilanova i la Geltrú — a premium gym near Barcelona. Real exposure, real people, every single day.",
  },
];

export default function HowItWorks() {
  return (
    <section
      style={{
        padding: "100px 24px",
        backgroundColor: "#fafafa",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: "var(--foreground)",
            marginBottom: "56px",
            letterSpacing: "-0.03em",
          }}
        >
          How it works.
        </h2>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {STEPS.map((step) => (
            <div key={step.number} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Step number */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: "var(--foreground)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  flexShrink: 0,
                }}
              >
                {step.number}
              </div>

              {/* Content */}
              <div>
                <h3
                  style={{
                    fontSize: "19px",
                    fontWeight: 700,
                    color: "var(--foreground)",
                    marginBottom: "10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.emoji} {step.title}
                </h3>
                <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.65 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
