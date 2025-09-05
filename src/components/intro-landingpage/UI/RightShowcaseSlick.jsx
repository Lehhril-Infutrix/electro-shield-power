// components/RightShowcaseSlick.jsx
"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RightShowcaseSlick({
  items = [
    {
      id: "paint-1",
      title: "Advanced Coatings",
      caption: "Durable & decorative finishes",
      image: "/images/slider_paint_1.webp",
      href: "/dreamshield",
    },
    {
      id: "transformer-1",
      title: "Transformer Components",
      caption: "Precision-engineered cores & parts",
      image: "/images/slider_transformer_1.webp",
      href: "/electroshield",
    },
  ],
  settings: userSettings = {},
}) {
  const baseSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    accessibility: true,
    swipe: true,
    draggable: true,
    pauseOnFocus: true,
    // custom arrows rendered below
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
    responsive: [
      { breakpoint: 768, settings: { arrows: false, dots: true } },
    ],
    ...userSettings,
  };

  return (
    <div className="w-full max-w-md overflow-hidden">
      <Slider {...baseSettings} className="relative">
        {items.map((it) => (
          <div key={it.id} className="relative h-64 md:h-72">
            <Link href={it.href} className="block">
              <div className="relative w-full h-64 md:h-72">
                <Image
                  src={it.image}
                  alt={it.title}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              </div>

              {/* overlay content */}
              <div className="absolute left-4 bottom-4 bg-black/60 backdrop-blur-md text-white rounded-md px-4 py-3 max-w-[85%]">
                <div className="text-sm font-semibold">{it.title}</div>
                <div className="text-xs text-white/80 mt-1">{it.caption}</div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

/* Custom arrow components (use lucide-react icons) */
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      aria-label="Previous slide"
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 text-slate-900 shadow-sm hover:scale-105 transition !flex items-center justify-center cursor-pointer"
      style={{ ...style }}
    >
      <ChevronLeft className="w-5 h-5" />
    </button>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      aria-label="Next slide"
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 text-slate-900 !flex items-center justify-center shadow-sm hover:scale-105 transition cursor-pointer"
      style={{ ...style }}
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  );
}
