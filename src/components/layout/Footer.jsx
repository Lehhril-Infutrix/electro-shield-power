"use client";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const footerData = {
  "/": {
    company: {
      name: "ElectroShield Group",
      desc:
        "With several years of industrial manufacturing, ElectroShield delivers reliable power components first — and through our DreamShield division, advanced R&D drives long-lasting protection systems.",
    },
    links: [
      { label: "Home", href: "/" },
      { label: "Divisions", href: "#divisions" },
      { label: "About", href: "#about-parent" },
      { label: "Contact", href: "#contact" },
    ],
    products: [
      { label: "ElectroShield", href: "/electroshield" },
      { label: "DreamShield", href: "/dreamshield" },
    ],
  },

  "/electroshield": {
    company: {
      name: "ElectroShield",
      desc:
        "Reliable power components backed by quality and consistency — transformers, stabilizers, and precision assemblies trusted for performance and safety.",
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
      "Oil Immersed Internal Circuit Breakers",
      "Transformer Fittings"
    ],
  },

  "/dreamshield": {
    company: {
      name: "DreamShield",
      desc:
        "Advanced R&D in coatings, resins, and adhesives for durable, high-performance finishes in demanding industrial environments.",
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

  let key = "/";
  if (pathname.startsWith("/electroshield")) {
    key = "/electroshield";
  } else if (pathname.startsWith("/dreamshield")) {
    key = "/dreamshield";
  }

  const data = footerData[key];
  const isHome = key === "/";

  return (
    <footer className="bg-[#121212] text-white pt-12">
      <div className="container grid md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <Link href="/">
            <Image
              src="/images/Logo_Final.png"
              alt="Company Logo"
              width={56}
              height={56}
            />
          </Link>
          <p className="text-gray-400 mb-4 mt-3">{data.company.desc}</p>

          <div className="border-t border-[#d9d9d94a] mt-6 pt-4">
            <a
              href="https://wa.me/919875983535"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp QR link"
            >
              <Image
                src="/images/qr_code.svg"
                alt="WhatsApp QR"
                width={150}
                height={150}
              />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="sm:ps-8">
          <h3 className="text-lg font-semibold mb-3 foot-heading relative">
            Useful Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            {data.links.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="hover:text-white cursor-pointer"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products / Divisions */}
        {!isHome &&
          <div>
            <h3 className="text-lg font-semibold mb-3 foot-heading relative">
              Our Products
            </h3>
            <ul className="space-y-2 text-gray-400">
              {data.products.map((product, i) => {
                const label = typeof product === "string" ? product : product.label;
                const href =
                  typeof product === "string" ? "#products" : product.href;
                return (
                  <li key={i}>
                    <Link href={href} className="hover:text-white cursor-pointer">
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        }

        {isHome &&
          <div>
            <h3 className="text-lg font-semibold mb-3 foot-heading relative">
              Our Products
            </h3>
            <ul className="space-y-2 text-gray-400">
              <h4 className="text-white text-sm font-semibold mb-2 border-b border-red-600 inline-block pb-1">
                Electroshield
              </h4>
              <li>
                <Link href={"/electroshield/#products"} className="hover:text-white cursor-pointer">
                  Tranformer Accessories
                </Link>
              </li>
              <li>
                <Link href={"/electroshield/#products"} className="hover:text-white cursor-pointer">
                  Oil Immersed Internal Circuit Breaker
                </Link>
              </li>
              <h4 className="text-white text-sm font-semibold mb-2 border-b border-red-600 inline-block pb-1">
                Dreamshield
              </h4>
              <li>
                <Link href={"/dreamshield/#products"} className="hover:text-white cursor-pointer">
                  Industrial Enamel Paint
                </Link>
              </li>
              <li>
                <Link href={"/dreamshield/#products"} className="hover:text-white cursor-pointer">
                  Industrial Primer
                </Link>
              </li>
            </ul>
          </div>
        }

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 foot-heading relative">
            Get In Touch
          </h3>
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
                href="mailto:info@electroshield.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                info@electroshield.com
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
                C-26(P), Industrial Growth Center, <br />
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
          Website Crafted by{" "}
          <a
            href="https://infutrix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Infutrix
          </a>
        </span>
      </div>
    </footer>
  );
}
