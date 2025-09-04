"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const Career = () => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxH, setMaxH] = useState(0);

  // Recalculate height when open changes or on resize
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const update = () => setMaxH(open ? el.scrollHeight : 0);
    update();
    if (open) {
      // in case fonts/images reflow after open
      const id = setTimeout(update, 50);
      return () => clearTimeout(id);
    }
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      const el = contentRef.current;
      if (el && open) setMaxH(el.scrollHeight);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <section
      id="careers"
      className="relative max-w-[1600px] w-[calc(100%-40px)] sm:w-[calc(100%-80px)] m-auto py-16 sm:py-16 bg-[#CC0001] text-white rounded-3xl my-20 scroll-m-32"
    >
      <div className="px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-2xl" data-aos="fade-right" data-aos-duration="1000">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-start">
            Join Us & Build Your Career
          </h2>

          {/* Collapsible description */}
          <div
            ref={contentRef}
            style={{ maxHeight: maxH }}
            className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
            aria-hidden={!open}
          >
            <p className="text-white/90 text-base sm:text-lg text-center md:text-start">
              At Surface Paints, you will get to experience an environment that has the latest
              technology, colleagues with diverse views, a high risk-reward culture and a culture
              where you can create any product or modify any process if you are able to establish a
              customer benefit. Many people find this culture to be highly interesting, extremely
              learning oriented and fun too!.
            </p>
          </div>
        </div>

        {/* Right CTA */}
        <div
          className="flex flex-col items-start sm:items-end gap-4"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=careers@surfacepaints.com"
            target="_blank"
            className="bg-white text-[#CC0001] font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition flex items-center gap-2"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Bottom chevron toggle */}
      <div className="mt-6 flex justify-center absolute -bottom-5 left-1/2 -translate-x-1/2 ">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="careers-collapse"
          className="group gap-2 rounded-full w-10 h-10 flex items-center justify-center transition bg-white border-2 border-accent cursor-pointer hover:bg-gray-50"
        >
          <ChevronDown
            className={`w-5 h-5 text-accent transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
              }`}
          />
          {/* <span className="text-sm font-medium text-white/90">
            {open ? "Show less" : "Read more"}
          </span> */}
        </button>
      </div>

      {/* Hidden element id for a11y (optional) */}
      <div id="careers-collapse" className="sr-only">
        Collapsible careers description
      </div>
    </section>
  );
};

export default Career;
