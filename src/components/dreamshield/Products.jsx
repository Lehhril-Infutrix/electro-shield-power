"use client";
import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import ReactDOM from "react-dom";

const products = [
  {
    image: "/images/product_01.webp",
    title: "Industrial Paints",
    short_desc: "Durable coatings designed for industrial applications.",
    subProducts: [
      { name: "PU", thumb: "/images/paint_1.png" },
      { name: "Epoxy", thumb: "/images/paint_2.png" },
      { name: "Q.D paints", thumb: "/images/paint_3.png" },
      { name: "Stoving paints", thumb: "/images/paint_4.png" },
      { name: "Synthetics enamel", thumb: "/images/paint_5.png" },
    ],
  },
  {
    image: "/images/product_02.webp",
    title: "Primers",
    short_desc: "High-performance primers for surface preparation.",
    subProducts: [
      { name: "Red oxide", thumb: "/images/primer_1.png" },
      { name: "Zinc Chromate", thumb: "/images/primer_2.png" },
      { name: "Cement primer", thumb: "/images/primer_3.png" },
      { name: "Zinc phosphate", thumb: "/images/primer_4.png" },
    ],
  },
  {
    image: "/images/product_03.webp",
    title: "Thinners",
    short_desc: "Reliable thinners for consistent application.",
    subProducts: [
      { name: "PU", thumb: "/images/thinner_1.png" },
      { name: "Epoxy", thumb: "/images/thinner_2.png" },
      { name: "NC", thumb: "/images/thinner_3.png" },
      { name: "Stoving", thumb: "/images/thinner_4.png" },
      { name: "Q.D. Cleaning", thumb: "/images/thinner_5.png" },
    ],
  },
  {
    image: "/images/product_04.webp",
    title: "Adhesives",
    short_desc: "Strong adhesives for industrial bonding.",
    subProducts: [{ name: "Adhesive", thumb: "/images/adhesive.png" }],
  },
];

