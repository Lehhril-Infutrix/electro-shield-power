// HeroBanner.jsx
"use client";

import React from "react";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 animate-gradient-x" />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Foreground content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-center md:text-left">
          <p className="inline-block text-sm font-semibold text-red-300 mb-3">
            Two divisions. One group.
          </p>

          <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
            Trusted Solutions in Coatings & Power
          </h1>

          <p className="mt-4 text-white/90 max-w-xl">
            40+ years of innovation, precision, and quality.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center md:justify-start">
            <Link href="/dreamshield" className="inline-block">
              <button className="inline-flex items-center gap-3 bg-white text-[#CC0001] font-semibold px-6 py-3 rounded-full shadow hover:scale-[1.02] transition">
                Explore DreamShield →
              </button>
            </Link>

            <Link href="/electroshield" className="inline-block">
              <button className="inline-flex items-center gap-3 border border-white/60 text-white bg-white/10 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition">
                Explore ElectroShield →
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Gradient animation keyframes */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 12s ease infinite;
        }
      `}</style>
    </section>
  );
}
