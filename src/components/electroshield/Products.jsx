"use client";
import React, { useEffect, useState } from "react";
import Button from "../UI/Button";

const products = [
  {
    image: "/images/oil_circuit.jpg",
    title: "Internal Circuit Breakers",
    short_desc: "Reliable breakers designed for transformer protection.",
    long_desc:
      "Oil-immersed internal circuit breakers engineered to protect transformers from faults and overloads. Designed for consistent, long-term performance in demanding grid conditions.",
    variants: [
      {
        name: "1-Phase Oil-Immersed Internal Circuit Breaker",
        description:
          "Compact protection for single-phase distribution transformers. Uses oil as both insulation and arc-quenching medium, ensuring quick fault isolation and safe restoration of service.",
        bullets: [
          "Ideal for small-scale and residential transformer setups",
          "Oil medium provides arc interruption and insulation",
          "Reliable operation under fluctuating load conditions",
        ],
      },
      {
        name: "3-Phase Oil-Immersed Internal Circuit Breaker",
        description:
          "Heavy-duty breaker for three-phase transformers in industrial and utility environments. Delivers stable protection against faults across all three phases.",
        bullets: [
          "Built for large distribution and industrial transformers",
          "Ensures synchronized tripping across three phases",
          "Durable design with proven reliability in harsh environments",
        ],
      },
    ],
  },
  {
    image: "/images/bushing.jpg",
    title: "Transformer Accessories",
    short_desc: "High-quality accessories that improve safety and longevity.",
    long_desc:
      "ElectroShield supplies precision transformer accessories designed to ensure reliability, durability, and ease of assembly. Our range includes fittings, clamps, and core bolt/birods — all manufactured to meet strict industry standards for safety and performance.",
    variants: [
      {
        name: "Fittings",
        description:
          "Essential parts like LV and HV bushings that maintain safe current flow in and out of transformers while providing long service life and insulation.",
        bullets: [
          "LV bushings suitable up to 1.1 kV service voltage",
          "HV bushings available for 11 kV, 22 kV, and 33 kV systems",
          "Manufactured with brass conductors and durable insulation",
        ],
      },
      {
        name: "Clamps",
        description:
          "Heavy-duty clamps that secure components inside the transformer assembly, ensuring structural integrity and reducing vibration during operation.",
        bullets: [
          "High mechanical strength for long-term stability",
          "Corrosion-resistant coatings for outdoor and indoor use",
          "Custom sizes available for distribution and power transformers",
        ],
      },
      {
        name: "Core Bolt / Birods",
        description:
          "Bolts and birods designed to hold transformer cores firmly in place. Built from high-tensile steel for mechanical stability and electrical reliability.",
        bullets: [
          "Provides core clamping to prevent shifting under load",
          "Zinc-coated or epoxy-coated options for rust prevention",
          "Engineered for precise fit and easy installation",
        ],
      },
    ],
  },
];




const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 1) Lock body scroll when modal is open, restore on close/unmount
  useEffect(() => {
    if (!selectedProduct) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedProduct]);

  // Optional: close on Esc key (because users love pressing random keys)
  useEffect(() => {
    if (!selectedProduct) return;
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedProduct]);

  return (
    <section className="py-6 sm:py-10 md:py-20 bg-white scroll-m-16" id="products">
      <div className="container">
        {/* Section heading */}
        <div
          className="text-center mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-sm font-semibold uppercase text-[#CC0001] mb-2">
            Our Products
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-heading mb-3 leading-tight">
            Engineered for Reliability
          </h3>
          <p className="text-gray-600">
            ElectroShield specializes in oil immersed internal circuit breakers and transformer fittings,
            built for long service life and consistent performance.
          </p>
        </div>

        {/* Products grid */}
        <div className="flex items-stretch justify-center gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-md overflow-hidden transition-transform duration-300 border border-gray-300 flex-1 max-w-[450px]"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-duration="1000"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-52 object-contain"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-heading mb-2">
                  {product.title}
                </h4>
                <p className="mb-2">{product.short_desc}</p>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="mt-2 bg-[#CC0001] cursor-pointer text-white font-medium px-4 py-2 rounded-lg hover:bg-[#CC000190] transition-colors"
                >
                  Show Description
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            onClick={() => setSelectedProduct(null)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity z-40"
          />

          {/* 2) Fixed-height modal with internal scroll */}
          <div
            className="relative z-[60] bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 overflow-hidden"
            style={{
              maxHeight: "85vh", // fixed-ish height
            }}
          >
            {/* sticky header with close */}
            <div className="sticky top-0 bg-white rounded-t-2xl p-6 border-b border-b-gray-300 flex justify-between items-center">

              <h4 className="text-2xl font-bold text-gray-900">
                {selectedProduct.title}
              </h4>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-white h-8 w-8 flex items-center justify-center top-5 right-4 rounded-full p-2 bg-red-500 hover:bg-red-400 transition z-30 cursor-pointer"
                aria-label="Close"
                title="Close"
              >
                ✕
              </button>
            </div>

            {/* Scrollable content area */}
            <div className="overflow-y-auto overflow-x-hidden px-6 pb-6" style={{ maxHeight: "calc(85vh - 72px)" }}>
              {/* Image */}
              <div className="w-full h-40 md:h-72 overflow-hidden rounded-2xl m-auto mt-4">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="py-4">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedProduct.long_desc}
                </p>

                {selectedProduct.variants?.map((variant, i) => (
                  <div key={i} className="mb-6">
                    <h5 className="text-xl font-semibold text-gray-900">
                      {variant.name}
                    </h5>
                    <p className="text-gray-700 mt-2">{variant.description}</p>
                    {variant.bullets && (
                      <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-1">
                        {variant.bullets.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
