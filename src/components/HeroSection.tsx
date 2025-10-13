"use client";

import { Users } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-between my-16 md:my-20 lg:my-28 space-y-6 md:space-y-8 px-4 sm:px-6 lg:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      
      {/* Icon */}
      <motion.div
        initial={{ y: -50, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -30, opacity: 0, scale: 0.8 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className="flex justify-center"
      >
        <Users size={96} className="text-blue-500 md:text-blue-600 lg:text-blue-700" />
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center leading-tight">
          Discover Your Academic <br /> Future with <span className="text-blue-500">UNIverse</span>
        </h1>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex justify-center"
      >
        <button className="bg-blue-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-500 border border-blue-500 transition transform hover:scale-105 duration-300">
          Get Started
        </button>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
