"use client";
import React from "react";
import Button from "../UI/Button";
import Link from "next/link";

const Banner = () => {


  return (
    <section className="relative h-[600px] sm:h-[90vh] flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/banner_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container px-6">
        <div className="max-w-2xl mx-auto md:mx-0">
          {/* Tagline */}
          <span
            className="bg-[#CC0001] text-white px-3 py-2 rounded text-xs sm:text-sm font-medium uppercase tracking-wide inline-block"
          >
            Welcome to Electroshield
          </span>

          {/* Heading */}
          <h1
            className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug sm:leading-tight md:leading-[1.1em]"
          >
            Powering the Future of Transformers
          </h1>

          {/* Paragraph */}
          <p
            className="mt-4 text-sm sm:text-base md:text-lg text-white"
          >
            Electroshield Industries delivers advanced transformer components
            with innovation, precision, and reliability. From oil immersed circuit breakers to core
            laminations, we ensure consistent performance and durability.
          </p>

          {/* Buttons */}
          <div
            className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0"
          >
            <Link href="#products" passHref>
              <Button className="w-full sm:w-auto">Explore Products</Button>
            </Link>

            <Link href="#contact" passHref>
              <Button className="w-full sm:w-auto">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Banner;
