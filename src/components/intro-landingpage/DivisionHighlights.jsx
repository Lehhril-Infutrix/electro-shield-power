"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Button from "../UI/Button";

const sections = [

   {
    name: "ElectroShield Power",
    label: "ABOUT ELECTROSHIELD",
    description:
      "Providing precision-engineered transformer components that ensure safety, reliability, and efficiency. From circuit breakers to laminations, delivering solutions that power industries with innovation and trust.",
    bullets: [
      "Precision transformer components",
      "Reliable & efficient solutions",
      "Innovation-driven engineering",
    ],
    progressLabel: "Quality Assurance",
    progress: 95,
    image: "/images/division_img2.webp", // replace
    href: "/electroshield",
    reverse: true,
    id: "electro-shield",
  },
  {
    name: "DreamShield",
    label: "ABOUT DREAMSHIELD",
    description:
      "Delivering advanced protective and decorative finishes trusted for durability, aesthetics, and long-term performance. Combining beauty with functionality, meeting the highest global standards.",
    bullets: [
      "Protective & decorative finishes",
      "Durable & aesthetic performance",
      "Global standards compliance",
    ],
    progressLabel: "Customer Satisfaction",
    progress: 92,
    image: "/images/division_img1.webp", // replace
    href: "/dreamshield",
    reverse: false,
    id: "dream-shield",
  },
 
];

const DivisionHighlights = () => {
  return (
    <section className="w-full py-20 bg-white scroll-m-16" id="divisions">
      <div className="container space-y-24">
        {sections.map((s, idx) => {
          const delay = 180 + idx * 140; // stagger sections
          // choose AOS directions based on layout direction
          const imgAos = s.reverse ? "fade-left" : "fade-right";
          const textAos = s.reverse ? "fade-right" : "fade-left";

          return (
            <div
              id={s.id}
              key={idx}
              className={`flex flex-col md:flex-row gap-12 items-center scroll-m-28 ${s.reverse ? "md:flex-row-reverse " : ""
                }`}
            >
              {/* Image */}
              <div
                className=" relative h-72 md:h-96 w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg"
                data-aos={imgAos}
                data-aos-duration="700"
                data-aos-delay={delay}
              >
                <Link href={s.href}>
                  <Image src={s.image} alt={s.name} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                </Link>
              </div>

              {/* Text */}
              <div
                className="flex flex-col justify-center md:w-1/2"
                data-aos={textAos}
                data-aos-duration="700"
                data-aos-delay={delay + 120}
              >
                <span className="text-sm font-semibold text-red-600 mb-2 uppercase tracking-wide">
                  {s.label}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
                  {s.name}
                </h2>
                <p className="text-slate-600 mb-6">{s.description}</p>

                <ul className="space-y-3 mb-6">
                  {s.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay={delay + 240 + i * 80}
                    >
                      <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <span className="text-slate-700">{b}</span>
                    </li>
                  ))}
                </ul>

                <Link href={s.href}>
                  <Button>Explore {s.name.split(" ")[0]}</Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DivisionHighlights;
