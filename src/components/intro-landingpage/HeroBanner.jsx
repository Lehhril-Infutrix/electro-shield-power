// BannerWithSlideshow.jsx
"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Check } from "lucide-react"

/**
 * BannerWithSlideshow
 * - Uses react-slick background slideshow (images or videos)
 * - Foreground content sits on top with overlay
 *
 * IMPORTANT:
 * - Ensure you import slick css globally in app/layout.js or pages/_app.js:
 *   import "slick-carousel/slick/slick.css";
 *   import "slick-carousel/slick/slick-theme.css";
 *
 * Replace slide src values with your real assets.
 */

const SLIDES = [
  // Videos autoplay muted/looped. Use mp4/webm under public/videos/
  { id: "v1", type: "video", src: "/videos/paint_video.mp4" },
  { id: "v2", type: "video", src: "/videos/electro_video.mp4" },
];

export default function BannerWithSlideshow() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(.2,.9,.2,1)",
    accessibility: true,
    swipe: true,
    adaptiveHeight: false,
    // fade gives a cleaner background crossfade
    fade: true,
  };

  return (
    <section className="relative h-[600px] sm:h-[90vh] flex items-center overflow-hidden">
      {/* SLIDES - absolute, full-bleed */}
      <div
        className="absolute inset-0 -z-10"
        onMouseEnter={() => sliderRef.current?.slickPause?.()}
        onMouseLeave={() => sliderRef.current?.slickPlay?.()}
      >
        <Slider ref={sliderRef} {...settings}>
          {SLIDES.map((s) => (
            <div key={s.id} className="relative w-full h-[600px] sm:h-[90vh]">
              {s.type === "video" ? (
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  // preload metadata to balance performance
                  preload="metadata"
                  src={s.src}
                />
              ) : (
                <div
                  className="w-full h-full bg-center bg-cover"
                  style={{ backgroundImage: `url(${s.src})` }}
                  role="img"
                  aria-label=""
                />
              )}
              {/* optional subtle gradient overlay per-slide if you want unique tone:
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10 pointer-events-none" />
              */}
            </div>
          ))}
        </Slider>
      </div>

      {/* global overlay (dark) for consistent readability */}
      <div className="absolute inset-0 bg-black/60 -z-5 pointer-events-none" />

      {/* Foreground content (updated to highlight both divisions) */}
      <div className="relative z-10 container px-6">
        <div className="max-w-4xl md:mx-0">
          {/* micro-tag */}
          <span className="bg-[#CC0001] text-white px-3 py-2 rounded text-xs sm:text-sm font-medium uppercase tracking-wide inline-block">
            ElectroShield Industries
          </span>

          {/* main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug sm:leading-tight md:leading-[1.05] mt-4">
            Reliable Power Components{" "}
            <br className="hidden sm:block" />
            & Engineered Coatings
          </h1>

          {/* short description */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl">
            With several years of industrial manufacturing, we deliver precision transformer components
            that utilities and manufacturers trust for performance, safety, and consistency — and through
            our coatings division, advanced R&D drives long-lasting protection systems.
          </p>

          {/* credibility chips */}
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 text-sm font-medium text-slate-900 shadow-sm border border-slate-200">
              <Check className="w-3 h-3 text-[#b62b25] opacity-90" strokeWidth={2} />
              ISO 9001:2015 Certified
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 text-sm font-medium text-slate-900 shadow-sm border border-slate-200">
              <Check className="w-3 h-3 text-[#b62b25] opacity-90" strokeWidth={1.6} />
              Several Year's of Experience
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 text-sm font-medium text-slate-900 shadow-sm border border-slate-200">
              <Check className="w-3 h-3 text-[#b62b25] opacity-90" strokeWidth={1.6} />
              In-house R&D & Testing
            </div>
          </div>

          {/* main CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
             <Link href="/#electro-shield">
              <button className="inline-block border border-white/30 text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition">
                Explore ElectroShield
              </button>
            </Link>
            <Link href="/#dream-shield">
              <button className="inline-block bg-[#CC0001] text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-[#b70000] transition">
                Explore DreamShield
              </button>
            </Link>
          </div>

          {/* divider + dual division cards */}

        </div>
      </div>

    </section>
  );
}
