"use client";
import Link from "next/link";

import { useState } from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { University, Menu, X } from "lucide-react";

const navItems: string[] = [
  "Explore",
  "Join a Community",
  "Find Your",
  "Engage with",
];

const Navigation = () => {
  const { scrollYProgress } = useScroll();
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="z-50 sticky top-0 overflow-hidden backdrop-blur-lg shadow-lg bg-white">
      <div className="flex justify-between items-center py-3 px-4 md:px-12">
        {/* Logo */}
        <div className="font-black flex items-center text-lg sm:text-xl md:text-2xl">
          <University className="inline w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-2 mb-0.5" />
          Connect with Colleges
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 font-semibold text-sm sm:text-base">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-blue-500 transition hover:scale-110 duration-300 cursor-pointer"
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        {/* Buttons + Hamburger */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <motion.button
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, ease: easeInOut , repeat:Infinity}}
          >
            <Link
              href='/login'
              className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-md font-semibold text-sm sm:text-base bg-neutral-200 text-blue-500 hover:bg-blue-500 hover:text-white transition hover:scale-105 duration-300"
            >
              Login
            </Link>
          </motion.button>

          <button className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-md font-semibold text-sm sm:text-base bg-blue-500 text-white hover:bg-neutral-200 hover:text-blue-500 transition hover:scale-105 duration-300">
            Join
          </button>

          {/* Hamburger Menu Button */}
          <button
            className="ml-2 md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className="flex flex-col md:hidden px-4 pb-4 space-y-3 font-semibold bg-white shadow-md"
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-blue-500 transition hover:scale-105 duration-300 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </motion.ul>
      )}

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 h-1 left-0 bg-blue-500 w-screen"
        style={{ width: lineWidth }}
      />
    </nav>
  );
};

export default Navigation;
