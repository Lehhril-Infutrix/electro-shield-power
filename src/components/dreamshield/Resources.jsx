"use client";
import React from "react";
import {
  Shield,
  Sparkles,
  Droplets,
  Beaker,
  Ruler,
  SunMedium,
  Hammer,
  Zap,
} from "lucide-react";
// import { Tooltip } from 'react-tooltip'
// import 'react-tooltip/dist/react-tooltip.css'

const Resources = () => {
  return (
    <>
    {/* <Tooltip id="my-tooltip" /> */}
      <section id="resources" className="py-20 bg-beige scroll-m-16">
        <div className="container">
          {/* Heading */}
          <div
            className="text-center mb-16 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-sm font-semibold uppercase text-[#CC0001] mb-2">
              Resources & General Info
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Everything You Need to Know About Coatings
            </h3>
            <p className="text-gray-600">
              From understanding why coatings matter to exploring paint
              composition and testing, find key technical details simplified for
              you.
            </p>
          </div>

          {/* Why Coatings Matter */}
          <div className="grid md:grid-cols-2 gap-10">
            <div
              className="p-6 bg-white rounded-xl shadow"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Shield className="text-[#CC0001] w-10 h-10 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Protection</h4>
              <p className="text-gray-600">
                Coatings shield materials from corrosion, weather, and
                mechanical damage — extending the lifespan of critical assets.
              </p>
            </div>
            <div
              className="p-6 bg-white rounded-xl shadow"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Sparkles className="text-[#CC0001] w-10 h-10 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Beauty</h4>
              <p className="text-gray-600">
                Beyond protection, coatings provide color, gloss, and aesthetics,
                enhancing the appearance of products and structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paint Composition */}
      <section className="paint-res-sec mt-20">

        {/* RAL Colour Chart */}
        <div className="max-w-[1600px] w-[calc(100%-40px)] sm:w-[calc(100%-80px)] m-auto my-20 grid grid-cols-3 md:gap-16 gap-8 items-center bg-white rounded-2xl shadow-lg p-10 border border-[#ddd]">
          {/* Heading + description */}
          <div
            className="col-span-3 md:col-span-1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h4 className="text-4xl font-bold text-gray-900 mb-3 text-center md:text-start">
              RAL Colour Chart
            </h4>
            <p className="text-gray-600 leading-relaxed text-center md:text-start">
              Explore a wide range of standardized RAL colours used in coatings and
              industrial paints. For easy reference, you can download the full
              chart as a PDF document.
            </p>
          </div>

          {/* Visual swatch preview + button */}
          <div
            className="col-span-3 md:col-span-2 flex flex-col items-center gap-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            {/* Mini swatch preview (just 6 sample boxes) */}
            <div className="grid grid-cols-6 gap-2 w-full max-w-md">
              <div data-tooltip-id="my-tooltip"
                data-tooltip-content="Hello world!"
                data-tooltip-place="top" className="h-12 rounded-md bg-red-600"></div>
              <div className="h-12 rounded-md bg-blue-600"></div>
              <div className="h-12 rounded-md bg-green-600"></div>
              <div className="h-12 rounded-md bg-yellow-400"></div>
              <div className="h-12 rounded-md bg-gray-500"></div>
              <div className="h-12 rounded-md bg-purple-600"></div>
            </div>

            {/* CTA button */}
            <a
              href="/documents/Color-Shades.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-[#CC0001] text-white font-semibold rounded-xl shadow hover:bg-[#a50000] transition "
            >
              Download Full Chart (PDF)
            </a>
          </div>
        </div>

        <div className="container">
          <div className="mb-20 grid grid-cols-3 gap-16 items-center">
            <div
              className="col-span-3 md:col-span-1"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h4 className=" text-4xl font-bold text-gray-900 mb-3">
                Paint Composition
              </h4>
              <p className="text-gray-600">
                Paints are composed of several key ingredients, each playing a
                vital role in performance and application.
              </p>
            </div>
            <div className="col-span-3 md:col-span-2 grid md:grid-cols-2 gap-8">
              {[
                { icon: Droplets, label: "Resin" },
                { icon: Sparkles, label: "Pigments" },
                { icon: Beaker, label: "Solvents" },
                { icon: Ruler, label: "Additives" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-4 p-6 bg-beige rounded-xl shadow"
                  data-aos="zoom-in"
                  data-aos-delay={idx * 150}
                >
                  <item.icon className="text-[#CC0001] w-10 h-10 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-lg">{item.label}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testing & Trials */}
          <div className="my-20 flex flex-col-reverse md:grid md:grid-cols-3 gap-16 items-center">
            {/* Icon grid */}
            <div className="col-span-3 md:col-span-2 grid md:grid-cols-2 gap-8 w-full">
              {[
                { icon: Zap, label: "Adhesion" },
                { icon: SunMedium, label: "Gloss" },
                { icon: Hammer, label: "Hardness" },
                { icon: Beaker, label: "Impact" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-4 p-6 bg-beige rounded-xl shadow"
                  data-aos="zoom-in"
                  data-aos-delay={idx * 150}
                >
                  <item.icon className="text-[#CC0001] w-10 h-10 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-lg">{item.label}</h5>
                  </div>
                </div>
              ))}
            </div>

            {/* Heading + description */}
            <div
              className="col-span-3 md:col-span-1"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h4 className="text-4xl font-bold text-gray-900 mb-3">
                Testing & Trials
              </h4>
              <p className="text-gray-600">
                Our coatings undergo rigorous testing to ensure performance,
                durability, and compliance with international standards.
              </p>
            </div>
          </div>

        </div>




      </section>
    </>
  );
};

export default Resources;
