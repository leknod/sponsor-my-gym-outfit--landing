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
  shortLabel: string;
  view: "front" | "back";
  price: number; // monthly €
  stripeLink: string;
  available: boolean;
  description: string;
  // Bounding box overlay on outfit (% from top-left)
  box: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
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

const STRIPE_LINK_250 = "#spots"; // TODO: replace with real Stripe link
const STRIPE_LINK_125 = "#spots"; // TODO: replace with real Stripe link

export const spots: Spot[] = [
  {
    id: "chest",
    label: "Chest",
    shortLabel: "CHEST",
    view: "front",
    price: 250,
    stripeLink: STRIPE_LINK_250,
    available: true,
    description: "Prime real estate. Front-facing torso coverage, highly visible throughout every workout.",
    box: {
      top: "22%",
      left: "38%",
      width: "24%",
      height: "19%",
    },
  },
  {
    id: "back",
    label: "Back",
    shortLabel: "BACK",
    view: "back",
    price: 250,
    stripeLink: STRIPE_LINK_250,
    available: true,
    description: "Full upper & mid-back placement. Seen by everyone behind you and reflected in gym mirrors.",
    box: {
      top: "22%",
      left: "38%",
      width: "24%",
      height: "19%",
    },
  },
  {
    id: "right-leg-front",
    label: "Right Leg — Front",
    shortLabel: "RIGHT LEG",
    view: "front",
    price: 125,
    stripeLink: STRIPE_LINK_125,
    available: true,
    description: "Front-thigh placement. Visible during training, cardio, and everyday movement around the gym.",
    box: {
      top: "48%",
      left: "35%",
      width: "13.5%",
      height: "14%",
    },
  },
  {
    id: "left-leg-front",
    label: "Left Leg — Front",
    shortLabel: "LEFT LEG",
    view: "front",
    price: 125,
    stripeLink: STRIPE_LINK_125,
    available: true,
    description: "Left thigh, front side. Pair with the right leg for a double-sided campaign.",
    box: {
      top: "48%",
      left: "51.5%",
      width: "13.5%",
      height: "14%",
    },
  },
  {
    id: "right-leg-back",
    label: "Right Leg — Back",
    shortLabel: "RIGHT LEG",
    view: "back",
    price: 125,
    stripeLink: STRIPE_LINK_125,
    available: true,
    description: "Right thigh, rear side. Visible during deadlifts, squats, and walking around the gym.",
    box: {
      top: "48%",
      left: "35%",
      width: "13.5%",
      height: "14%",
    },
  },
  {
    id: "left-leg-back",
    label: "Left Leg — Back",
    shortLabel: "LEFT LEG",
    view: "back",
    price: 125,
    stripeLink: STRIPE_LINK_125,
    available: true,
    description: "Left thigh, rear side. High dwell-time placement — people see it every time you walk away.",
    box: {
      top: "48%",
      left: "51.5%",
      width: "13.5%",
      height: "14%",
    },
  },
];
