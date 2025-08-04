import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next.js Starter for Business - Handcrafted Boilerplate",
  description:
    "Handcrafted Next.js boilerplate for startups and agencies. Modern design, essential integrations, and everything you need to kickstart your next web project.",
  keywords:
    "Next.js, React, Startup, Business, Agency, SaaS, Boilerplate, Template",
  authors: [{ name: "Your Company" }],
  openGraph: {
    title: "Next.js Starter for Business",
    description: "Handcrafted Next.js boilerplate for startups and agencies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
