"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GYM_PHOTOS = [
  { src: "/gym-1.jpg", alt: "Aqua Sport Clubs — cardio area" },
  { src: "/gym-2.jpg", alt: "Aqua Sport Clubs — weights area" },
  { src: "/gym-3.jpg", alt: "Aqua Sport Clubs — premium facilities" },
  { src: "/gym-4.jpg", alt: "Aqua Sport Clubs — training area" },
  { src: "/gym-5.jpg", alt: "Aqua Sport Clubs — club facilities" },
];

export default function SeenAt() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <section
      style={{
        backgroundColor: "var(--background)",
        padding: "56px 24px",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        {/* Label */}
        <p
          style={{
            textAlign: "center",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "32px",
          }}
        >
          Your brand, seen here every week:
        </p>

        {/* Gym name badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#ffffff",
              border: "1px solid var(--border)",
              borderRadius: "100px",
              padding: "8px 20px",
              boxShadow: "var(--card-shadow)",
            }}
          >
            <span style={{ fontSize: "18px" }}>🏊</span>
            <span
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "var(--foreground)",
              }}
            >
              Aqua Sport Clubs
            </span>
            <span
              style={{
                fontSize: "13px",
                color: "var(--muted)",
                borderLeft: "1px solid var(--border)",
                paddingLeft: "10px",
              }}
            >
              Vilanova i la Geltrú · Barcelona
            </span>
          </div>
        </div>

        {/* Infinite moving carousel */}
        <div
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="animate-marquee" style={{ gap: "16px", padding: "12px 0" }}>
            {[...GYM_PHOTOS, ...GYM_PHOTOS].map((photo, i) => (
              <button
                type="button"
                key={i}
                aria-label={`Open ${photo.alt} in fullscreen`}
                onClick={() => setLightboxIndex(i % GYM_PHOTOS.length)}
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--card-shadow)",
                  width: "260px",
                  height: "165px",
                  position: "relative",
                  flexShrink: 0,
                  cursor: "pointer",
                  padding: 0,
                  background: "transparent",
                  touchAction: "manipulation",
                  WebkitTapHighlightColor: "transparent",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "var(--card-shadow-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "var(--card-shadow)";
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="260px"
                  style={{ objectFit: "cover" }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxIndex >= 0}
          index={lightboxIndex}
          close={() => setLightboxIndex(-1)}
          slides={GYM_PHOTOS.map((photo) => ({ src: photo.src, alt: photo.alt }))}
        />

        {/* Premium note */}
        <p
          style={{
            textAlign: "center",
            marginTop: "24px",
            fontSize: "13px",
            color: "var(--muted)",
          }}
        >
          A premium gym near Barcelona, visited by a large and active community every week.
        </p>
      </div>
    </section>
  );
}
