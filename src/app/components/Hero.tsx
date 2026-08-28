"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { spots } from "../data/spots";

const SECTION = {
  padding: "80px 24px 0",
  maxWidth: "760px",
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
        paddingTop: "48px",
        paddingBottom: "80px",
        background: "var(--background)",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px" }}>
        {/* Badge */}
        <div
          className="animate-fade-in-up"
          style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0",
              backgroundColor: "rgba(0, 113, 227, 0.08)",
              color: "#0071e3",
              border: "1px solid rgba(0, 113, 227, 0.2)",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: 500,
              overflow: "hidden",
            }}
          >
            {/* Left: live viewers */}
            <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "6px 14px" }}>
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "#0071e3",
                  animation: "pulse-soft 2s ease-in-out infinite",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span style={{ display: "inline-flex", alignItems: "baseline", gap: "4px" }}>
                <strong style={{ fontWeight: 700, fontSize: "13px" }}>31</strong>
                <span style={{ fontSize: "11px" }}>people are watching</span>
              </span>
            </span>

            {/* Divider */}
            <span style={{ width: "1px", alignSelf: "stretch", backgroundColor: "rgba(0, 113, 227, 0.2)" }} />

            {/* Right: total visits */}
            <span style={{ padding: "6px 14px", display: "inline-flex", alignItems: "baseline", gap: "4px" }}>
              <strong style={{ fontWeight: 700, fontSize: "13px" }}>1,168</strong>
              <span style={{ fontSize: "11px" }}>total visits</span>
            </span>
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
          Put your brand on my gym outfit
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
          I train 4x a week at{" "}
          <strong style={{ color: "var(--foreground)", fontWeight: 600 }}>
            Aqua Sport Clubs
          </strong>
          , a premium gym near Barcelona. Your logo goes on my
          outfit — seen by every member, every session.
        </p>

        {/* Availability indicator */}
        <div
          className="animate-fade-in-up delay-300"
          style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}
        >
          <a
            href="#spots"
            id="hero-availability"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              fontWeight: 300,
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)";
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: "#22c55e",
                display: "inline-block",
                flexShrink: 0,
                animation: "pulse-soft 2s ease-in-out infinite",
              }}
            />
            6 of 6 spots available
          </a>
        </div>

        {/* Outfit viewer */}
        <div
          className="animate-fade-in-up delay-400"
          style={{ maxWidth: "520px", margin: "0 auto", width: "100%", position: "relative" }}
        >
          {/* Image container with absolute floating arrows */}
          <div style={{ position: "relative", width: "100%" }}>
            {/* Left arrow */}
            <button
              id="view-prev"
              onClick={() => setActiveView(activeView === "front" ? "back" : "front")}
              aria-label="Previous view"
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white/90 sm:bg-white shadow-[var(--card-shadow)] backdrop-blur-xs transition-all hover:scale-105 hover:shadow-[var(--card-shadow-hover)] cursor-pointer"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>

            {/* Image + hotspots */}
            <div style={{ position: "relative", width: "100%" }}>
              <Image
                src={activeView === "front" ? "/outfit-front1.png" : "/outfit-back1.png"}
                alt={`Gym outfit ${activeView} view with ad spots marked`}
                width={680}
                height={1020}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />

              {/* Bounding box overlays */}
              {visibleSpots.map((spot) => (
                <a
                  key={spot.id}
                  href={`#buy-spot-${spot.id}`}
                  id={`spot-box-${spot.id}`}
                  aria-label={`${spot.label} spot — €${spot.price}/month`}
                  title={`Claim ${spot.label} — €${spot.price}/month`}
                  style={{
                    position: "absolute",
                    top: spot.box.top,
                    left: spot.box.left,
                    width: spot.box.width,
                    height: spot.box.height,
                    backgroundColor: "rgba(0, 113, 227, 0.08)",
                    border: "1.5px dashed rgba(0, 113, 227, 0.65)",
                    borderRadius: "6px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    textDecoration: "none",
                    padding: "4px",
                    cursor: "pointer",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    backdropFilter: "blur(1px)",
                    WebkitBackdropFilter: "blur(1px)",
                    zIndex: 10,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.backgroundColor = "rgba(0, 113, 227, 0.18)";
                    el.style.borderColor = "#0071e3";
                    el.style.transform = "scale(1.04)";
                    el.style.boxShadow = "0 6px 16px rgba(0, 113, 227, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.backgroundColor = "rgba(0, 113, 227, 0.08)";
                    el.style.borderColor = "rgba(0, 113, 227, 0.65)";
                    el.style.transform = "scale(1)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <span
                    style={{
                      fontSize: "clamp(9px, 1.8vw, 12px)",
                      fontWeight: 700,
                      color: "#1e3a8a",
                      letterSpacing: "0.04em",
                      lineHeight: 1.2,
                      textTransform: "uppercase",
                    }}
                  >
                    {spot.shortLabel}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: "clamp(8px, 1.5vw, 11px)",
                      fontWeight: 600,
                      color: "#0071e3",
                      marginTop: "2px",
                      lineHeight: 1,
                    }}
                  >
                    €{spot.price}/mo
                  </span>
                </a>
              ))}
            </div>

            {/* Right arrow */}
            <button
              id="view-next"
              onClick={() => setActiveView(activeView === "front" ? "back" : "front")}
              aria-label="Next view"
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white/90 sm:bg-white shadow-[var(--card-shadow)] backdrop-blur-xs transition-all hover:scale-105 hover:shadow-[var(--card-shadow-hover)] cursor-pointer"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>

          {/* CTA below silhouette */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "28px" }}>
            <a
              href="#spots"
              id="silhouette-cta"
              className="btn-cta"
              style={{ fontSize: "16px", padding: "13px 28px" }}
            >
              Get a spot
              <ArrowRight size={16} strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
