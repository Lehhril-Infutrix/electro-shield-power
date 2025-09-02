"use client";
import React from "react";
import { MapPin, Mail, Phone, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Map */}
        <div
          className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109605.1580720669!2d74.8787582!3d30.2109946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3916a5d5a6e10bdb%3A0x30fba6c3a6980c2f!2sBathinda%2C%20Punjab!5e0!3m2!1sen!2sin!4v1693659845156!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="space-y-6" data-aos="fade-left" data-aos-duration="1000">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>

          {[
            { icon: MapPin, text: "C-12, Industrial Growth Center, Mansa Road, Bathinda, Punjab (151001)" },
            { icon: Mail, text: "info@electroshieldpower.com", href: "mailto:info@electroshieldpower.com" },
            { icon: Phone, text: "+91 98 759 83535", href: "tel:+919875983535" },
            { icon: Globe, text: "www.electroshieldpower.com", href: "http://www.electroshieldpower.com/" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-5 flex items-center gap-4 hover:shadow-lg transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 150} // stagger effect for cards
                data-aos-duration="800"
              >
                <Icon className="w-6 h-6 text-red-600" />
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-red-600"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.text}
                  </a>
                ) : (
                  <p className="text-gray-700">{item.text}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>

  );
};

export default Contact;
