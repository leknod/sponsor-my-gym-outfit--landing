export type SpotId =
  | "chest"
  | "back"
  | "right-leg-front"
  | "left-leg-front"
  | "right-leg-back"
  | "left-leg-back";

export interface Spot {
  id: SpotId;
  label: string;
  view: "front" | "back";
  price: number; // monthly €
  stripeLink: string;
  available: boolean;
  description: string;
  // Position of the clickable hotspot overlay on the outfit image (% from top-left)
  hotspot: { top: string; left: string };
}

// ─────────────────────────────────────────────────────────────
// STRIPE SETUP: Replace the stripeLink values below with your
// actual Stripe Payment Link URLs.
//
// How to create them:
//  1. Go to https://dashboard.stripe.com/payment-links
//  2. Create product "Chest / Back ad spot" → €250/month recurring
//  3. Create product "Leg ad spot" → €125/month recurring
//  4. Copy each generated link URL and paste it below.
// ─────────────────────────────────────────────────────────────

const STRIPE_LINK_250 = "#buy"; // TODO: replace with real Stripe link
const STRIPE_LINK_125 = "#buy"; // TODO: replace with real Stripe link

export const spots: Spot[] = [
  {
    id: "chest",
    label: "Chest",
    view: "front",
    price: 250,
    stripeLink: STRIPE_LINK_250,
    available: true,
    description: "Prime real estate. Front-facing, eye-level. Maximum visibility during every workout.",
    hotspot: { top: "30%", left: "47%" },
  },
  {
    id: "back",
    label: "Back",
    view: "back",
    price: 250,
    stripeLink: STRIPE_LINK_250,
    available: true,
    description: "Full upper-back placement. Seen by everyone behind you — on the floor and in the mirrors.",
    hotspot: { top: "28%", left: "47%" },
  },
  {
    id: "right-leg-front",
    label: "Right Leg — Front",
    view: "front",
    price: 125,
    stripeLink: STRIPE_LINK_125,
    available: true,
    description: "Right thigh, front side. Visible during cardio, squats, and stretching.",
    hotspot: { top: "60%", left: "37%" },
  },
  {
    id: "left-leg-front",
    label: "Left Leg — Front",
    view: "front",
    price: 125,
    stripeLink: STRIPE_LINK_125,
    available: true,
    description: "Left thigh, front side. Great pairing with the right leg for a double-sided campaign.",
    hotspot: { top: "60%", left: "58%" },
  },
  {
    id: "right-leg-back",
    label: "Right Leg — Back",
    view: "back",
    price: 125,
    stripeLink: STRIPE_LINK_125,
    available: true,
    description: "Right thigh, rear side. Visible during deadlifts, walking, and any posterior movement.",
    hotspot: { top: "57%", left: "38%" },
  },
  {
    id: "left-leg-back",
    label: "Left Leg — Back",
    view: "back",
    price: 125,
    stripeLink: STRIPE_LINK_125,
    available: true,
    description: "Left thigh, rear side. High dwell-time placement — people see it every time you walk away.",
    hotspot: { top: "57%", left: "58%" },
  },
];
