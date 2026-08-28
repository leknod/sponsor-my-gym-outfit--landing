"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<"terms" | "privacy" | null>(null);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setActiveModal(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeModal]);

  return (
    <footer
      style={{
        backgroundColor: "var(--background)",
        padding: "40px 24px 60px",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        {/* Left column: logo + disclaimer */}
        <div style={{ maxWidth: "460px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <span
            style={{
              fontWeight: 700,
              fontSize: "14px",
              color: "var(--foreground)",
              letterSpacing: "-0.05em",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Image
              src="/brand/logo.svg"
              alt="Sponsor My Gym Outfit Logo"
              width={20}
              height={20}
              style={{ borderRadius: "4px", display: "block" }}
            />
            Sponsor My Gym Outfit
          </span>

          <p
            style={{
              fontSize: "11px",
              color: "var(--muted)",
              lineHeight: 1.5,
              opacity: 0.8,
            }}
          >
            Sponsor My Gym Outfit is not affiliated with Aqua Sport Clubs or any other gym. All trademarks belong to their respective owners. Inspired by{" "}
            <a
              href="https://sponsormymac.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--foreground)",
                fontWeight: 500,
                textDecoration: "underline",
                textUnderlineOffset: "2px",
              }}
            >
              sponsormymac.com
            </a>
            .
          </p>
        </div>

        {/* Right column / bottom in mobile: navigation links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: "13px",
            fontWeight: 500,
            paddingTop: "2px",
          }}
        >
          <a
            href="https://x.com/Leknod"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)")}
          >
            X
          </a>
          <a
            href="mailto:kramleknod@gmail.com"
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)")}
          >
            Contact
          </a>
          <button
            type="button"
            id="footer-terms-btn"
            onClick={() => setActiveModal("terms")}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              fontFamily: "inherit",
              fontSize: "inherit",
              fontWeight: "inherit",
              color: "var(--muted)",
              transition: "color 0.15s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "var(--foreground)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "var(--muted)")}
          >
            Terms
          </button>
          <button
            type="button"
            id="footer-privacy-btn"
            onClick={() => setActiveModal("privacy")}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              fontFamily: "inherit",
              fontSize: "inherit",
              fontWeight: "inherit",
              color: "var(--muted)",
              transition: "color 0.15s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "var(--foreground)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "var(--muted)")}
          >
            Privacy
          </button>
        </nav>
      </div>

      {/* Modal Dialog for Terms or Privacy */}
      {activeModal && (
        <div
          id={`${activeModal}-modal-backdrop`}
          onClick={() => setActiveModal(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            animation: "fadeIn 0.15s ease-out",
          }}
        >
          <div
            id={`${activeModal}-modal-card`}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "24px",
              maxWidth: "480px",
              width: "100%",
              padding: "32px 28px 28px",
              position: "relative",
              boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
              maxHeight: "90vh",
              overflowY: "auto",
              animation: "fadeInUp 0.2s ease-out",
            }}
          >
            {/* Close X button */}
            <button
              type="button"
              id="close-modal-btn"
              onClick={() => setActiveModal(null)}
              aria-label="Close modal"
              style={{
                position: "absolute",
                top: "22px",
                right: "22px",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#f3f4f6",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--muted)",
                transition: "background-color 0.15s ease, color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#e5e7eb";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--foreground)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#f3f4f6";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--muted)";
              }}
            >
              <X size={16} strokeWidth={2.2} />
            </button>

            {/* Modal Title */}
            <h3
              style={{
                fontSize: "26px",
                fontWeight: 800,
                color: "var(--foreground)",
                letterSpacing: "-0.03em",
                marginBottom: "20px",
                lineHeight: 1.15,
              }}
            >
              {activeModal === "terms" ? "Sponsorship terms" : "Privacy Policy"}
            </h3>

            {/* Modal Content */}
            <div
              style={{
                fontSize: "13.5px",
                color: "var(--muted)",
                lineHeight: 1.5,
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {activeModal === "terms" ? (
                <>
                  <p>
                    <strong style={{ color: "var(--foreground)", fontWeight: 700 }}>What you purchase.</strong>{" "}
                    A sponsorship reserves one specific logo placement on my gym outfit for the agreed sponsorship period. Your brand will also be listed as a sponsor on Sponsor My Gym Outfit during the active sponsorship period.
                  </p>

                  <p>
                    <strong style={{ color: "var(--foreground)", fontWeight: 700 }}>Artwork and approval.</strong>{" "}
                    Sponsors must own or have permission to use the submitted logo and artwork. I may request a different file or minor adjustments for print quality, sizing, or placement. I reserve the right to decline content that is misleading, harmful, unlawful, offensive, adult, or otherwise unsuitable for the project.
                  </p>

                  <p>
                    <strong style={{ color: "var(--foreground)", fontWeight: 700 }}>Sponsorship period.</strong>{" "}
                    The sponsorship begins when the logo is printed on the outfit. The confirmed start and end dates will be provided by email. Sponsorships are billed monthly and do not renew automatically unless otherwise agreed.
                  </p>

                  <p>
                    <strong style={{ color: "var(--foreground)", fontWeight: 700 }}>Payment and refunds.</strong>{" "}
                    Payment is collected upfront for each monthly sponsorship period in EUR. A full refund will be issued if the submitted artwork cannot be accepted. Once artwork has been approved and printed, the current sponsorship period is non-refundable.
                  </p>

                  <p>
                    <strong style={{ color: "var(--foreground)", fontWeight: 700 }}>Visibility.</strong>{" "}
                    I train regularly at a premium gym near Barcelona, but my training schedule, gym attendance, and interactions with other members naturally vary. No specific number of impressions, views, visits, leads, sales, or conversions is guaranteed.
                  </p>

                  <p>
                    <strong style={{ color: "var(--foreground)", fontWeight: 700 }}>Proof of exposure.</strong>{" "}
                    Sponsors may receive periodic photographs showing the sponsored outfit being worn during training. These are provided as proof that the sponsorship placement is being used and are not intended to represent a guaranteed number of impressions.
                  </p>

                  <p>
                    <strong style={{ color: "var(--foreground)", fontWeight: 700 }}>Placement.</strong>{" "}
                    Each sponsorship corresponds to one specific position shown on the website. Only one sponsor may occupy each position at a time. Minor adjustments to logo size or positioning may be made where necessary for printing, garment construction, comfort, or visibility.
                  </p>

                  <p>
                    <strong style={{ color: "var(--foreground)", fontWeight: 700 }}>Renewal.</strong>{" "}
                    Sponsorships do not renew automatically. Existing sponsors may be offered the opportunity to renew their position before the end of their current sponsorship period, subject to availability and any updated pricing.
                  </p>

                  <p>
                    <strong style={{ color: "var(--foreground)", fontWeight: 700 }}>Changes to the outfit.</strong>{" "}
                    I may replace or update the sponsored outfit when reasonably necessary due to wear, damage, sizing, availability, or future editions. Any replacement will maintain the sponsored placement as closely as reasonably possible.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong style={{ color: "var(--foreground)", fontWeight: 700 }}>Information collected.</strong>{" "}
                    Sponsor My Gym Outfit collects the information needed to process and manage sponsorships, including contact email, company or brand name, website URL, selected sponsorship placement, uploaded logo artwork, and payment status.
                  </p>

                  <p>
                    <strong style={{ color: "var(--foreground)", fontWeight: 700 }}>How it is used.</strong>{" "}
                    This information is used to process sponsorships, review and prepare logo artwork for printing, display approved sponsor information on the website, communicate about the sponsorship, and manage the sponsorship period.
                  </p>

                  <p>
                    <strong style={{ color: "var(--foreground)", fontWeight: 700 }}>Service providers.</strong>{" "}
                    Payment information is handled securely by Stripe. Sponsorship data and uploaded artwork may be stored using Supabase. Their respective privacy policies and terms also apply.
                  </p>

                  <p>
                    <strong style={{ color: "var(--foreground)", fontWeight: 700 }}>Public information.</strong>{" "}
                    During an active sponsorship, the approved brand name, logo, and destination website may be displayed publicly on Sponsor My Gym Outfit. Contact details and payment information are never displayed publicly.
                  </p>

                  <p>
                    <strong style={{ color: "var(--foreground)", fontWeight: 700 }}>Retention and requests.</strong>{" "}
                    Information may be retained where necessary for payment, tax, accounting, legal, or legitimate business purposes. To request access, correction, or deletion of your personal information where applicable, contact kramleknod@gmail.com.
                  </p>
                </>
              )}
            </div>

            {/* Done Button */}
            <button
              type="button"
              id="done-modal-btn"
              onClick={() => setActiveModal(null)}
              className="btn-cta"
              style={{
                width: "100%",
                marginTop: "24px",
                padding: "13px 20px",
                fontSize: "15px",
                fontWeight: 600,
                borderRadius: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
