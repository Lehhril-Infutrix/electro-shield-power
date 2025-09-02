"use client";
import React, { useState } from "react";
import Button from "../UI/Button";

const products = [
  {
    image: "/images/product_1.webp",
    title: "Internal Circuit Breakers",
    short_desc:
      "Reliable breakers designed for transformer protection.",
    long_desc:
      "Our internal circuit breakers are engineered for maximum transformer safety and durability. They safeguard against overloads and faults, ensuring continuous, reliable performance in demanding electrical environments.",
  },
  {
    image: "/images/product_2.webp",
    title: "CNC-Cut CRGO Laminations",
    short_desc:
      "Precision laminations for efficient transformers.",
    long_desc:
      "CNC-cut CRGO laminations are crafted with high accuracy to minimize core losses and maximize transformer efficiency. They ensure uniform stacking, reduced vibration, and long-term operational stability in distribution and power transformers.",
  },
  {
    image: "/images/product_3.webp",
    title: "Amorphous Loops",
    short_desc:
      "Advanced loops for reduced energy loss.",
    long_desc:
      "Amorphous loops are manufactured using high-quality materials that significantly lower no-load losses. These loops contribute to sustainable energy distribution while enhancing efficiency and environmental responsibility.",
  },
  {
    image: "/images/product_4.webp",
    title: "DPC Conductors",
    short_desc:
      "Reliable double paper-covered conductors.",
    long_desc:
      "Our DPC conductors are designed for high mechanical strength and excellent insulation properties. They provide reliable winding solutions for transformers, ensuring safety, durability, and consistent performance under varying loads.",
  },
  {
    image: "/images/product_5.webp",
    title: "Transformer Tanks",
    short_desc:
      "Durable tanks built for transformer safety.",
    long_desc:
      "Transformer tanks are fabricated with precision welding and robust materials, offering leak-proof, corrosion-resistant enclosures. They protect vital transformer components while ensuring safety, durability, and ease of maintenance.",
  },
  {
    image: "/images/product_6.webp",
    title: "Radiators",
    short_desc:
      "Efficient cooling for longer transformer life.",
    long_desc:
      "Our transformer radiators are engineered to deliver optimal cooling performance. By dissipating excess heat efficiently, they help extend transformer lifespan and improve operational reliability, even under heavy load conditions.",
  },
];


const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="py-20 bg-white">
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
            Engineered for Reliability
          </h3>
          <p className="text-gray-600">
            Electroshield Power delivers a full range of transformer components,
            combining advanced technology with unmatched quality standards.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
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
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
          ></div>

          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl mx-4 animate-[fadeIn_0.3s_ease-out] p-6">
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
            <div className="w-full h-72 overflow-hidden rounded-2xl m-auto">
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
