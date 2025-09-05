"use client";

import React from "react";
import { Globe2, Award, Users, Calendar } from "lucide-react";

const stats = [
  { icon: <Calendar className="h-8 w-8 text-red-600" />, value: "45+", label: "Years of Experience" },
  { icon: <Globe2 className="h-8 w-8 text-red-600" />, value: "10+", label: "Countries Served" },
  { icon: <Award className="h-8 w-8 text-red-600" />, value: "ISO", label: "9001 Certified" },
  { icon: <Users className="h-8 w-8 text-red-600" />, value: "500+", label: "Skilled Professionals" },
  { icon: <Award className="h-8 w-8 text-red-600" />, value: "100%", label: "Quality Commitment" }, // new entry
];


const AboutParent = () => {
  return (
    <section className="w-full bg-beige py-20">
      <div className="container text-center">
        <h3 className="text-lg font-semibold text-red-600">About Us</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
          About Our Parent Company
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600">
          With over 40 years of expertise, we’ve built a reputation on quality,
          integrity, and innovation. Our group unites divisions that deliver
          advanced coatings and reliable power solutions trusted across industries.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              {stat.icon}
              <h4 className="text-2xl font-bold text-slate-900 mt-3">
                {stat.value}
              </h4>
              <p className="text-slate-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutParent;
