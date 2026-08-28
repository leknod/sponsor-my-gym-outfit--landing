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
  metadataBase: new URL("https://sponsormygymoutfit.com"),
  title: "Sponsor My Gym Outfit | Put Your Brand on My Gym Outfit",
  description:
    "Put your brand on my gym outfit. Six exclusive sponsorship spots, worn 4x a week at a premium gym near Barcelona.",
  openGraph: {
    title: "Sponsor My Gym Outfit | Put Your Brand on My Gym Outfit",
    description:
      "Put your brand on my gym outfit. Six exclusive sponsorship spots, worn 4x a week at a premium gym near Barcelona.",
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
