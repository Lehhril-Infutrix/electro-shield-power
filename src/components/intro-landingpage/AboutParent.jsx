"use client";

import React from "react";
import { Leaf, Award, Users, Calendar, ShieldCheck } from "lucide-react";

const stats = [
  { 
    icon: <Calendar className="h-8 w-8 text-red-600" />, 
    value: "Several", 
    label: "Years of Experience" 
  },
  { 
    icon: <Leaf className="h-8 w-8 text-red-600" />, 
    value: "Eco", 
    label: "Environmentally Responsible" 
  },
  { 
    icon: <ShieldCheck className="h-8 w-8 text-red-600" />, 
    value: "Govt.", 
    label: "Approved Manufacturer" 
  },
  { 
    icon: <Award className="h-8 w-8 text-red-600" />, 
    value: "ISO", 
    label: "9001:2015 Certified" 
  },
  { 
    icon: <Users className="h-8 w-8 text-red-600" />, 
    value: "500+", 
    label: "Skilled Professionals" 
  },
];


const AboutParent = () => {
  return (
    <section
      className="w-full bg-beige py-20 scroll-m-16"
      id="about-parent"
      aria-labelledby="about-parent-title"
    >
      <div className="container text-center">
        {/* Heading group */}
        <div
          className="inline-block"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <h3 className="text-lg font-semibold text-red-600">About Us</h3>
          <h2
            id="about-parent-title"
            className="text-3xl md:text-4xl font-bold text-heading mt-2"
          >
            About Our Parent Company
          </h2>
        </div>

        {/* Paragraph */}
        <p
          className="mt-4 max-w-2xl mx-auto text-slate-600"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="120"
        >
          With several years of expertise, we’ve built a reputation on quality,
          integrity, and innovation. Our group unites divisions that deliver
          advanced coatings and reliable power solutions trusted across industries.
        </p>

        {/* Stats grid */}
        <div
          className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-8"
          aria-hidden={false}
        >
          {stats.map((stat, idx) => {
            const delay = 180 + idx * 120; // stagger: 180ms, 300ms, 420ms...
            return (
              <div
                key={idx}
                className="flex flex-col items-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={delay}
              >
                {stat.icon}
                <h4 className="text-2xl font-bold text-slate-900 mt-3">
                  {stat.value}
                </h4>
                <p className="text-slate-600 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutParent;
