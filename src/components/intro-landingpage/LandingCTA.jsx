"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LandingCTA() {
  return (
    <section
      id="landing-cta"
      className="relative max-w-[1400px] w-[calc(100%-40px)] sm:w-[calc(100%-80px)] m-auto py-12 sm:py-14 bg-[#CC0001] text-white rounded-3xl mb-20 scroll-m-32"
    >
      <div className="px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left content */}
        <div className="max-w-2xl" data-aos="fade-right" data-aos-duration="900">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center md:text-start">
            Discover Our Divisions
          </h2>

          <p className="text-white/90 text-base sm:text-lg text-center md:text-start">
            We build industry-grade coatings and reliable power components backed by decades of
            R&D and manufacturing excellence. Explore our divisions to find solutions built for
            performance, safety, and sustainability.
          </p>
        </div>

        {/* Right CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          <Link
            href="/dreamshield"
            className="inline-flex items-center gap-3 bg-white text-[#CC0001] font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition"
            aria-label="Explore DreamShield Coatings"
          >
            Explore DreamShield
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/electroshield"
            className="inline-flex items-center gap-3 bg-white text-[#CC0001] font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition"
            aria-label="Explore ElectroShield Power"
          >
            Explore ElectroShield
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
