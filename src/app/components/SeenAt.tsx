"use client";

import Image from "next/image";

const GYM_PHOTOS = [
  { src: "/gym-1.jpg", alt: "Aqua Sport Clubs — cardio area" },
  { src: "/gym-2.jpg", alt: "Aqua Sport Clubs — weights area" },
  { src: "/gym-3.jpg", alt: "Aqua Sport Clubs — premium facilities" },
];

export default function SeenAt() {
  return (
    <section
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        backgroundColor: "#fafafa",
        padding: "56px 24px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
          Seen sweating here every week:
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

        {/* Photo grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {GYM_PHOTOS.map((photo, i) => (
            <div
              key={i}
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid var(--border)",
                boxShadow: "var(--card-shadow)",
                aspectRatio: "16/9",
                position: "relative",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "var(--card-shadow-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--card-shadow)";
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        {/* Premium note */}
        <p
          style={{
            textAlign: "center",
            marginTop: "24px",
            fontSize: "13px",
            color: "var(--muted)",
          }}
        >
          A premium sports club frequented by local professionals, entrepreneurs, and
          health-conscious residents of the Barcelona coast.
        </p>
      </div>
    </section>
  );
}
