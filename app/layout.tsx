import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hexafalls 2025 | JIS University's Premier Hackathon",
  description:
    "Connect with Hexafalls 2025, JIS University's premier hackathon.",
  authors: { name: "Manish Gupta" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="Hexafalls 2025 | JIS University's Premier Hackathon"
        />
        <meta
          property="og:description"
          content="Connect with Hexafalls 2025, JIS University's premier hackathon."
        />
        <meta property="og:image" content="/preview.png" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Analytics />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
