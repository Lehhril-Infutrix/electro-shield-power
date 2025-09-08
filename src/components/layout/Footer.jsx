"use client";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const footerData = {
  "/": {
    company: {
      name: "Electroshield Group",
      desc: "Delivering innovation across coatings and power solutions for over 40 years. Built on integrity, quality, and trust.",
    },
    links: [
      { label: "Home", href: "/" },
      { label: "Divisions", href: "#divisions" },
      { label: "About", href: "#about-parent" },
      { label: "Contact", href: "#contact" },
    ],
    products: [
      { label: "DreamShield Coatings", href: "/dreamshield" },
      { label: "ElectroShield Power", href: "/electroshield" },
    ],
  },

  "/electroshield": {
    company: {
      name: "ElectroShield Power",
      desc: "Reliable power solutions with quality, innovation, and trust. Delivering excellence across transformers and energy systems.",
    },
    links: [
      { label: "Home", href: "/electroshield" },
      { label: "About", href: "#about" },
      { label: "Features", href: "#features" },
      { label: "Products", href: "#products" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    products: [
      "Internal Circuit Breakers",
      "CNC-Cut CRGO Laminations",
      "Amorphous Loops",
      "DPC Conductors",
      "Transformer Tanks",
      "Radiators",
    ],
  },

  "/dreamshield": {
    company: {
      name: "Dreamshield",
      desc: "Innovative coatings, resins, and adhesives delivering performance, durability, and aesthetics for industrial applications.",
    },
    links: [
      { label: "Home", href: "/dreamshield" },
      { label: "About", href: "#about" },
      { label: "R&D", href: "#rnd" },
      { label: "Products", href: "#products" },
      { label: "Resources", href: "#resources" },
      { label: "Careers", href: "#careers" },
      { label: "Contact Us", href: "#contact" },
    ],
    products: ["Industrial Paints", "Primers", "Thinners", "Adhesives"],
  },
};

export default function Footer() {
  const pathname = usePathname();

  let data;
  if (pathname.startsWith("/electroshield")) {
    data = footerData["/electroshield"];
  } else if (pathname.startsWith("/dreamshield")) {
    data = footerData["/dreamshield"];
  } else {
    data = footerData["/"];
  }

  return (
    <footer className="bg-[#121212] text-white pt-12">
      <div className="container grid md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            {data.company.name}
          </h2>
          <p className="text-gray-400 mb-4">{data.company.desc}</p>
          {/* <div className="flex space-x-4">
            <a
              href="#"
              className="bg-[#CC0001] w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#ab0001] transition"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="bg-[#CC0001] w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#ab0001] transition"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="bg-[#CC0001] w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#ab0001] transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div> */}
          <div className="border-t border-[#d9d9d9] mt-6 pt-4">
            <Image src="/images/qr_code.svg" alt="Company Logo" width={150} height={150} />
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-400">
            {data.links.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Products</h3>
          <ul className="space-y-2 text-gray-400">
            {data.products.map((product, i) => {
              // Handle objects (with href) vs. strings
              const label = typeof product === "string" ? product : product.label;
              const href =
                typeof product === "string" ? "#products" : product.href;

              return (
                <li key={i}>
                  <Link href={href} className="hover:text-white">
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <Phone className="text-[#CC0001] w-5 h-5 mt-1" />
              <a
                href="tel:+919875983535"
                className="text-gray-400 hover:text-white transition-colors"
              >
                +91 98 759 83535
              </a>
            </li>
            <li className="flex items-start space-x-3">
              <Mail className="text-[#CC0001] w-5 h-5 mt-1" />
              <a
                href="mailto:info@surfacepaints.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                info@surfacepaints.com
              </a>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin className="text-[#CC0001] w-5 h-5 mt-1" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=C-12,+Industrial+Growth+Center,+Mansa+Road,+Bathinda,+Punjab+151001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                C-12, Industrial Growth Center, <br />
                Mansa Road, Bathinda, Punjab (151001)
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 py-3 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} {data.company.name}. All Rights Reserved |
        <span className="block sm:inline sm:ml-2">
          Website Crafted by <a href="https://infutrix.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Infutrix</a>
        </span>
      </div>


    </footer>
  );
}
