"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--background)",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: "14px",
            color: "var(--foreground)",
            letterSpacing: "-0.01em",
          }}
        >
          Sponsor My Gym Outfit
        </span>

        <p style={{ fontSize: "13px", color: "var(--muted)" }}>
          © {new Date().getFullYear()} Marc · Vilanova i la Geltrú, Barcelona
        </p>

        <a
          href="#spots"
          id="footer-cta"
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--foreground)",
            textDecoration: "none",
            borderBottom: "1px solid var(--foreground)",
            paddingBottom: "1px",
            transition: "opacity 0.15s ease",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.6")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
          }
        >
          See available spots →
        </a>
      </div>
    </footer>
  );
}
