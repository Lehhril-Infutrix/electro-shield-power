"use client";
import React from "react";

export default function MarqueeShowcase() {
  const logosTop = [
    { src: "/images/company1.png", alt: "Logo 1", title: "Mahashakti Energy" },
    { src: "/images/company2.png", alt: "Logo 2", title: "PP Industries Pvt Ltd" },
    { src: "/images/company3.png", alt: "Logo 3", title: "Aggarwal Steel Industries" },
    { src: "/images/company4.png", alt: "Logo 4", title: "Jayco Electricals" },
    { src: "/images/company5.png", alt: "Logo 5", title: "Amrest Innovative Power Solutions" },
    { src: "/images/company6.png", alt: "Logo 6", title: "Geesons Transformers" },
    { src: "/images/company7.png", alt: "Logo 7", title: "Suman Electricals" },
    { src: "/images/company8.png", alt: "Logo 8", title: "Hi-Tech Transformers" },
    { src: "/images/company9.png", alt: "Logo 9", title: "UP Transformers India Pvt Ltd" },
    { src: "/images/company10.png", alt: "Logo 10", title: "PP Industries" },
  ];

  const logosBottom = [
    { src: "/images/gov1.png", alt: "DAVVNL",  title: "Dakshinanchal Vidyut Vitran Nigam" },
    { src: "/images/gov2.png", alt: "PKVVNL", title: "Paschim Kshetra Vidyut Vitaran Nigam" },
    { src: "/images/gov3.png", alt: "MVVNL",  title: "Madhyanchal Vidyut Vitaran Nigam" },
    { src: "/images/gov4.png", alt: "DVVNL",  title: "Dakshinanchal Vidyut Vitaran Nigam" },
    { src: "/images/gov11.png", alt: "JVVNL",  title: "Jaipur Vidyut Vitran Nigam Ltd." },
    { src: "/images/gov22.png", alt: "JDVVNL", title: "Jodhpur Vidyut Vitran Nigam Ltd." },
    { src: "/images/gov33.png", alt: "AVVNL", title: "Ajmer Vidyut Vitran Nigam Ltd." },
  ];

  return (
    <section className="w-full mt-8 sm:mt-12 md:mt-16 scroll-mt-28 px-4 sm:px-6" id="our-clients">
      <div className="container space-y-6 sm:space-y-8 md:space-y-10 max-w-7xl mx-auto">
        {/* Row 1 */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 items-stretch">
          <LightCard>
            <Marquee items={logosTop} reverse={false} />
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
            <Marquee items={logosBottom} reverse={true} />
          </LightCard>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pure CSS Marquee ---------- */
function Marquee({ items, reverse }) {
  const renderItems = (suffix = "") =>
    items.map((logo, i) => (
      <div
        key={`${logo.src}-${i}${suffix}`}
        className="flex-shrink-0 px-3 sm:px-4 md:px-5"
      >
        <LogoChip
          src={logo.src}
          alt={logo.alt || "Logo"}
          title={logo.title}
          eager={i < 6}
        />
      </div>
    ));

  return (
    <div className="relative h-full flex items-center justify-center min-h-[140px] sm:min-h-[160px] overflow-hidden">
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scroll-left-2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes scroll-right-2 {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: ${reverse ? "scroll-right" : "scroll-left"} 26s linear infinite;
        }

        .marquee-track-2 {
          position: absolute;
          top: 0;
          left: 0;
          animation-name: ${reverse ? "scroll-right-2" : "scroll-left-2"};
        }

        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="marquee-container relative w-full overflow-hidden">
        <div className="marquee-track">
          {renderItems("-a")}
        </div>
        <div className="marquee-track marquee-track-2">
          {renderItems("-b")}
        </div>
      </div>
    </div>
  );
}

/* ---------- Cards ---------- */
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
    <div className="flex flex-col items-center justify-start w-[96px] sm:w-[120px] md:w-[140px]">
      <div
        className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 flex items-center justify-center
                   p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[rgba(0,0,0,0.03)] border border-black/10
                   hover:bg-[rgba(0,0,0,0.05)] transition"
      >
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          className="max-h-full max-w-full object-contain opacity-90
                     hover:opacity-100 transition-transform duration-200 hover:scale-[1.05]"
        />
      </div>
      {title && (
        <p className="w-full text-center mt-1.5 sm:mt-2 text-[10px] sm:text-xs font-medium text-neutral-700 line-clamp-2">
          {title}
        </p>
      )}
    </div>
  );
}