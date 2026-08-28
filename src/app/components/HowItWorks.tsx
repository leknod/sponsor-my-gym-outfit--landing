const STEPS = [
  {
    number: "01",
    emoji: "🎯",
    title: "Pick your spot",
    description:
      "Choose one of 6 exclusive spots. One brand per zone.",
  },
  {
    number: "02",
    emoji: "📁",
    title: "Send your logo",
    description:
      "Send your logo. I handle the printing and placement.",
  },
  {
    number: "03",
    emoji: "💪",
    title: "Get seen at the gym",
    description:
      "Your logo gets worn 4x a week at a premium gym. Real people, real exposure.",
  },
];

export default function HowItWorks() {
  return (
    <section
      style={{
        padding: "100px 24px",
        backgroundColor: "var(--background)",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
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
          How it works
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
