// components/MarqueeShowcase.jsx
"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * Light palette:
 * - Card: white (#fff)
 * - Page beige: #F6F0E8 (soft, matches your sections)
 * - Accent red: #cc0001
 * - Subtle border: rgba(0,0,0,0.08)
 */

const baseSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 4000,
  cssEase: "linear",
  swipe: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  variableWidth: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1536, settings: { slidesToShow: 6 } },
    { breakpoint: 1280, settings: { slidesToShow: 5 } },
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 640, settings: { slidesToShow: 2 } },
  ],
};

export default function MarqueeShowcase() {
  const leftMarquee = { ...baseSettings, rtl: false };
  const rightMarquee = { ...baseSettings, rtl: true };

  // Hardcoded data
  const logosTop = [
    { src: "https://picsum.photos/seed/1/200/200", alt: "Logo 1" },
    { src: "https://picsum.photos/seed/2/200/200", alt: "Logo 2" },
    { src: "https://picsum.photos/seed/3/200/200", alt: "Logo 3" },
    { src: "https://picsum.photos/seed/4/200/200", alt: "Logo 4" },
    { src: "https://picsum.photos/seed/5/200/200", alt: "Logo 5" },
    { src: "https://picsum.photos/seed/6/200/200", alt: "Logo 6" },
    { src: "https://picsum.photos/seed/7/200/200", alt: "Logo 7" },
  ];

  const logosBottom = [
    { src: "/images/gov1.png", alt: "Logo 8" },
    { src: "/images/gov2.png", alt: "Logo 9" },
    { src: "/images/gov3.png", alt: "Logo 10" },
    { src: "/images/gov1.png", alt: "Logo 11" },
    { src: "/images/gov2.png", alt: "Logo 12" },
    { src: "/images/gov3.png", alt: "Logo 13" },
  ];

  const titleTopRight = "Powering Diverse Industries";
  const titleBottomLeft = "Approved & Certified by Authorities";

  return (
    <section className="w-full mt-16 ">
      <div className="container space-y-10">
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <LightCard>
            <MaskedMarquee logos={logosTop} settings={leftMarquee} maskBase="#ffffff" />
          </LightCard>

          <TitleCard badge={"INDUSTRIES"} title={titleTopRight} />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <TitleCard badge={"GOVERNMENT APPROVALS"} title={titleBottomLeft} align="left" />

          <LightCard className="lg:col-span-2">
            <MaskedMarquee logos={logosBottom} settings={rightMarquee} maskBase="#ffffff" />
          </LightCard>
        </div>
      </div>
    </section>
  );
}

/* ---------- UI atoms (light theme) ---------- */

function LightCard({ children, className = "" }) {
  return (
    <div
      className={[
        "lg:col-span-2 relative rounded-2xl ",
        "bg-white text-neutral-900",
        "border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]",
        "p-3 sm:p-4 md:p-5",
        className,
      ].join(" ")}
      style={{ backgroundColor: "#ffffff" }}
    >
      {children}
      {/* thin accent underline */}
      <div
        className="pointer-events-none absolute -bottom-[1px] left-0 right-0 h-[3px] rounded-b-2xl"
        style={{ background: "linear-gradient(90deg,#cc0001,rgba(204,0,1,0.4),transparent)" }}
      />
    </div>
  );
}

function TitleCard({ badge, title, align = "left" }) {
  return (
    <div
      className={[
        "rounded-2xl bg-white",
        "border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]",
        "p-6 sm:p-8 flex items-center",
        align === "left" ? "justify-start" : "justify-center",
      ].join(" ")}
    >
      <div className={align === "left" ? "text-left" : "text-center"}>
        <div className="inline-flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: "#cc0001" }} />
          <span className="uppercase tracking-[0.2em] text-xs text-neutral-500">
            {badge}
          </span>
        </div>
        <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
          {title}
        </h3>
        <div className="mt-3 h-[3px] w-24 rounded-full" style={{ backgroundColor: "#cc0001" }} />
      </div>
    </div>
  );
}

function MaskedMarquee({ logos, settings, maskBase = "#ffffff" }) {
  const items = [...logos, ...logos];

  return (
    <div className="relative h-full flex items-center justify-center">
      {/* edge fade masks */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 rounded-l-2xl"
        style={{
          background: `linear-gradient(90deg, ${maskBase} 0%, rgba(255,255,255,0) 100%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 rounded-r-2xl"
        style={{
          background: `linear-gradient(270deg, ${maskBase} 0%, rgba(255,255,255,0) 100%)`,
        }}
      />

      <Slider
        {...settings}
        className="[&_.slick-track]:flex [&_.slick-track]:items-center [&_.slick-slide>div]:px-5 w-full"
      >
        {items.map((logo, i) => (
          <div
            key={`${logo?.src}-${i}`}
            className="flex items-center justify-center h-full"
          >
            <LogoChip src={logo?.src} alt={logo?.alt || 'Logo'} eager={i < 6} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

function LogoChip({ src, alt, eager = false }) {
  return (
    <div
      className="h-32 w-32 flex items-center justify-center
                 p-2 rounded-xl bg-[rgba(0,0,0,0.03)] border border-black/10
                 hover:bg-[rgba(0,0,0,0.05)] transition"
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className="max-h-full max-w-full object-contain opacity-90 grayscale
                   hover:opacity-100 hover:grayscale-0
                   transition-transform duration-200 hover:scale-[1.05]"
      />
    </div>
  );
}


