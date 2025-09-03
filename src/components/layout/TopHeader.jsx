"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopHeader = () => {
  const pathname = usePathname();
  const links = [
    { name: "Electroshield", href: "/" },
    { name: "Dreamshield", href: "/dreamshield" },
  ];

  return (
    <div className="bg-[#121212] text-white text-sm">
      <div className="max-w-[1600px] w-full mx-auto flex items-center justify-center space-x-6">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 transition font-medium ${
                isActive
                  ? "bg-white text-[#121212] rounded-t-md shadow"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopHeader;
