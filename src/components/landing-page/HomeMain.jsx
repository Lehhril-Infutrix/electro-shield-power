"use client"
import React,{useEffect} from 'react'
import Banner from './Banner'
import About from './About'
import KeyFeatures from './KeyFeatures'
import Products from './Products'
import Testimonial from './Testimonial'
import Contact from './Contact'
import AOS from "aos";

const HomeMain = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Banner />
      <About />
      <KeyFeatures />
      <Products />
      <Testimonial />
      <Contact />
    </>
  )
}

export default HomeMain