import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zazo — Get paid in USD. Spend in PKR.",
  description:
    "Bring international income and everyday spending together. Receive payments, understand your conversion with zero hidden fees, and explore local payments with Zazo.",
  keywords: [
    "fintech",
    "USD to PKR",
    "remittance",
    "freelancer payments",
    "cross-border money",
    "Zazo",
  ],
  authors: [{ name: "Zazo / Yato Inc." }],
  openGraph: {
    title: "Zazo — Get paid in USD. Spend in PKR.",
    description:
      "Bring international income and everyday spending together. Receive payments, understand your conversion, and explore local payments with Zazo.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#6CFF94",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased selection:bg-[#6CFF94] selection:text-black`}>
      <body className="min-h-screen bg-white text-black font-normal">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
