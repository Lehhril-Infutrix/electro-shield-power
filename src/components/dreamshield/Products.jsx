"use client";
import React, { useEffect, useState, useRef } from "react";

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
  const [openIdx, setOpenIdx] = useState(null);
  const closeBtnRef = useRef(null);

  // lock body scroll when modal open
  useEffect(() => {
    if (openIdx == null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [openIdx]);

  // esc to close, focus the close button on open
  useEffect(() => {
    if (openIdx == null) return;
    const onKey = (e) => e.key === "Escape" && setOpenIdx(null);
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [openIdx]);

  return (
    <section className="py-6 sm:py-10 md:py-20 bg-white" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold uppercase text-[#CC0001] mb-2">
            Our Products
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-heading mb-3 leading-tight">
            Performance Backed by Science
          </h3>
          <p className="text-gray-600">
            ElectroShield Industries offers a focused range of coatings, primers,
            thinners, and adhesives developed through R&amp;D and proven testing.
          </p>
        </div>

        {/* product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, idx) => (
            <article
              key={idx}
              className="group relative rounded-xl bg-white border border-slate-100 shadow-sm transition-transform duration-200 hover:-translate-y-1"
            >
              <button
                type="button"
                className="w-full text-left"
                onClick={() => setOpenIdx(idx)}
                aria-haspopup="dialog"
                aria-expanded={openIdx === idx}
                aria-controls={`product-modal-${idx}`}
              >
                <div className="w-full h-44 md:h-64 overflow-hidden rounded-t-xl">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h4 className="text-lg md:text-xl font-semibold text-heading mb-1">
                    {p.title}
                  </h4>
                  <p className="text-sm text-gray-600">{p.short_desc}</p>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* modal */}
      {openIdx != null && (
        <div
          id={`product-modal-${openIdx}`}
          role="dialog"
          aria-modal="true"
          aria-label={`${products[openIdx].title} sub-products`}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/45 backdrop-blur-sm"
            onClick={() => setOpenIdx(null)}
          />

          {/* dialog */}
          <div className="relative z-[60] bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-4">
            {/* header */}
            <div className="sticky top-0 bg-white rounded-t-2xl p-5 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={products[openIdx].image}
                  alt={products[openIdx].title}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <div className="text-sm md:text-lg font-semibold text-slate-900">
                    {products[openIdx].title}
                  </div>
                  <div className="text-sm md:text-base text-slate-500">
                    {products[openIdx].short_desc}
                  </div>
                </div>
              </div>

              <button
                ref={closeBtnRef}
                onClick={() => setOpenIdx(null)}
                className="p-2 rounded-full text-slate-600 hover:bg-slate-100 bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300 h-8 w-8 flex items-center justify-center"
                aria-label="Close"
                title="Close"
              >
                ✕
              </button>
            </div>

            {/* body: fixed height, scroll inside */}
            <div className="px-5 pb-5 overflow-y-auto" style={{ maxHeight: "78vh" }}>
              {/* sub-products grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-5">
                {products[openIdx].subProducts.map((sp, i) => (
                  <button
                    key={i}
                    onClick={() => console.log("Clicked:", sp.name)}
                    className="flex items-center gap-4 p-3 lg:p-4 rounded-xl border border-slate-200 hover:border-[#CC0001] hover:bg-slate-50 transition"
                  >
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden bg-slate-50 border border-slate-100 flex-shrink-0">
                      <img
                        src={sp.thumb || products[openIdx].image}
                        alt={sp.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <div className="text-base lg:text-lg font-medium text-slate-900">
                        {sp.name}
                      </div>
                      {/* placeholder for a tiny descriptor if you add one later */}
                      {/* <div className="text-xs text-slate-500">High adhesion</div> */}
                    </div>
                  </button>
                ))}
              </div>

              {/* helpful note / CTA */}
              <div className="mt-6 text-center text-base text-slate-700">
                Need a client-specific formulation? We do custom R&amp;D and testing.
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
