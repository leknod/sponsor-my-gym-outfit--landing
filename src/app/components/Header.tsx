import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        backgroundColor: "var(--background)",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontWeight: 700,
            fontSize: "15px",
            color: "var(--foreground)",
            textDecoration: "none",
            letterSpacing: "-0.05em",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Image
            src="/brand/logo.svg"
            alt="Sponsor My Gym Outfit Logo"
            width={24}
            height={24}
            style={{ borderRadius: "5px", display: "block" }}
          />
          Sponsor My Gym Outfit
        </Link>

        {/* CTA */}
        <a
          href="#spots"
          id="header-cta"
          className="btn-cta"
          style={{ fontSize: "14px", padding: "8px 18px" }}
        >
          Get a spot
        </a>
      </div>
    </header>
  );
}
