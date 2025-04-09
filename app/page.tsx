"use client";

import type React from "react";
import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline/next";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import SocialLink from "@/components/SocialLink";
import SplineModel from "@/components/SplineModel";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Spline scene="https://prod.spline.design/rzxy-WQFTuMYe1q2/scene.splinecode" />
        {/* <SplineModel /> */}
      </div>

      <div className="fixed inset-0 z-10 bg-gradient-to-br from-black/70 via-black/50 to-transparent pointer-events-none"></div>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-emerald-500 animate-pulse">
          Hexafalls 2025
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-12">
          JIS University&apos;s premier hackathon
        </p>

        <div className="flex flex-col gap-6 w-full max-w-xs">
          <SocialLink
            href="https://www.instagram.com/hexafalls_/"
            icon={<Instagram className="w-6 h-6" />}
            label="Instagram"
            delay="0s"
          />

          <SocialLink
            href="https://x.com/hexafalls"
            icon={<Twitter className="w-6 h-6" />}
            label="Twitter"
            delay="0.2s"
          />

          <SocialLink
            href="https://www.linkedin.com/company/hexafalls/"
            icon={<Linkedin className="w-6 h-6" />}
            label="LinkedIn"
            delay="0.4s"
          />
        </div>
      </div>
    </main>
  );
}
