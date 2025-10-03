"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

/**
 * Why this behaves:
 * - slidesPerView: 'auto' on small screens + min-width on slides = no squish
 * - 6-up on lg via breakpoints
 * - Autoplay with delay: 0 + speed gives true marquee effect
 * - reverseDirection toggles row direction cleanly
 */

const MOBILE_MIN_W = 96;   // px per chip on phones
const TABLET_MIN_W = 128;  // px per chip on small tablets
const DESKTOP_ITEMS = 6;   // keep 6-up on desktop
const SCROLL_SPEED = 3000; // higher = slower movement; lower = faster

export default function MarqueeShowcase() {
  const logosTop = [
    { src: "/images/company1.png", alt: "Logo 1", title: "Mahashakti Energy" },
    { src: "/images/company2.png", alt: "Logo 2", title: "PP Industries" },
    { src: "/images/company3.png", alt: "Logo 3", title: "Aggarwal Steel Industries" },
    { src: "/images/company1.png", alt: "Logo 4", title: "Mahashakti Energy" },
    { src: "/images/company2.png", alt: "Logo 5", title: "PP Industries Pvt Ltd" },
    { src: "/images/company3.png", alt: "Logo 6", title: "Aggarwal Steel Industries" },
  ];

  const logosBottom = [
    { src: "/images/gov1.png", alt: "JVVNL",  title: "Jaipur Vidyut Vitran Nigam" },
    { src: "/images/gov2.png", alt: "JDVVNL", title: "Jodhpur Vidyut Vitran Nigam" },
    { src: "/images/gov3.png", alt: "AVVNL",  title: "Ajmer Vidyut Vitran Nigam" },
    { src: "/images/gov1.png", alt: "JVVNL",  title: "Jaipur Vidyut Vitran Nigam" },
    { src: "/images/gov2.png", alt: "JDVVNL", title: "Jodhpur Vidyut Vitran Nigam" },
    { src: "/images/gov3.png", alt: "AVVNL",  title: "Ajmer Vidyut Vitran Nigam" },
  ];

  return (
    <section className="w-full mt-8 sm:mt-12 md:mt-16 scroll-mt-28 px-4 sm:px-6" id="our-clients">
      <div className="container space-y-6 sm:space-y-8 md:space-y-10 max-w-7xl mx-auto">
        {/* Row 1 */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 items-stretch">
          <LightCard>
            <MarqueeSwiper items={logosTop} reverse={false} />
          </LightCard>
          <TitleCard badge="Our Clients" title="Powering Diverse Industries" />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 items-stretch">
          <TitleCard
            badge="GOVERNMENT APPROVALS"
            title="Approved & Certified by Authorities"
            align="left"
          />
          <LightCard className="lg:col-span-2">
            <MarqueeSwiper items={logosBottom} reverse={true} />
          </LightCard>
        </div>
      </div>
    </section>
  );
}

/* ---------- Swiper marquee ---------- */
function MarqueeSwiper({ items, reverse }) {
  // Double the array to ensure continuity even if loop duplicates glitch
  const slides = [...items, ...items, ...items, ...items];

  return (
    <div className="relative h-full flex items-center justify-center min-h-[140px] sm:min-h-[160px]">
      <Swiper
        modules={[Autoplay, FreeMode]}
        loop
        freeMode={{ enabled: true, momentum: false }}
        allowTouchMove={false}                 // marquee, not a gallery
        slidesPerView={"auto"}                 // mobile: size by content width
        spaceBetween={16}
        speed={SCROLL_SPEED}
        autoplay={{
          delay: 0,                            // continuous
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          reverseDirection: !!reverse,
        }}
        breakpoints={{
          1024: {                               // lg and up: lock to 6 visible
            slidesPerView: DESKTOP_ITEMS,
            spaceBetween: 20,
          },
        }}
        className="w-full"
      >
        {slides.map((logo, i) => (
          <SwiperSlide
            key={`${logo.src}-${i}`}
            // width rules for 'auto' mode; on lg we let Swiper handle the 6-up
            className="!w-auto lg:!w-auto"
          >
            <div className="px-3 sm:px-4 md:px-5">
              <div className={`shrink-0 min-w-[${MOBILE_MIN_W}px] sm:min-w-[${TABLET_MIN_W}px] lg:min-w-0`}>
                <LogoChip src={logo.src} alt={logo.alt || "Logo"} title={logo.title} eager={i < 6} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

/* ---------- Cards (unchanged visuals) ---------- */
function LightCard({ children, className = "" }) {
  return (
    <div
      className={[
        "lg:col-span-2 relative rounded-xl sm:rounded-2xl bg-white text-neutral-900",
        "border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-3 sm:p-4 md:p-5",
        className,
      ].join(" ")}
    >
      {children}
      <div
        className="pointer-events-none absolute -bottom-[1px] left-0 right-0 h-[2px] sm:h-[3px] rounded-b-xl sm:rounded-b-2xl"
        style={{ background: "linear-gradient(90deg,#cc0001,rgba(204,0,1,0.4),transparent)" }}
      />
    </div>
  );
}

function TitleCard({ badge, title, align = "left" }) {
  return (
    <div
      className={[
        "rounded-xl sm:rounded-2xl bg-white",
        "border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]",
        "p-5 sm:p-6 md:p-8 flex items-center min-h-[140px] sm:min-h-[160px]",
        align === "left" ? "justify-start" : "justify-center",
      ].join(" ")}
    >
      <div className={align === "left" ? "text-left" : "text-center"}>
        <div className="inline-flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full" style={{ backgroundColor: "#cc0001" }} />
          <span className="uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs text-neutral-500">
            {badge}
          </span>
        </div>
        <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 leading-tight">
          {title}
        </h3>
        <div className="mt-2.5 sm:mt-3 h-[2.5px] sm:h-[3px] w-20 sm:w-24 rounded-full" style={{ backgroundColor: "#cc0001" }} />
      </div>
    </div>
  );
}

/* ---------- Logo chip ---------- */
function LogoChip({ src, alt, eager = false, title }) {
  return (
    <div className="flex flex-col items-center justify-start">
      <div
        className="h-10 w-10 sm:h-24 sm:w-24 md:h-28 md:w-28 flex items-center justify-center
                   p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[rgba(0,0,0,0.03)] border border-black/10
                   hover:bg-[rgba(0,0,0,0.05)] transition"
      >
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          className="max-h-full max-w-full object-contain opacity-90 grayscale
                     hover:opacity-100 hover:grayscale-0 transition-transform duration-200 hover:scale-[1.05]"
        />
      </div>
      {title && (
        <p className="w-[88px] sm:w-auto text-center mt-1.5 sm:mt-2 text-[10px] sm:text-sm font-medium text-neutral-700 line-clamp-2">
          {title}
        </p>
      )}
    </div>
  );
}
