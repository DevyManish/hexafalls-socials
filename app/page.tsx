"use client";

import { useEffect, useState } from "react";
import { Instagram, Linkedin, Twitter, MousePointerClick } from "lucide-react";
import SocialLink from "@/components/SocialLink";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main
      className="relative min-h-screen w-full bg-black bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/shack_backdoor.jpg')" }}
    >
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

          <SocialLink
            href="https://www.hexafalls.tech/"
            icon={<MousePointerClick className="w-6 h-6" />}
            label="Register Now ⚡"
            delay="0.4s"
          />
        </div>
      </div>
    </main>
  );
}
