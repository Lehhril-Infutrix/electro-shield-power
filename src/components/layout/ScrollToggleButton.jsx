"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const ScrollToggleButton = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY < 100); // near top = true
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = () => {
    if (atTop) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScroll}
      aria-label={atTop ? "Scroll to Bottom" : "Scroll to Top"}
      className="fixed bottom-[80px] right-6 z-50 p-3 rounded-full bg-[#CC0001] text-white shadow-lg hover:bg-[#a00000] transition cursor-pointer opacity-60 hover:opacity-100"
    >
      {atTop ? (
        <ArrowDown className="w-5 h-5" />
      ) : (
        <ArrowUp className="w-5 h-5" />
      )}
    </button>
  );
};

export default ScrollToggleButton;
