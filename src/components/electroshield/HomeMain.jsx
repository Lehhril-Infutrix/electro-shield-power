"use client";
import React, { useEffect } from "react";
import Banner from "./Banner";
import About from "./About";
import KeyFeatures from "./KeyFeatures";
import Products from "./Products";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import AOS from "aos";

const HomeMain = () => {
  useEffect(() => {
    const isMobileOrTablet = window.innerWidth < 1024; // tablet and below
    AOS.init({
      duration: 1000,
      once: true,
      disable: isMobileOrTablet, // disables AOS on small screens
    });

    // Optional: refresh AOS on resize
    const handleResize = () => {
      AOS.refresh();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Banner />
      <About />
      <KeyFeatures />
      <Products />
      {/* <Testimonial /> */}
      <Contact />
    </>
  );
};

export default HomeMain;
