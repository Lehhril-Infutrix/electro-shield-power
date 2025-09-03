"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Career = () => {
  return (
    <section id="careers" className="relative max-w-[1600px] w-[calc(100%-80px)] m-auto py-16 sm:py-20 bg-[#CC0001] text-white rounded-3xl my-20 scroll-m-16">

      <div className=" px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="max-w-2xl" data-aos="fade-right" data-aos-duration="1000">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-start">
            Join Us & Build Your Career
          </h2>
          <p className="text-white/90 text-base sm:text-lg text-center md:text-start">
            Be part of Electroshield Power Industries and grow with us.
            Together, we’ll innovate, create, and shape the future of coatings
            and transformer components.
          </p>
        </div>

        {/* Right CTA */}
        <div
          className="flex flex-col items-start sm:items-end gap-4"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Link
            href="mailto:careers@surfacepaints.com"
            className="bg-white text-[#CC0001] font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition flex items-center gap-2"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Career;
