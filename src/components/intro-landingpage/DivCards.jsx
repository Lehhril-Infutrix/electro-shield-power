"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const divisions = [
  
  {
    name: "ElectroShield",
    description:
      "Providing precision-engineered transformer components designed for safety, reliability, and long-term power efficiency.",
    image: "/images/div_img5.webp", // replace with real asset
    href: "/electroshield",
  },
  {
    name: "DreamShield",
    description:
      "Delivering advanced protective and decorative finishes trusted for durability, aesthetics, and performance across industries.",
    image: "/images/div_img1.webp", // replace with real asset
    href: "/dreamshield",
  },
];


const DivCards = () => {
  return (
    <section className="w-full bg-slate-50 py-10 md:py-16 scroll-m-16" >
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-lg font-semibold text-red-600">
            Explore Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Discover Our Divisions
          </h2>
          <p className="mt-3 text-slate-600">
            We build industry-grade coatings and reliable power components backed by decades of
            R&D and manufacturing excellence. Explore our divisions to find solutions built for
            performance, safety, and sustainability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 d-card">
          {divisions.map((division, idx) => (
            <Link
              key={idx}
              href={division.href}
              className="group relative rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Background image */}
              <div className="relative h-120 w-full">
                <Image
                  src={division.image}
                  alt={division.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              </div>

              {/* Content overlay */}
              <div className="absolute flex flex-col items-center justify-center text-center px-6 text-white d-card-content">
                <h2 className="text-2xl md:text-3xl font-light uppercase tracking-wider mb-6">
                  {division.name}
                </h2>
                <p className="mb-5 text-sm md:text-base max-w-md">
                  {division.description}
                </p>
                <span
                  className="text-white font-semibold inline-flex items-center gap-1 border-b-2 border-transparent group-hover:border-white transition-border"
                >
                  {/* Learn More <ArrowRight className="w-4 h-4" /> */}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivCards;
