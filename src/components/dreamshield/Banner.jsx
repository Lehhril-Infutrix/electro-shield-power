"use client";
import React from "react";
import Button from "../UI/Button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative h-[600px] sm:h-[90vh] flex items-center bg-cover bg-center banner banner-dream">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0"></div>

      {/* Content */}
      <div className="relative z-10 container px-6">
        <div className="max-w-3xl mx-auto md:mx-0">
          {/* Heading */}
          <h1
            data-aos="fade-right"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug sm:leading-tight md:leading-[1.1em]"
          >
            Coating Innovation <br/> Since 1978
          </h1>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center justify-center space-x-2 bg-white p-2 rounded-md">
              <CheckCircle className="text-accent w-5 h-5" />
              <span className="text-sm sm:text-base text-accent">ISO 9001:2008 Certified</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white p-2 rounded-md">
              <CheckCircle className="text-accent w-5 h-5" />
              <span className="text-sm sm:text-base text-accent">40+ Years of Expertise</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white p-2 rounded-md">
              <CheckCircle className="text-accent w-5 h-5" />
              <span className="text-sm sm:text-base text-accent">Innovative R&D Solutions</span>
            </div>
          </div>

          {/* Paragraph */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-sm sm:text-base md:text-lg text-white/90 pe-16"
          >
            Electroshield Power Industries (Dreamshield Division), an ISO 9001:2008 certified company, has been serving the industry with a wide range of coatings, resins, and adhesives. From industrial paints to advanced R&D, we deliver consistent performance, innovation, and reliability.
          </p>

          {/* Three Pointers */}
          

          {/* Buttons */}
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0"
          >
            <Link href="#products" passHref>
              <Button className="w-full sm:w-auto">Explore Products</Button>
            </Link>

            {/* <Link href="#about" passHref>
              <Button className="w-full sm:w-auto">About Us</Button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
