import React from "react";
import Link from "next/link";

export interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  delay: string;
}

export default function SocialLink({
  href,
  icon,
  label,
  delay,
}: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-green-500/20 hover:border-green-400/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(74,222,128,0.5)] animate-float"
      style={{
        animationDelay: delay,
        animationDuration: "3s",
      }}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 text-black">
        {icon}
      </div>
      <span className="text-white font-medium">{label}</span>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400/0 via-green-400/5 to-emerald-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
  );
}
