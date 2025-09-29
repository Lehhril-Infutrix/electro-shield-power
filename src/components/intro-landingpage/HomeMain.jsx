"use client"
import React,{useEffect} from 'react'
import Banner from '../dreamshield/Banner'
import DivCards from './DivCards'
import AboutParent from './AboutParent'
import DivisionHighlights from './DivisionHighlights'
import Contact from './Contact'
import AOS from 'aos';
import LandingCTA from './LandingCTA'
import HeroBanner from './HeroBanner'

const HomeMain = () => {

  useEffect(() => {
      const isMobileOrTablet = window.innerWidth < 1024;
      AOS.init({
        duration: 1000,
        offset: -100,
        once: true,
        disable: isMobileOrTablet,
      });

      const handleResize = () => {
        AOS.refresh();
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <>
      {/* <Banner /> */}
      <HeroBanner />
      <DivisionHighlights />
      <AboutParent />
      <DivCards />
      {/* <LandingCTA /> */}
      <Contact />
    </>
  )
}

export default HomeMain