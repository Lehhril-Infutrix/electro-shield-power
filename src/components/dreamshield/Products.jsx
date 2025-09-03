"use client";
import React, { useState } from "react";
import Button from "../UI/Button";

const products = [
  {
    image: "/images/product_01.webp",
    title: "Industrial Paints",
    short_desc:
      "Durable coatings designed for industrial applications.",
    long_desc:
      "Our industrial paints include PU, Epoxy, and specialized coatings engineered for superior adhesion, durability, and resistance. They provide long-lasting protection and finish for surfaces across industries.",
  },
  {
    image: "/images/product_02.webp",
    title: "Primers",
    short_desc:
      "High-performance primers for surface preparation.",
    long_desc:
      "We offer a range of primers including red oxide, zinc chromate, and epoxy-based solutions. These primers ensure strong adhesion, corrosion resistance, and a smooth base for further coating applications.",
  },
  {
    image: "/images/product_03.webp",
    title: "Thinners",
    short_desc:
      "Reliable thinners for consistent application.",
    long_desc:
      "Our premium-grade thinners are formulated for use with a wide range of paints and coatings. They ensure proper viscosity, ease of application, and a flawless finish while maintaining product integrity.",
  },
  {
    image: "/images/product_04.webp",
    title: "Adhesives",
    short_desc:
      "Strong adhesives for industrial bonding.",
    long_desc:
      "Our adhesives deliver high bond strength and versatility for multiple substrates. They are developed with advanced formulations to provide durability, reliability, and long-term performance in industrial use.",
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="py-6 sm:py-10 md:py-20 bg-white scroll-m-16" id="products">
      {/* Section heading */}
      <div className="container">
        <div
          className="text-center mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-sm font-semibold uppercase text-[#CC0001] mb-2">
            Our Products
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            Performance Backed by Science
          </h3>
          <p className="text-gray-600">
            Electroshield Power Industries (Dreamshield Division) offers a wide range of coatings, primers, thinners, and adhesives. Our products are engineered to ensure long-lasting performance, quality, and customer satisfaction.
          </p>
        </div>

        {/* Products grid */}
        <div className="justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-xl shadow-md overflow-hidden transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 200} // stagger cards
              data-aos-duration="1000"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            onClick={() => setSelectedProduct(null)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity z-40"
          ></div>

          {/* Modal */}
          <div className="relative z-[60] bg-white rounded-2xl shadow-2xl w-full max-w-xl mx-4 animate-[fadeIn_0.3s_ease-out] p-6">
            {/* Close button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute -top-4 -right-4 rounded-full p-2 bg-gray-100 hover:bg-gray-300 transition z-30 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10 3.636 5.05a1 1 0 011.414-1.414L10 8.586z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="w-full h-40 md:h-72 overflow-hidden rounded-2xl m-auto">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-cover transform transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="py-4">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 mt-2">
                {selectedProduct.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                {selectedProduct.long_desc}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Products;