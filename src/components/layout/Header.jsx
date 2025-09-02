"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "../UI/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#fff] shadow-md sticky top-0 w-full z-50">
      <div className="container px-6">
        <div className=" py-2 sm:py-4 flex items-center justify-between">
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

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {["About", "Products", "Contact"].map((item, index) => (
              <Link
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 hover:text-[#CC0001] transition-colors text-[18px] sm:text-[20px] font-semibold"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA Button (desktop) */}
          <div className="hidden md:block">
            <Button>
              <Link href="#products">Explore</Link>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#CC0001] focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-xl py-4 flex flex-col space-y-3 animate-[fadeIn_0.3s_ease-out]">
            {["About", "Products", "Contact"].map((item, index) => (
              <Link
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 hover:text-[#CC0001] transition-colors text-lg font-semibold px-4"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button className="mx-4 mt-2 w-auto">
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
