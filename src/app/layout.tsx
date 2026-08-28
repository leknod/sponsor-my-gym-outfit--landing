import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sponsor My Gym Outfit — Put your brand on Marc's gym outfit",
  description:
    "Put your brand in front of premium gym-goers at Aqua Sport Clubs, Vilanova i la Geltrú (near Barcelona). 6 ad spots on a gym outfit, starting at €125/month.",
  openGraph: {
    title: "Sponsor My Gym Outfit",
    description:
      "Put your brand in front of premium gym-goers near Barcelona. Starting at €125/month.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
