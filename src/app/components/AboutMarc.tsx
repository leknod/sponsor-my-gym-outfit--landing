"use client";

export default function AboutMarc() {
  return (
    <section
      style={{
        padding: "80px 24px",
        backgroundColor: "var(--background)",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <div
          style={{
            backgroundColor: "#EAEAEF",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            borderRadius: "20px",
            padding: "clamp(32px, 5vw, 48px)",
            maxWidth: "760px",
          }}
        >

          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 36px)",
              fontWeight: 800,
              color: "var(--foreground)",
              marginBottom: "20px",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            Hi, I&apos;m Marc.
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "var(--muted)",
              lineHeight: 1.75,
              marginBottom: "16px",
            }}
          >
            I've been training for years and I'm genuinely one of those people who actually enjoys going to the gym. I train 4 times a week and have built it into my routine long-term.

            It's one of the few things I never really get tired of.
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "var(--muted)",
              lineHeight: 1.75,
              marginBottom: "28px",
            }}
          >
            I started this as an experiment: turning a routine I already love into a sponsorship opportunity and seeing if startups in fitness, health, sports, and wellness would find value in reaching a relevant audience.
          </p>

          <a
            href="https://x.com/Leknod"
            target="_blank"
            rel="noopener noreferrer"
            id="about-marc-twitter"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "var(--foreground)",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "100px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "opacity 0.15s ease, transform 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            <span>@Leknod on X</span>
            <span style={{ fontSize: "12px" }}>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
