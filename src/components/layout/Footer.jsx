"use client";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const footerData = {
  "/": {
    company: {
      name: "ElectroShield Power",
      desc: "Reliable power solutions with quality, innovation, and trust. Delivering excellence across transformers and energy systems.",
    },
    links: [
      { label: "Home", href: "/" },
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
      name: "Dreamshield Coatings",
      desc: "Innovative coatings, resins, and adhesives delivering performance, durability, and aesthetics for industrial applications.",
    },
    links: [
      { label: "Home", href: "/dreamshield" },
      { label: "About", href: "#about" },
      { label: "R&D", href: "#rnd" },
      { label: "Products", href: "#products" },
      { label: "Resources", href: "#resources" },
      { label: "Contact", href: "#contact" },
    ],
    products: [
      "Industrial Paints",
      "Primers",
      "Thinners",
      "Adhesives",
    ],
  },
};

export default function Footer() {
  const pathname = usePathname();

  // fallback: use "/" data if no match
  const data =
    pathname.startsWith("/dreamshield") ? footerData["/dreamshield"] : footerData["/"];

  return (
    <footer className="bg-[#121212] text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">{data.company.name}</h2>
          <p className="text-gray-400 mb-4">{data.company.desc}</p>
          <div className="flex space-x-4">
            {["facebook-f", "twitter", "linkedin-in"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="bg-[#CC0001] w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#ab0001] transition"
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
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
            {data.products.map((product, i) => (
              <li key={i}>
                <Link href="#products" className="hover:text-white">
                  {product}
                </Link>
              </li>
            ))}
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
                href="mailto:info@electroshieldpower.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                info@electroshieldpower.com
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
        © {new Date().getFullYear()} {data.company.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
