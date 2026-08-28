import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          src="https://datafa.st/js/script.js"
          data-website-id="dfid_WkcrSMRMdC2W5twrN6JsH"
          data-domain="sponsormygymoutfit.com"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
