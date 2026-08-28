"use client";

import { spots } from "../data/spots";

function SpotCard({ spot }: { spot: (typeof spots)[0] }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid var(--border)",
        borderRadius: "14px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        boxShadow: "var(--card-shadow)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--card-shadow-hover)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--card-shadow)";
      }}
    >
      {/* Top row: label + availability badge */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "12px",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "4px",
            }}
          >
            {spot.view} · {spot.price === 250 ? "Torso" : "Leg"}
          </p>
          <h3
            style={{
              fontSize: "17px",
              fontWeight: 700,
              color: "var(--foreground)",
              letterSpacing: "-0.01em",
            }}
          >
            {spot.label}
          </h3>
        </div>
        <span
          style={{
            flexShrink: 0,
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "4px 10px",
            borderRadius: "100px",
            fontSize: "12px",
            fontWeight: 500,
            backgroundColor: spot.available
              ? "var(--badge-available)"
              : "var(--badge-taken)",
            color: spot.available
              ? "var(--badge-available-text)"
              : "var(--badge-taken-text)",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: spot.available ? "#22c55e" : "#ef4444",
              display: "inline-block",
            }}
          />
          {spot.available ? "Available" : "Taken"}
        </span>
      </div>

      {/* Description */}
      <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.55 }}>
        {spot.description}
      </p>

      {/* Price + CTA */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "auto",
          paddingTop: "12px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "24px",
              fontWeight: 800,
              color: "var(--foreground)",
              letterSpacing: "-0.03em",
            }}
          >
            €{spot.price}
          </span>
          <span style={{ fontSize: "13px", color: "var(--muted)", marginLeft: "4px" }}>
            / month
          </span>
        </div>
        <a
          href={spot.available ? spot.stripeLink : undefined}
          id={`buy-spot-${spot.id}`}
          aria-disabled={!spot.available}
          style={{
            backgroundColor: spot.available ? "var(--foreground)" : "#e5e7eb",
            color: spot.available ? "#ffffff" : "var(--muted)",
            padding: "10px 18px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 600,
            textDecoration: "none",
            cursor: spot.available ? "pointer" : "not-allowed",
            transition: "background-color 0.15s ease, transform 0.1s ease",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
          onMouseEnter={(e) => {
            if (!spot.available) return;
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#333";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            if (!spot.available) return;
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "var(--foreground)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          }}
        >
          {spot.available ? "Buy now →" : "Taken"}
        </a>
      </div>
    </div>
  );
}

export default function Spots() {
  const torsoSpots = spots.filter((s) => s.price === 250);
  const legSpots = spots.filter((s) => s.price === 125);

  return (
    <section
      id="spots"
      style={{
        padding: "100px 24px",
        backgroundColor: "var(--background)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "var(--foreground)",
              marginBottom: "12px",
              letterSpacing: "-0.03em",
            }}
          >
            Pick your spot on the outfit.
          </h2>
          <p style={{ fontSize: "17px", color: "var(--muted)", maxWidth: "500px" }}>
            Six placement zones. Two price tiers. All guaranteed to be seen every session.
          </p>
        </div>

        {/* Torso spots */}
        <div style={{ marginBottom: "48px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              Torso — €250/mo
            </h3>
            <div
              style={{
                flex: 1,
                height: "1px",
                backgroundColor: "var(--border)",
              }}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "16px",
            }}
          >
            {torsoSpots.map((spot) => (
              <SpotCard key={spot.id} spot={spot} />
            ))}
          </div>
        </div>

        {/* Leg spots */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              Legs — €125/mo
            </h3>
            <div
              style={{
                flex: 1,
                height: "1px",
                backgroundColor: "var(--border)",
              }}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
            }}
          >
            {legSpots.map((spot) => (
              <SpotCard key={spot.id} spot={spot} />
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p
          style={{
            marginTop: "40px",
            fontSize: "13px",
            color: "var(--muted)",
            textAlign: "center",
          }}
        >
          All spots are month-to-month. Cancel anytime. Secure checkout via Stripe.
        </p>
      </div>
    </section>
  );
}
