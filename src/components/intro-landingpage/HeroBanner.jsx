// HeroIndustrialV2.jsx
"use client";

import Link from "next/link";
import RightShowcaseSlick from "./UI/RightShowcaseSlick";

/**
 * Industrial banner: tactile, material, engineered.
 * - Left-aligned content for editorial/manufacturing tone
 * - Brushed-metal texture + noise overlay
 * - Sturdy CTAs and credibility chips
 * - No SaaS pastel vibes
 */

export default function HeroIndustrialV2() {
  return (
    <section className="relative overflow-hidden bg-[--hero-bg]">
      {/* Background base gradient (muted material tones) */}
      <div
        className="absolute inset-0"
        style={{
          // warm concrete -> steel
          background:
            "linear-gradient(90deg, rgba(240,238,236,1) 0%, rgba(222,84,66,0.06) 35%, rgba(10,28,50,0.14) 100%)",
        }}
        aria-hidden
      />

      {/* brushed-metal diagonal lines (subtle) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.02) 0 1px, rgba(0,0,0,0) 1px 16px)",
          mixBlendMode: "overlay",
        }}
      />

      {/* subtle noise grain using inline SVG data-uri */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\" viewBox=\"0 0 200 200\"><filter id=\"f\"><feTurbulence baseFrequency=\"0.9\" numOctaves=\"1\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23f)\" opacity=\"0.03\"/></svg>')",
          mixBlendMode: "overlay",
        }}
      />

      {/* faint industrial emblem/gear (decorative) */}
      <svg
        aria-hidden
        className="absolute right-8 top-12 opacity-10 w-80 h-80 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100 30 L112 40 L128 36 L132 52 L148 56 L140 72 L152 88 L136 96 L136 116 L120 124 L112 140 L96 136 L80 144 L68 128 L52 132 L44 116 L28 108 L36 92 L24 76 L40 68 L44 52 L60 48 L64 32 Z"
          stroke="#000"
          strokeWidth="2"
        />
      </svg>

      {/* Foreground content */}
      <div className="relative container mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content column (left) */}
          <div className="order-1 md:order-1">
            {/* credibility chips */}
            <div className="flex flex-wrap gap-3 mb-4">
              <Badge text="ISO 9001" />
              <Badge text="40+ Years" />
              <Badge text="R&D Tested" />
            </div>

            {/* headline - slightly narrower, heavier, industrial tone */}
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Engineered Coatings & <span className="text-[#b63e34]">Power Components</span>
            </h1>

            {/* supporting line */}
            <p className="mt-5 max-w-2xl text-slate-700 text-base md:text-lg">
              Over four decades of manufacturing excellence — protective coatings and
              transformer components designed for long-term performance and industrial use.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/dreamshield" className="inline-block">
                <button
                  className="px-6 py-3 bg-[#b40000] hover:bg-[#9c0000] text-white rounded-md font-semibold shadow-md transition"
                  aria-label="Explore DreamShield"
                >
                  Explore DreamShield
                </button>
              </Link>

              <Link href="/electroshield" className="inline-block">
                <button
                  className="px-6 py-3 border-2 border-[#b40000] bg-transparent text-[#111827] rounded-md font-semibold shadow-sm transition hover:bg-[#fff5f5]"
                  aria-label="Explore ElectroShield"
                >
                  Explore ElectroShield
                </button>
              </Link>
            </div>
          </div>

          {/* Visual column (right) - texture panel + optional image placeholder */}
          <div className="order-2 md:order-2 flex justify-end">
            <RightShowcaseSlick
              items={[
                { id: "p1", title: "Advanced Coatings", caption: "Durable finishes", image: "/images/div_img1.webp", href: "/dreamshield" },
                { id: "t1", title: "Transformer Components", caption: "Engineered cores & parts", image: "/images/div_img2.webp", href: "/electroshield" },
              ]}
              settings={{ autoplaySpeed: 5000 }}
            />
          </div>
        </div>
      </div>

      {/* small accessibility note: no motion heavy animations */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          /* nothing animated here; respect user preference */
        }
      `}</style>
    </section>
  );
}

/* tiny badge/chip used for credibility */
function Badge({ text }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 text-sm font-medium text-slate-900 shadow-sm border border-slate-200">
      <svg width="12" height="12" viewBox="0 0 24 24" className="opacity-90" fill="none">
        <path d="M5 13l4 4L19 7" stroke="#b62b25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{text}</span>
    </div>
  );
}
