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

  if (pathname.startsWith("/electroshield")) {
    navItems = [
      { name: "About", href: "#about" },
      { name: "Features", href: "#features" },
      { name: "Products", href: "#products" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact Us", href: "#contact" },
    ];
  } else if (pathname === "/") {
    navItems = [
      { name: "About", href: "#about" },
      { name: "R&D", href: "#r&d" },
      { name: "Products", href: "#products" },
      { name: "Resources", href: "#resources" },
      { name: "Careers", href: "#careers" },
      { name: "Contact Us", href: "#contact" },
    ];
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
          <nav className="flex-1 flex justify-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-nowrap text-gray-800 hover:text-[#CC0001] transition-colors text-[16px] sm:text-[18px] font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right: CTA Button */}
          <div className="flex-1 flex justify-end">
            <Link href="#products">
              <Button>Explore</Button>
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
                href={item.href}
                className="text-gray-800 hover:text-[#CC0001] transition-colors text-lg font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
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
