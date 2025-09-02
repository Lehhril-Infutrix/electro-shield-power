import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            ElectroShield Power
          </h2>
          <p className="text-gray-400 mb-4">
            Reliable power solutions with quality, innovation, and trust.
            Delivering excellence across transformers and energy systems.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-[#CC0001] w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#ab0001] transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="bg-[#CC0001] w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#ab0001] transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="bg-[#CC0001] w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#ab0001] transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a className=" hover:text-white" href="#">Home</a></li>
            <li><a className="hover:text-white" href="#about">About</a></li>
            <li><a className="hover:text-white" href="#products">Products</a></li>
            <li><a className="hover:text-white" href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Products</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a className="hover:text-white" href="#products">Internal Circuit Breakers</a></li>
            <li><a className="hover:text-white" href="#products">CNC-Cut CRGO Laminations</a></li>
            <li><a className="hover:text-white" href="#products">Amorphous Loops</a></li>
            <li><a className="hover:text-white" href="#products">DPC Conductors</a></li>
            <li><a className="hover:text-white" href="#products">Transformer Tanks</a></li>
            <li><a className="hover:text-white" href="#products">Radiators</a></li>
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
        © {new Date().getFullYear()} ElectroShield Power. All Rights Reserved.
      </div>
    </footer>
  );
}
