"use client";

import Image from "next/image";
import { useState } from "react";
import { spots } from "../data/spots";

const SECTION = {
  padding: "80px 24px 0",
  maxWidth: "1100px",
  margin: "0 auto",
};

export default function Hero() {
  const [activeView, setActiveView] = useState<"front" | "back">("front");

  const frontSpots = spots.filter((s) => s.view === "front");
  const backSpots = spots.filter((s) => s.view === "back");
  const visibleSpots = activeView === "front" ? frontSpots : backSpots;

  return (
    <section
      style={{
        paddingTop: "100px",
        paddingBottom: "80px",
        background: "var(--background)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        {/* Badge */}
        <div
          className="animate-fade-in-up"
          style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "#f0fdf4",
              color: "#166534",
              border: "1px solid #bbf7d0",
              borderRadius: "100px",
              padding: "6px 14px",
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: "#22c55e",
                animation: "pulse-soft 2s ease-in-out infinite",
                display: "inline-block",
              }}
            />
            6 spots available — be the first sponsor
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-in-up delay-100"
          style={{
            textAlign: "center",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 800,
            color: "var(--foreground)",
            maxWidth: "700px",
            margin: "0 auto 20px",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Put your brand on my gym outfit.
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-in-up delay-200"
          style={{
            textAlign: "center",
            fontSize: "18px",
            color: "var(--muted)",
            maxWidth: "560px",
            margin: "0 auto 36px",
            lineHeight: 1.65,
          }}
        >
          I train 5× a week at{" "}
          <strong style={{ color: "var(--foreground)", fontWeight: 600 }}>
            Aqua Sport Clubs
          </strong>
          , a premium gym in Vilanova i la Geltrú, near Barcelona. Your logo goes on my
          outfit — seen by every member, every session.
        </p>

        {/* CTA */}
        <div
          className="animate-fade-in-up delay-300"
          style={{ display: "flex", justifyContent: "center", marginBottom: "64px" }}
        >
          <a
            href="#spots"
            id="hero-cta"
            style={{
              backgroundColor: "var(--foreground)",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background-color 0.15s ease, transform 0.15s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#333";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "var(--foreground)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            See available spots ↓
          </a>
        </div>

        {/* Outfit viewer */}
        <div
          className="animate-fade-in-up delay-400"
          style={{
            backgroundColor: "#f8f9fb",
            borderRadius: "24px",
            border: "1px solid var(--border)",
            padding: "40px 32px",
            maxWidth: "760px",
            margin: "0 auto",
          }}
        >
          {/* View toggle */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "32px",
            }}
          >
            {(["front", "back"] as const).map((view) => (
              <button
                key={view}
                id={`view-toggle-${view}`}
                onClick={() => setActiveView(view)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "8px",
                  border: "1px solid",
                  borderColor: activeView === view ? "var(--foreground)" : "var(--border)",
                  backgroundColor: activeView === view ? "var(--foreground)" : "#ffffff",
                  color: activeView === view ? "#ffffff" : "var(--muted)",
                  fontWeight: 500,
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  fontFamily: "inherit",
                  textTransform: "capitalize",
                }}
              >
                {view} view
              </button>
            ))}
          </div>

          {/* Image + hotspots */}
          <div
            style={{
              position: "relative",
              maxWidth: "340px",
              margin: "0 auto",
            }}
          >
            <Image
              src={activeView === "front" ? "/outfit-front.jpg" : "/outfit-back.jpg"}
              alt={`Gym outfit ${activeView} view with ad spots marked`}
              width={680}
              height={1020}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "12px",
              }}
              priority
            />

            {/* Hotspot overlays */}
            {visibleSpots.map((spot) => (
              <a
                key={spot.id}
                href={spot.stripeLink}
                id={`hotspot-${spot.id}`}
                aria-label={`Buy ${spot.label} spot — €${spot.price}/mo`}
                title={`${spot.label} — €${spot.price}/mo`}
                style={{
                  position: "absolute",
                  top: spot.hotspot.top,
                  left: spot.hotspot.left,
                  transform: "translate(-50%, -50%)",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  backgroundColor: "var(--foreground)",
                  border: "3px solid #ffffff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "transform 0.2s ease, background-color 0.2s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  animation: "hotspot-pulse 2.5s ease-out infinite",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "translate(-50%, -50%) scale(1.3)";
                  el.style.backgroundColor = "#333";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "translate(-50%, -50%) scale(1)";
                  el.style.backgroundColor = "var(--foreground)";
                }}
              >
                €
              </a>
            ))}
          </div>

          {/* Legend */}
          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontSize: "13px",
              color: "var(--muted)",
            }}
          >
            Click a{" "}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                backgroundColor: "var(--foreground)",
                color: "#fff",
                fontSize: "9px",
                fontWeight: 700,
                verticalAlign: "middle",
                margin: "0 2px",
              }}
            >
              €
            </span>{" "}
            marker to claim that spot
          </p>
        </div>
      </div>
    </section>
  );
}
