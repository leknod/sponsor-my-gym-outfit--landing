"use client";

export default function AboutMarc() {
  return (
    <section
      style={{
        padding: "100px 24px",
        backgroundColor: "var(--background)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            backgroundColor: "#111111",
            borderRadius: "20px",
            padding: "clamp(32px, 5vw, 56px)",
            color: "#ffffff",
            maxWidth: "760px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              marginBottom: "20px",
            }}
          >
            About your ad carrier
          </p>

          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 38px)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "24px",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            Hi, I&apos;m Marc.
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.75,
              marginBottom: "16px",
            }}
          >
            I train at{" "}
            <span style={{ color: "#ffffff", fontWeight: 600 }}>Aqua Sport Clubs</span> in
            Vilanova i la Geltrú five times a week, without fail. It&apos;s a premium gym, and
            the members are exactly the kind of people you want to reach — local professionals,
            entrepreneurs, and health-focused individuals on the Barcelona coast.
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.75,
              marginBottom: "32px",
            }}
          >
            I came up with this idea because I wanted to try something different: turning my
            daily gym sessions into a real sponsorship opportunity. If you&apos;re a local
            business or brand looking for an affordable, eye-catching way to get noticed — this
            is it.
          </p>

          <a
            href="#spots"
            id="about-marc-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#ffffff",
              color: "#111111",
              padding: "12px 22px",
              borderRadius: "9px",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
              transition: "background-color 0.15s ease, transform 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#f0f0f0";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#ffffff";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            See available spots →
          </a>
        </div>
      </div>
    </section>
  );
}
