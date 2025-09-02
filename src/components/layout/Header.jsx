import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../UI/Button";

const Header = () => {
  return (
    <header className="bg-[#fff] shadow-md sticky top-0 w-full z-50">
      <div className="container">
        <div className="py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#CC0001]">
            <Image src="/images/Logo_1.png" className="w-14 h-auto" alt="Electroshield Logo" width={150} height={50} />
          </Link>

          {/* Navigation */}
          <nav className="space-x-16 hidden md:flex">
            <Link
              href="#about"
              className="text-gray-800 hover:text-[#CC0001] transition-colors text-[20px] font-semibold"
            >
              About
            </Link>
            <Link
              href="#products"
              className="text-gray-800 hover:text-[#CC0001] transition-colors text-[20px] font-semibold"
            >
              Products
            </Link>
            <Link
              href="#contact"
              className="text-gray-800 hover:text-[#CC0001] transition-colors text-[20px] font-semibold"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Button><Link
            href="#products"
          >
            Explore
          </Link></Button>

        </div>
      </div>
    </header>
  );
};

export default Header;
