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
      "With BHPS, expertise meets trust! We chose BHPS over local contractors for their product knowledge, professional approach, and the assurance that comes with Asian Paints.",
    name: "Preeti Saha",
    location: "Pune",
  },
  {
    image: "/images/Testimonial_avatar.png",
    quote:
      "Reliable and hassle-free! With 15 years of memories in this home, we wanted a stress-free makeover. BHPS stood out for their technical expertise and timely completion.",
    name: "Alex Varghese Kurian",
    location: "Kochi",
  },
  {
    image: "/images/Testimonial_avatar.png",
    quote:
      "Our dream home, beautifully brought to life! BHPS guided us with the right colours and designs. Their expertise made the entire process easy and enjoyable.",
    name: "Deepa",
    location: "Chennai",
  },
  {
    image: "/images/Testimonial_avatar.png",
    quote:
      "Transformed after 10 years! BHPS delivered on all fronts. The team was incredibly supportive and provided valuable insights throughout the project.",
    name: "Dr Sachin",
    location: "Bangalore",
  },
];

// ✅ Custom Arrows must receive props from react-slick
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-3 rounded-full transition z-10 cursor-pointer"
  >
    <ChevronRight className="w-5 h-5 text-gray-800" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-3 rounded-full transition z-10 cursor-pointer"
  >
    <ChevronLeft className="w-5 h-5 text-gray-800" />
  </button>
);

const Testimonial = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: <NextArrow />, // ✅ works now
    prevArrow: <PrevArrow />, // ✅ works now
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#fffaf7] py-20 relative testimonial-section">
      <div className="container grid md:grid-cols-5 gap-12 items-center">
        {/* Title */}
        <div
          className="md:col-span-2 flex flex-col justify-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="text-6xl font-bold text-gray-900 leading-tight pb-8">
            What our <br /> <span className="text-[#CC0001]">Clients</span> say
          </h2>
        </div>

        {/* Slider */}
        <div className="md:col-span-3 testimonial-slider relative">
          <Slider {...settings}>
            {testimonials.map(({ image, quote, name, location }, index) => (
              <div key={index} className="px-4">
                <div
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
                  data-aos="zoom-in"
                  data-aos-delay={index * 200} // stagger each card
                  data-aos-duration="800"
                >
                  {/* Avatar */}
                  <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden ring-4 ring-gray-100">
                    <Image
                      src={image}
                      alt={`Avatar of ${name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Quote */}
                  <p className="text-gray-700 text-lg italic leading-relaxed mb-6">
                    “{quote}”
                  </p>
                  {/* Footer */}
                  <div>
                    <h5 className="font-semibold text-gray-900">{name}</h5>
                    <p className="text-sm text-gray-500">{location}</p>
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
