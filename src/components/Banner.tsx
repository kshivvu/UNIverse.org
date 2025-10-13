"use client";

import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{y:-50,opacity:0}}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="w-full bg-blue-500 text-white text-center py-2 px-4 sm:py-3 sm:px-6 text-xs sm:text-sm md:text-base font-semibold"
    >
      Start Your Journey with <span className="font-bold">UNIverse!!!</span>
    </motion.div>
  );
};

export default Banner;
