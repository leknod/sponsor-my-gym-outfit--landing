"use client";

import { useState } from "react";

const FAQS = [
  {
    id: "what-do-i-get",
    question: "What exactly do I get?",
    answer:
      "You get your logo printed on one or more zones of my gym outfit, worn 5 times a week at Aqua Sport Clubs in Vilanova i la Geltrú. Every session, your brand is visible to every member in the gym — while I train, walk around, and interact with people.",
  },
  {
    id: "how-many-people",
    question: "How many people will see my logo?",
    answer:
      "Aqua Sport Clubs is a premium gym with a consistent, daily-active membership base. Visibility varies by session and time of day, but your brand gets real, in-person exposure — not algorithm-dependent impressions.",
  },
  {
    id: "commitment",
    question: "How long is the commitment?",
    answer:
      "Spots are sold month-to-month. You pay monthly via Stripe and can cancel any time. There's no long-term contract or lock-in period.",
  },
  {
    id: "cancel",
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel your recurring subscription at any time through Stripe. Your spot will remain active until the end of the paid period.",
  },
  {
    id: "logo-format",
    question: "What file format should I send my logo in?",
    answer:
      "Please send a high-resolution PNG (transparent background) or SVG file. The higher the resolution, the better the print quality. Once you've purchased your spot, I'll reach out with the exact sizing specs.",
  },
  {
    id: "spot-taken",
    question: "What happens if the spot I want is already taken?",
    answer:
      "Taken spots are marked clearly on the site. If a spot you want is unavailable, you can sign up to be notified when it frees up — or pick another zone in the meantime.",
  },
];

function FAQItem({ faq }: { faq: (typeof FAQS)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid var(--border)",
      }}
    >
      <button
        id={`faq-${faq.id}`}
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "22px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
          textAlign: "left",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontSize: "16px",
            fontWeight: 600,
            color: "var(--foreground)",
            letterSpacing: "-0.01em",
          }}
        >
          {faq.question}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            transition: "transform 0.2s ease, background-color 0.15s ease",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            backgroundColor: open ? "var(--foreground)" : "transparent",
            color: open ? "#fff" : "var(--muted)",
          } as React.CSSProperties}
        >
          +
        </span>
      </button>

      {open && (
        <div
          style={{
            paddingBottom: "22px",
            animation: "fadeInUp 0.2s ease-out",
          }}
        >
          <p
            style={{
              fontSize: "15px",
              color: "var(--muted)",
              lineHeight: 1.7,
              maxWidth: "680px",
            }}
          >
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      style={{
        padding: "100px 24px",
        backgroundColor: "#fafafa",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: "var(--foreground)",
            marginBottom: "8px",
            letterSpacing: "-0.03em",
          }}
        >
          Questions, answered.
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "var(--muted)",
            marginBottom: "48px",
          }}
        >
          Everything you need to know before claiming your spot.
        </p>

        <div style={{ maxWidth: "760px" }}>
          {FAQS.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