export default function Products() {
  const [hoveredIdx, setHoveredIdx] = useState(null); // card/panel hover
  const [pinnedIdx, setPinnedIdx] = useState(null); // pinned by click (desktop) or persistent
  const [isMobileView, setIsMobileView] = useState(false);
  const activeIdx = pinnedIdx ?? hoveredIdx;

  const cardRefs = useRef([]);
  const panelRef = useRef(null);
  const [panelStyle, setPanelStyle] = useState({ left: 0, top: 0, placement: "right" });
  const PANEL_W = 320;

  const setCardRef = (el, i) => (cardRefs.current[i] = el);

  // detect if device supports hover (desktop) — fallback to width check
  useEffect(() => {
    function update() {
      // prefer feature-detection
      const canHover = window.matchMedia && window.matchMedia("(hover: hover)").matches;
      const small = window.innerWidth < 768;
      setIsMobileView(!canHover || small);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // compute floating panel position for desktop
  useLayoutEffect(() => {
    if (activeIdx == null || isMobileView) return;
    const card = cardRefs.current[activeIdx];
    if (!card) return;

    const cardRect = card.getBoundingClientRect();
    const viewportW = document.documentElement.clientWidth;
    const viewportH = document.documentElement.clientHeight;
    const scrollY = window.scrollY || window.pageYOffset;

    // overlap a bit so cursor doesn't fall in the void
    let left = cardRect.right - 12 + window.scrollX;
    let placement = "right";

    // if not enough space to right, place left
    if (left + PANEL_W > window.scrollX + viewportW - 8) {
      left = cardRect.left - PANEL_W + 12 + window.scrollX;
      placement = "left";
    }

    let top = cardRect.top + scrollY;
    const panelH = panelRef.current ? panelRef.current.offsetHeight : 200;
    const maxTop = window.scrollY + viewportH - panelH - 8;
    top = Math.max(window.scrollY + 8, Math.min(top, maxTop));

    setPanelStyle({ left, top, placement });
  }, [activeIdx, isMobileView]);

  // close pinned panel when clicking outside or pressing ESC (covers mobile bottom sheet closing as well)
  useEffect(() => {
    function onDocClick(e) {
      // if nothing pinned and not mobile, ignore
      if (pinnedIdx == null) return;
      const panelEl = panelRef.current;
      const clickedInsidePanel = panelEl && panelEl.contains(e.target);
      const clickedInsideCard =
        cardRefs.current[pinnedIdx] && cardRefs.current[pinnedIdx].contains(e.target);
      if (!clickedInsidePanel && !clickedInsideCard) setPinnedIdx(null);
    }
    function onKey(e) {
      if (e.key === "Escape") setPinnedIdx(null);
    }
    document.addEventListener("pointerdown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [pinnedIdx]);

  // desktop portal
  const desktopPortal =
    activeIdx != null && !isMobileView && typeof document !== "undefined"
      ? ReactDOM.createPortal(
          <div
            ref={panelRef}
            style={{
              position: "absolute",
              left: panelStyle.left,
              top: panelStyle.top,
              width: PANEL_W,
              zIndex: 9999,
            }}
            onPointerEnter={() => setHoveredIdx(activeIdx)}
            onPointerLeave={() => {
              if (pinnedIdx == null) setHoveredIdx(null);
            }}
          >
            {/* little connector arrow */}
            <div
              style={{
                position: "absolute",
                top: -8,
                left: panelStyle.placement === "right" ? 20 : undefined,
                right: panelStyle.placement === "left" ? 20 : undefined,
                width: 16,
                height: 16,
                transform: "rotate(45deg)",
                background: "white",
                borderLeft: "1px solid rgba(226,232,240,1)",
                borderTop: "1px solid rgba(226,232,240,1)",
                zIndex: 10000,
                filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.03))",
              }}
            />

            <div
              className="rounded-lg bg-white/95 border border-slate-200 shadow-xl p-4 backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-label={`${products[activeIdx].title} sub-products`}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                <img
                  src={products[activeIdx].image}
                  alt={products[activeIdx].title}
                  className="w-14 h-14 rounded-md object-cover flex-shrink-0 shadow-sm"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold text-slate-900 truncate">
                      {products[activeIdx].title}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setPinnedIdx((cur) => (cur === activeIdx ? null : activeIdx))}
                        className={`text-xs px-2 py-1 rounded-md border ${
                          pinnedIdx === activeIdx
                            ? "bg-[#CC0001] text-white border-[#CC0001]"
                            : "bg-white text-slate-700 border-slate-200"
                        } shadow-sm`}
                      >
                        {pinnedIdx === activeIdx ? "Pinned" : "Pin"}
                      </button>

                      <button
                        onClick={() => setPinnedIdx(null)}
                        aria-label="Close panel"
                        className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {products[activeIdx].short_desc || ""}
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-100 my-3" />

              {/* items */}
              <div className="grid grid-cols-1 gap-2">
                {products[activeIdx].subProducts.map((sp, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("clicked subproduct", sp.name || sp);
                    }}
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-50 transition-all duration-150 text-left focus:outline-none"
                  >
                    <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-slate-50 border border-slate-100">
                      <img src={sp.thumb || products[activeIdx].image} alt={sp.name || sp} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-slate-900 truncate">{sp.name || sp}</div>
                    </div>

                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#CC0001] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414L13.414 10l-4.707 4.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg> */}
                  </button>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  // mobile bottom sheet (no portal) — simple slide-up
  const mobileSheet =
    activeIdx != null && isMobileView ? (
      <div
        ref={panelRef}
        aria-hidden={activeIdx == null}
        className="fixed inset-x-0 bottom-0 z-50"
        onClick={(e) => {
          // clicking backdrop closes if not on content
          if (e.target === e.currentTarget && pinnedIdx == null) setHoveredIdx(null);
        }}
      >
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

        <div
          className="relative mx-auto max-w-3xl"
          style={{
            transform: "translateY(0)",
            transition: "transform 220ms ease",
          }}
        >
          <div className="rounded-t-xl bg-white border border-slate-100 shadow-xl p-4 max-h-[70vh] overflow-auto">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <img src={products[activeIdx].image} alt="" className="w-12 h-12 rounded-md object-cover" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">{products[activeIdx].title}</div>
                  <div className="text-xs text-slate-500">{products[activeIdx].short_desc}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* <button
                  onClick={() => setPinnedIdx((cur) => (cur === activeIdx ? null : activeIdx))}
                  className={`text-xs px-2 py-1 rounded-md border ${pinnedIdx === activeIdx ? "bg-[#CC0001] text-white border-[#CC0001]" : "bg-white text-slate-700 border-slate-200"}`}
                >
                  {pinnedIdx === activeIdx ? "Pinned" : "Pin"}
                </button> */}

                <button onClick={() => setHoveredIdx(null)} className="p-2 rounded-md text-slate-600 hover:bg-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {products[activeIdx].subProducts.map((sp, i) => (
                <button
                  key={i}
                  onClick={() => {
                    console.log("mobile clicked", sp.name || sp);
                  }}
                  className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-50 w-full text-left"
                >
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#CC0001]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414L13.414 10l-4.707 4.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg> */}

                  <div className="w-12 h-12 rounded-md overflow-hidden bg-slate-50 border border-slate-100">
                    <img src={sp.thumb || products[activeIdx].image} alt={sp.name || sp} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-900">{sp.name || sp}</div>
                  </div>

                  
                </button>
              ))}
            </div>

            {/* <div className="mt-4 text-center text-xs text-slate-500">Tap outside or press close to dismiss</div> */}
          </div>
        </div>
      </div>
    ) : null;

  return (
    <section className="py-6 sm:py-10 md:py-20 bg-white" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold uppercase text-[#CC0001] mb-2">Our Products</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-heading mb-3 leading-tight">Performance Backed by Science</h3>
          <p className="text-gray-600">Electroshield Power Industries offers a wide range of coatings, primers, thinners, and adhesives.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, idx) => (
            <article
              key={idx}
              ref={(el) => setCardRef(el, idx)}
              onPointerEnter={() => {
                if (!isMobileView) setHoveredIdx(idx);
              }}
              onPointerLeave={() => {
                if (!isMobileView && pinnedIdx == null) setHoveredIdx((cur) => (cur === idx ? null : cur));
              }}
              className="group relative rounded-xl bg-white border border-slate-100 shadow-sm transition-transform duration-200 hover:-translate-y-1"
            >
              <button
                type="button"
                className="w-full text-left"
                onClick={() => {
                  // desktop: toggle pin; mobile: open/close bottom sheet
                  if (isMobileView) {
                    setHoveredIdx((cur) => (cur === idx ? null : idx));
                  } else {
                    setPinnedIdx((cur) => (cur === idx ? null : idx));
                  }
                }}
                aria-expanded={activeIdx === idx}
              >
                <div className="w-full h-44 md:h-64 overflow-hidden rounded-t-xl">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4 md:p-6">
                  <h4 className="text-lg md:text-xl font-semibold text-heading mb-1">{p.title}</h4>
                  <p className="text-sm text-gray-600">{p.short_desc}</p>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* desktop floating panel */}
      {desktopPortal}

      {/* mobile bottom sheet */}
      {mobileSheet}
    </section>
  );
}
