"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import Banner from './Banner'
import About from "./About";
import RND from "./RND";
import Products from "./Products";
import Resources from "./Resources";
import Career from "./Career";
import Contact from "./Contact";

const HomeMain = () => {
  useEffect(() => {
    const isMobileOrTablet = window.innerWidth < 1024; // tablet and below
    AOS.init({
      duration: 1000,
      offset: -100,
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
      <RND />
      <Products />
      <Resources />
      <Career />
      <Contact />
    </>
  )
}

export default HomeMain