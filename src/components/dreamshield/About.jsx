"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../UI/Button";
import Link from "next/link";

const About = () => {
  const [activeTab, setActiveTab] = useState("values");
  // const foundingYear = "1978";
  // const years = new Date().getFullYear() - foundingYear;

  return (
    <section id="about" className="py-20 scroll-m-16 bg-[#fff]">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-16 items-center">
          {/* Left Side Image */}
          <div
            className="col-span-4 md:col-span-2 pr-0 md:pr-8 mb-6 md:mb-0"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <Image
              src="/images/dream_about1.png"
              alt="Dreamshield production facility"
              width={300}
              height={300}
              loading="lazy"
              decoding="async"
              className="rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 w-full h-auto"
            />
          </div>

          {/* Right Side Content */}
          <div className="col-span-4 md:col-span-2">
            <h2 className="text-sm font-semibold uppercase text-[#CC0001] mb-2">
              About Dreamshield Division
            </h2>
            <h3 className="text-3xl lg:text-5xl font-bold text-heading mb-6 leading-tight">
              A Legacy of Quality, Integrity & Innovation
            </h3>
            <p
              className="text-gray-600 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Dreamshield, ISO 9001:2015 certified, drives innovation through dedicated R&amp;D and customer-focused solutions. With expertise in acrylic, epoxy, polyester, and alkyd-amino based coatings, we deliver high-performance industrial paints designed to meet evolving requirements for durability, efficiency, and long-term protection.
            </p>


            {/* Quick stats */}
            <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 mb-8">
              <div
                className="border-l-4 border-l-[#CC0001] pl-4"
                data-aos="zoom-in"
                data-aos-delay={300}
              >
                {/* <span className="block text-4xl font-bold text-heading">{years}+</span> */}
                <span className="block text-4xl font-bold text-heading">Several</span>
                <span className="block text-gray-600">Years of Excellence</span>
              </div>
              <div
                className="border-l-4 border-l-[#CC0001] pl-4"
                data-aos="zoom-in"
                data-aos-delay={500}
              >
                <span className="block text-4xl font-bold text-heading">ISO</span>
                <span className="block text-gray-600">9001:2008 Certified</span>
              </div>
            </div>

            {/* Tabs */}
            <div role="tablist" className="flex flex-col sm:flex-row sm:space-x-4 mb-8 border-b border-gray-200">
              <button
                role="tab"
                aria-selected={activeTab === "values"}
                onClick={() => setActiveTab("values")}
                className={`py-2 px-4 font-semibold cursor-pointer ${activeTab === "values"
                    ? "text-[#CC0001] border-b-2 border-[#CC0001]"
                    : "text-gray-500"
                  }`}
              >
                Our Values
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "quality"}
                onClick={() => setActiveTab("quality")}
                className={`py-2 px-4 font-semibold cursor-pointer ${activeTab === "quality"
                    ? "text-[#CC0001] border-b-2 border-[#CC0001]"
                    : "text-gray-500"
                  }`}
              >
                Our Quality
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "values" && (
              <p className="text-gray-600 mb-8">
                We are guided by integrity, passion, perseverance, and creativity. We conduct business safely and ethically, put customers and company before self-interest, embrace continuous improvement, and foster innovation through diverse perspectives and expertise.
              </p>
            )}
            {activeTab === "quality" && (
              <p className="text-gray-600 mb-8">
                Our ISO 9001 certified quality assurance ensures excellence in every batch. With advanced testing, technical support, and a commitment to reliability, we guarantee consistent product performance, durability, and customer satisfaction.
              </p>
            )}

            <div data-aos="fade-up" data-aos-delay="800">
              <Link href="/dreamshield#r%26d">
                <Button>More About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
