"use client";

import React from "react";
import Image from "next/image";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919875983535"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 rounded-full transition-all z-50 flex items-center justify-center bg-green-500 p-2 hover:bg-green-600"
      aria-label="Chat with us on WhatsApp"
    >
      <Image src={"/images/whatsapp.svg"} className="w-8 h-8" alt="WhatsApp Icon" width={24} height={24} />
    </a>
  );
};

export default WhatsAppButton;
