"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "../UI/Button";
import { usePathname } from "next/navigation";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  let navItems = [];

  if (pathname === "/") {
    navItems = ["About", "Features", "Products", "Testimonials", "Contact"];
  } else if (pathname.startsWith("/dreamshield")) {
    navItems = ["About", "R&D", "Products", "Resources", "Careers","Contact"];
  }

  return (
    <header className="bg-[#fff] shadow-md sticky top-0 w-full z-50">
      <div className="container px-6">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between py-3">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Logo_Final.png"
                className="w-10 h-auto sm:w-14"
                alt="Electroshield Logo"
                width={150}
                height={50}
              />
            </Link>
          </div>

          {/* Center: Nav */}
          <nav className="flex-1 flex justify-center space-x-10">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 hover:text-[#CC0001] transition-colors text-[16px] sm:text-[18px] font-medium"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Right: CTA Button */}
          <div className="flex-1 flex justify-end">
            <Link href="#products">
              <Button>
                Explore
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-between py-2 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Logo_1.png"
              className="w-10 h-auto sm:w-14"
              alt="Electroshield Logo"
              width={150}
              height={50}
            />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-[#CC0001] focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 flex flex-col space-y-3 animate-[fadeIn_0.3s_ease-out]">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 hover:text-[#CC0001] transition-colors text-lg font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button className="w-fit">
              <Link href="#products" onClick={() => setIsOpen(false)}>
                Explore
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
