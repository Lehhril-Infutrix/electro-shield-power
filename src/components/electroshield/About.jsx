"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../UI/Button";
import Link from "next/link";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

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
              src="/images/About_img 1.png"
              alt="ElectroShield facility"
              width={300}
              height={300}
              className="rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 w-full h-auto"
            />
          </div>

          {/* Right Side Content */}
          <div className="col-span-4 md:col-span-2">
            <h3 className="text-sm font-semibold uppercase text-[#CC0001] mb-2">
              About ElectroShield
            </h3>
            <h2 className="text-3xl lg:text-5xl font-bold text-heading mb-6 leading-tight">
              Innovation, Precision & Reliability in Transformer Components
            </h2>
            <p
              className="text-gray-600 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              ElectroShield Industries is promoted by technocrats with vast
              experience in electrical engineering, both in manufacturing and
              operations. We cater to the needs of the transformer industry with
              specialized components such as oil immersed internal circuit breakers and
              transformer fittings (LV Push and HV Push).
            </p>

            {/* Quick stats */}
            <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 mb-8">
              <div
                className="border-l-4 border-l-[#CC0001] pl-4"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <span className="block text-4xl font-bold text-heading">Several</span>
                <span className="block text-gray-600">Years of Expertise</span>
              </div>
              <div
                className="border-l-4 border-l-[#CC0001] pl-4"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <span className="block text-4xl font-bold text-heading">100%</span>
                <span className="block text-gray-600">Quality Assurance</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 mb-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("mission")}
                className={`py-2 px-4 font-semibold cursor-pointer ${
                  activeTab === "mission"
                    ? "text-[#CC0001] border-b-2 border-[#CC0001]"
                    : "text-gray-500"
                }`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`py-2 px-4 font-semibold cursor-pointer ${
                  activeTab === "vision"
                    ? "text-[#CC0001] border-b-2 border-[#CC0001]"
                    : "text-gray-500"
                }`}
              >
                Our Vision
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "mission" && (
              <p className="text-gray-600 mb-8">
                Our mission is to deliver cost-effective transformer components without
                compromising on quality. By integrating cutting-edge technology with
                strict adherence to timelines, we ensure guaranteed customer
                satisfaction and help extend the lifespan of distribution transformers
                in India and beyond.
              </p>
            )}
            {activeTab === "vision" && (
              <p className="text-gray-600 mb-8">
                Our vision is to be a global leader in transformer component
                manufacturing by driving innovation through precision engineering.
                We strive to provide sustainable, reliable, and efficient
                solutions that strengthen modern power distribution systems.
              </p>
            )}

            <div data-aos="fade-up" data-aos-delay="800">
              <Link href={"/electroshield#features"}>
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
