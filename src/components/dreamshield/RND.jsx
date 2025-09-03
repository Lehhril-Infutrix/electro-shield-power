"use client";
import React from "react";

const RND = () => {
  return (
    <section
      id="r&d"
      className="py-20 bg-beige scroll-m-16"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="container text-center">
        <h2
          className="text-sm font-semibold uppercase text-[#CC0001] mb-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Research & Development
        </h2>
        <h3
          className="text-3xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Driving Innovation Through R&D
        </h3>

        <div className="grid md:grid-cols-3 gap-12 text-left">
          {/* Innovation */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
          >
            <span className="block text-2xl text-[#656565] font-extralight mb-4 border-b border-[#2a262230] pb-4">
              01
            </span>
            <h4 className="text-2xl font-semibold mb-2 text-[#2a2622]">
              Innovation
            </h4>
            <p className="text-[#7e7e7e]">
              Developing eco-friendly paints, specialty coatings, and advanced
              formulations with enhanced durability and aesthetics.
            </p>
          </div>

          {/* Quality */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            <span className="block text-2xl font-extralight text-[#656565] mb-4 border-b border-[#2a262230] pb-4">
              02
            </span>
            <h4 className="text-2xl font-semibold mb-2 text-[#2a2622]">
              Quality
            </h4>
            <p className="text-[#7e7e7e]">
              Ensuring consistency through rigorous testing for color, texture,
              adhesion, and compliance with international standards.
            </p>
          </div>

          {/* Efficiency */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="700"
          >
            <span className="block text-2xl font-extralight text-[#656565] mb-4 border-b border-[#2a262230] pb-4">
              03
            </span>
            <h4 className="text-2xl font-semibold mb-2 text-[#2a2622]">
              Efficiency
            </h4>
            <p className="text-[#7e7e7e]">
              Optimizing processes to reduce raw material costs, improve
              sustainability, and enhance energy efficiency.
            </p>
          </div>

          {/* Compliance */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="700"
          >
            <span className="block text-2xl font-extralight text-[#656565] mb-4 border-b border-[#2a262230] pb-4">
              04
            </span>
            <h4 className="text-2xl font-semibold mb-2 text-[#2a2622]">
              Compliance
            </h4>
            <p className="text-[#7e7e7e]">
              Guaranteeing adherence to environmental regulations and global
              safety standards like ISO and ASTM.
            </p>
          </div>

          {/* Competitive Edge */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            <span className="block text-2xl font-extralight text-[#656565] mb-4 border-b border-[#2a262230] pb-4">
              05
            </span>
            <h4 className="text-2xl font-semibold mb-2 text-[#2a2622]">
              Competitive Edge
            </h4>
            <p className="text-[#7e7e7e]">
              Staying ahead of industry trends by delivering unique features,
              performance, and tailored customer solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RND;
