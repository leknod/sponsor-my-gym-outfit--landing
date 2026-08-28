"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { CheckCircle2, X } from "lucide-react";

function SuccessModalContent() {
  const searchParams = useSearchParams();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (searchParams.get("booked") === "success") {
      setShow(true);
      // Clean up URL parameter without refreshing
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [searchParams]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setShow(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) setShow(false);
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        padding: "20px",
      }}
    >
      <div
        className="animate-fade-in-up"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "440px",
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          padding: "36px 28px 28px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setShow(false)}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background-color 0.15s ease",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "#d1d5db")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "var(--border)")
          }
        >
          <X size={16} strokeWidth={2.5} color="#6e6e73" />
        </button>

        {/* Icon circle */}
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            backgroundColor: "rgba(34, 197, 94, 0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <CheckCircle2 size={36} color="#16a34a" strokeWidth={2.2} />
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: "24px",
            fontWeight: 800,
            color: "var(--foreground)",
            letterSpacing: "-0.02em",
            marginBottom: "8px",
          }}
        >
          Payment confirmed! 🎉
        </h2>

        {/* Message */}
        <p
          style={{
            fontSize: "15px",
            color: "var(--muted)",
            lineHeight: 1.55,
            marginBottom: "28px",
            maxWidth: "360px",
          }}
        >
          Thank you for your sponsorship! Your spot is secured and I&apos;ve received your logo. I&apos;ll be in touch by email shortly with the confirmed start date.
        </p>

        {/* Action button */}
        <button
          onClick={() => setShow(false)}
          className="btn-cta"
          style={{
            width: "100%",
            padding: "12px 24px",
            fontSize: "15px",
            borderRadius: "100px",
            justifyContent: "center",
          }}
        >
          Back to website
        </button>
      </div>
    </div>
  );
}

export default function SuccessBanner() {
  return (
    <Suspense fallback={null}>
      <SuccessModalContent />
    </Suspense>
  );
}
