"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    id: "where-displayed",
    question: "Where will my logo be displayed?",
    answer:
      "Your logo will be printed on my gym outfit and worn during my regular training sessions at a premium gym near Barcelona.",
  },
  {
    id: "how-often-train",
    question: "How often do you train?",
    answer:
      "I train 4 times a week and have been training consistently for years. The gym is already a permanent part of my routine.",
  },
  {
    id: "sponsorship-length",
    question: "How long will my sponsorship last?",
    answer:
      "Each sponsorship runs for one month and can be renewed monthly, subject to availability.",
  },
  {
    id: "verify-training",
    question: "How do I know you're actually training?",
    answer:
      "I'll send sponsors weekly photo updates showing the outfit being worn at the gym, along with a simple monthly activity summary.",
  },
  {
    id: "what-to-provide",
    question: "What do I need to provide?",
    answer:
      "Just your logo in high-resolution PNG or SVG format. I'll take care of printing, sizing and placement.",
  },
  {
    id: "choose-spot",
    question: "Can I choose where my logo goes?",
    answer:
      "Yes. You can book any available spot shown on the outfit. Each spot is exclusive to one brand.",
  },
  {
    id: "brand-types",
    question: "What kind of brands can sponsor a spot?",
    answer:
      "The project is particularly suited to brands in fitness, health, sports, nutrition, wellness and related industries. Other brands are welcome too, as long as they're a good fit for the project.",
  },
  {
    id: "social-media",
    question: "Will my logo appear in your social media posts?",
    answer:
      "Sponsors may be featured in posts documenting the project and its different editions. Social media exposure isn't guaranteed as part of the sponsorship.",
  },
  {
    id: "stop-training",
    question: "What happens if you stop training?",
    answer:
      "The whole point is that I'm already a regular gym-goer. If I unexpectedly stop training for an extended period, I'll inform sponsors and work out an appropriate solution.",
  },
  {
    id: "cancel-sponsorship",
    question: "Can I cancel my sponsorship?",
    answer:
      "Sponsorships can be cancelled before the next monthly period. The current paid period remains active.",
  },
  {
    id: "see-outfit",
    question: "Can I see the outfit before booking?",
    answer:
      "Yes. The current outfit design and all available sponsorship positions are shown above.",
  },
];

function FAQItem({ faq }: { faq: (typeof FAQS)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        padding: "24px 28px",
        boxShadow: "var(--card-shadow)",
        transition: "box-shadow 0.15s ease",
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
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
          textAlign: "left",
          gap: "16px",
          padding: 0,
        }}
      >
        <span
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: "var(--foreground)",
            letterSpacing: "-0.01em",
          }}
        >
          {faq.question}
        </span>
        <ChevronDown
          size={18}
          strokeWidth={2}
          style={{
            flexShrink: 0,
            color: "var(--muted)",
            transition: "transform 0.2s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {open && (
        <div
          style={{
            marginTop: "12px",
            animation: "fadeIn 0.2s ease-out",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: "var(--muted)",
              lineHeight: 1.55,
              maxWidth: "640px",
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
        padding: "80px 24px",
        backgroundColor: "var(--background)",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: "var(--foreground)",
            marginBottom: "8px",
            letterSpacing: "-0.03em",
          }}
        >
          Questions? I've got answers.
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "var(--muted)",
            marginBottom: "36px",
          }}
        >
          Everything you need to know before putting your logo on my outfit.
        </p>

        <div style={{ maxWidth: "760px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {FAQS.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

