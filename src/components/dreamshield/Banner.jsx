"use client";
import React from "react";
import Button from "../UI/Button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

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
        <source src="/videos/paint_video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional dark layer) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container px-6">
        <div className="max-w-3xl mx-auto md:mx-0">
          <span
            className="bg-[#CC0001] text-white px-3 py-2 rounded text-xs sm:text-sm font-medium uppercase tracking-wide inline-block"
          >
            Welcome to Dreamshield
          </span>
          {/* Heading */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug sm:leading-tight md:leading-[1.1em]"
          >
            Coating Innovation <br /> Since 1978
          </h1>

          {/* Achievements */}
          <div
            className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white"
          >
            <div className="flex items-center justify-center space-x-2 bg-white p-2 rounded-md">
              <CheckCircle className="text-accent w-5 h-5" />
              <span className="text-sm sm:text-base text-accent">
                ISO 9001:2008 Certified
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white p-2 rounded-md">
              <CheckCircle className="text-accent w-5 h-5" />
              <span className="text-sm sm:text-base text-accent">
                40+ Years of Expertise
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white p-2 rounded-md">
              <CheckCircle className="text-accent w-5 h-5" />
              <span className="text-sm sm:text-base text-accent">
                Innovative R&D Solutions
              </span>
            </div>
          </div>

          {/* Paragraph */}
          <p
            className="mt-4 text-sm sm:text-base md:text-lg text-white/90 pe-16"
          >
            Electroshield Power Industries (Dreamshield Division), an ISO
            9001:2008 certified company, has been serving the industry with a
            wide range of coatings, resins, and adhesives. From industrial paints
            to advanced R&D, we deliver consistent performance, innovation, and
            reliability.
          </p>

          {/* Buttons */}
          <div
            className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0"
          >
            <Link href="#products" passHref>
              <Button className="w-full sm:w-auto">Explore Products</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
