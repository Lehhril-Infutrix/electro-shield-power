"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    image: "/images/Testimonial_avatar.png",
    quote:
      "Electroshield Power Industries delivered exceptional transformer components that exceeded our expectations in quality and reliability. Their internal circuit breakers and CNC-cut laminations were flawless.",
    name: "Ravi Sharma",
    location: "Mumbai",
  },
  {
    image: "/images/Testimonial_avatar-1.png",
    quote:
      "We have been sourcing amorphous loops and DPC conductors from Electroshield for years. Their precision, attention to detail, and on-time delivery make them a trusted partner.",
    name: "Anita Verma",
    location: "Delhi",
  },
  {
    image: "/images/Testimonial_avatar-2.png",
    quote:
      "The transformer tanks and radiators supplied by Electroshield helped us achieve better efficiency and longevity in our transformers. Highly recommend for any power industry solutions.",
    name: "Suresh Menon",
    location: "Bangalore",
  },
  {
    image: "/images/Testimonial_avatar-3.png",
    quote:
      "We have been sourcing amorphous loops and DPC conductors from Electroshield for years. Their precision, attention to detail, and on-time delivery make them a trusted partner.",
    name: "Ranjan Nair",
    location: "Chennai",
  },
  {
    image: "/images/Testimonial_avatar.png",
    quote:
      "From R&D to delivery, Electroshield ensures top-quality components with precision engineering. Their oil-immersed circuit breakers have enhanced our distribution transformers’ performance.",
    name: "Vikram Singh",
    location: "Pune",
  },
];


const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-8 md:right-4 top-1/2 transform -translate-y-1/2 bg-[#CC0001] shadow-md hover:opacity-70 p-2 sm:p-3 rounded-full transition z-10 cursor-pointer"
  >
    <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-8 md:left-4 top-1/2 transform -translate-y-1/2 bg-[#CC0001] shadow-md hover:opacity-70 p-2 sm:p-3 rounded-full transition z-10 cursor-pointer"
  >
    <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
  </button>
);

const Testimonial = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 768, // Changed from 640 to 768
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false, // Ensure center mode is off
          variableWidth: false, // Ensure variable width is off
        },
      },
    ],
  };

  return (
    <section className="bg-[#fffaf7] py-6 sm:py-10 mdq:py-20 relative testimonial-section scroll-m-16" id="testimonials">
      <div className="container px-4 sm:px-6 grid md:grid-cols-5 sm:gap-8 sm:gap-12 items-center">
        {/* Title */}
        <div
          className="md:col-span-2 flex flex-col justify-center  md:mb-0"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-heading leading-tight pb-6 sm:pb-8 sm:text-start text-center">
            What our <br /> <span className="text-[#CC0001]">Clients</span> say
          </h2>
        </div>

        {/* Slider */}
        <div className="md:col-span-3 testimonial-slider relative overflow-x-hidden">
          <Slider {...settings}>
            {testimonials.map(({ image, quote, name, location }, index) => (
              <div key={index} className="px-1 sm:px-2 md:px-8"> {/* Reduced padding on mobile */}
                <div
                  className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center mx-1" // Added margin and reduced padding on mobile
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
                  data-aos-duration="800"
                >
                  {/* Avatar */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-full overflow-hidden ring-4 ring-gray-100">
                    <Image
                      src={image}
                      alt={`Avatar of ${name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Quote */}
                  <p className="text-gray-700 text-sm sm:text-lg italic leading-relaxed mb-4 sm:mb-6">
                    "{quote}"
                  </p>
                  {/* Footer */}
                  <div>
                    <h5 className="font-semibold text-heading">{name}</h5>
                    <p className="text-xs sm:text-sm text-gray-500">{location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;