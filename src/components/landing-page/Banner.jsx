"use client";
import React from "react";
import Button from "../UI/Button";

const Banner = () => {
  

  return (
    <section className="relative h-[90vh] flex items-center bg-cover bg-center banner">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container px-6">
        <div className="max-w-2xl">
          <span
            data-aos="fade-down"
            className="bg-[#CC0001] text-white px-3 py-2 rounded text-sm font-medium uppercase tracking-wide rounded-xl inline-block"
          >
            Welcome to Electroshield
          </span>

          <h1
            data-aos="fade-right"
            className="mt-6 text-6xl font-bold text-white leading-[1.1em]"
          >
            Powering the Future of{" "}
            <span className="text-[#CC0001]">Transformers</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-lg text-white"
          >
            Electroshield Power Industries delivers advanced transformer components
            with innovation, precision, and reliability. From circuit breakers to core
            laminations, we ensure consistent performance and durability.
          </p>

          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="mt-8 flex space-x-4"
          >
            <Button>Explore Products</Button>
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
