import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FAST Eduventures – Are You FAST?",
  description:
    "Offline coaching founded by IITians and NITians for JEE, NEET, CUET, Olympiads & Boards in Crossings Republik and Gaur City. Class 6th to 12th. Setting a new standard.",
  keywords: [
    "JEE coaching",
    "NEET coaching",
    "CUET preparation",
    "Olympiad coaching",
    "IIT coaching",
    "Crossing Republik",
    "Gaur City",
    "Ghaziabad",
  ],
};

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning={true}>
        <Navigation />
        {children}
        <Footer />
        <CallButton />
      </body>
    </html>
  );
}
