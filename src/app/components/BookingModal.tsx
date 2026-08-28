"use client";

import { useState, useEffect, useRef } from "react";
import { X, Upload, CheckCircle } from "lucide-react";
import type { Spot } from "../data/spots";

interface BookingModalProps {
  spot: Spot;
  onClose: () => void;
}

export default function BookingModal({ spot, onClose }: BookingModalProps) {
  const [brand, setBrand] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Lock body scroll and handle Escape
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Clean up object URL on unmount
  useEffect(() => {
    return () => {
      if (logoPreview) URL.revokeObjectURL(logoPreview);
    };
  }, [logoPreview]);

  function handleFileSelect(file: File) {
    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/svg+xml",
      "image/webp",
    ];
    if (!allowedTypes.includes(file.type)) {
      setError("Please upload a PNG, JPG, SVG, or WebP file.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError("File must be under 10 MB.");
      return;
    }
    setError(null);
    setLogoFile(file);
    setLogoPreview(URL.createObjectURL(file));
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!brand.trim() || !email.trim()) {
      setError("Brand name and email are required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("brand", brand.trim());
      formData.append("website", website.trim());
      formData.append("email", email.trim());
      formData.append("spotId", spot.id);
      if (logoFile) formData.append("logo", logoFile);

      const res = await fetch("/api/book", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setIsSubmitting(false);
        return;
      }

      // Redirect to Stripe Payment Link
      if (data.stripeLink && data.stripeLink !== "#spots") {
        window.location.href = data.stripeLink;
      } else {
        // For now, show success if Stripe links are not configured yet
        setError(null);
        alert(
          "Booking request sent! You'll receive a payment link by email once the spot is confirmed."
        );
        onClose();
      }
    } catch {
      setError("Network error. Please try again.");
      setIsSubmitting(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    fontSize: "14px",
    border: "1px solid var(--border)",
    borderRadius: "10px",
    outline: "none",
    color: "var(--foreground)",
    backgroundColor: "#fff",
    transition: "border-color 0.15s ease",
  };

  return (
    /* Backdrop */
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        padding: "16px",
      }}
    >
      {/* Modal card */}
      <div
        className="no-scrollbar"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "460px",
          maxHeight: "calc(100vh - 32px)",
          overflowY: "auto",
          backgroundColor: "#fff",
          borderRadius: "24px",
          padding: "28px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
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

        {/* Header */}
        <h2
          style={{
            fontSize: "22px",
            fontWeight: 800,
            color: "var(--foreground)",
            marginBottom: "4px",
            letterSpacing: "-0.02em",
            paddingRight: "32px",
          }}
        >
          Book {spot.label}
        </h2>
        <p
          style={{
            fontSize: "13px",
            color: "var(--muted)",
            marginBottom: "20px",
          }}
        >
          {spot.view === "front" ? "Front" : "Back"} · €{spot.price}/month
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Brand name */}
          <div style={{ marginBottom: "14px" }}>
            <label
              htmlFor="booking-brand"
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--foreground)",
                marginBottom: "4px",
              }}
            >
              Brand or product name
            </label>
            <input
              id="booking-brand"
              type="text"
              placeholder="Acme Studio"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
              style={inputStyle}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "#0071e3")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "var(--border)")
              }
            />
          </div>

          {/* Website URL */}
          <div style={{ marginBottom: "14px" }}>
            <label
              htmlFor="booking-website"
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--foreground)",
                marginBottom: "4px",
              }}
            >
              Website URL
            </label>
            <input
              id="booking-website"
              type="url"
              placeholder="https://example.com"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              style={inputStyle}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "#0071e3")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "var(--border)")
              }
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "14px" }}>
            <label
              htmlFor="booking-email"
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--foreground)",
                marginBottom: "4px",
              }}
            >
              Email address
            </label>
            <input
              id="booking-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "#0071e3")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "var(--border)")
              }
            />
          </div>

          {/* Logo upload */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--foreground)",
                marginBottom: "4px",
              }}
            >
              Logo file
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept=".png,.jpg,.jpeg,.svg,.webp"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileSelect(file);
              }}
              style={{ display: "none" }}
            />
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              style={{
                border: `2px dashed ${isDragging ? "#0071e3" : "var(--border)"}`,
                borderRadius: "12px",
                padding: "16px",
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: isDragging
                  ? "rgba(0, 113, 227, 0.04)"
                  : "#fafafa",
                transition: "all 0.15s ease",
              }}
            >
              {logoPreview ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={logoPreview}
                    alt="Logo preview"
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "contain",
                      borderRadius: "6px",
                    }}
                  />
                  <div style={{ textAlign: "left" }}>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "var(--foreground)",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <CheckCircle
                        size={14}
                        strokeWidth={2.5}
                        color="#22c55e"
                      />
                      {logoFile?.name}
                    </p>
                    <p style={{ fontSize: "12px", color: "var(--muted)" }}>
                      Click to change
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Upload size={24} strokeWidth={1.5} color="#6e6e73" />
                  <p style={{ fontSize: "14px", color: "var(--muted)" }}>
                    Choose a PNG, JPG or SVG
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Error message */}
          {error && (
            <p
              style={{
                fontSize: "13px",
                color: "#ef4444",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              {error}
            </p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: "100%",
              padding: "14px 24px",
              fontSize: "16px",
              fontWeight: 700,
              color: "#fff",
              backgroundColor: isSubmitting ? "#93c5fd" : "#0071e3",
              border: "none",
              borderRadius: "100px",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transition: "background-color 0.15s ease, transform 0.1s ease",
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting)
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "#005bb5";
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting)
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "#0071e3";
            }}
          >
            {isSubmitting ? (
              <>
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    border: "2px solid rgba(255,255,255,0.3)",
                    borderTopColor: "#fff",
                    borderRadius: "50%",
                    animation: "spin 0.6s linear infinite",
                    display: "inline-block",
                  }}
                />
                Sending...
              </>
            ) : (
              <>
                Continue to checkout
                <span style={{ fontSize: "18px" }}>→</span>
              </>
            )}
          </button>

          {/* Stripe note */}
          <p
            style={{
              fontSize: "12px",
              color: "var(--muted)",
              textAlign: "center",
              marginTop: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Payment will be securely handled by Stripe.
          </p>
        </form>
      </div>

      {/* Spinner keyframe (injected once) */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
