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
// STRIPE PAYMENT LINKS:
// Pega aquí los enlaces de pago generados en Stripe para cada spot.
// ─────────────────────────────────────────────────────────────

export const STRIPE_LINKS = {
  chest: "https://buy.stripe.com/cNi14p4zx6IsefPfWlawo01",
  back: "https://buy.stripe.com/3cIfZj2rp3wg9Zz6lLawo02",
  rightLegFront: "https://buy.stripe.com/dRmcN73vt2sc8VvaC1awo03",
  leftLegFront: "https://buy.stripe.com/6oU00l8PN8QAb3D5hHawo04",
  rightLegBack: "https://buy.stripe.com/5kQ14p3vtd6QdbL6lLawo05",
  leftLegBack: "https://buy.stripe.com/eVq28td631o8gnXdOdawo06",
};

export const spots: Spot[] = [
  {
    id: "chest",
    label: "Chest",
    shortLabel: "CHEST",
    view: "front",
    price: 250,
    stripeLink: STRIPE_LINKS.chest,
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
    stripeLink: STRIPE_LINKS.back,
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
    stripeLink: STRIPE_LINKS.rightLegFront,
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
    stripeLink: STRIPE_LINKS.leftLegFront,
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
    stripeLink: STRIPE_LINKS.rightLegBack,
    available: true,
    description: "Right thigh, rear side. Visible during deadlifts, squats, and walking around the gym.",
    box: {
      top: "48%",
      left: "51.5%",
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
    stripeLink: STRIPE_LINKS.leftLegBack,
    available: true,
    description: "Left thigh, rear side. High dwell-time placement — people see it every time you walk away.",
    box: {
      top: "48%",
      left: "35%",
      width: "13.5%",
      height: "14%",
    },
  },
];
