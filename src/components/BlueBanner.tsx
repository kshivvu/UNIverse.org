"use client";


import { Lightbulb, ListTodo, Star } from "lucide-react";
import { motion } from "framer-motion";

const BanItems = [
  {
    icon: <Lightbulb size={48} />,
    heading: "Informed Choices",
    desc: "Make educated decisions about your education",
  },
  {
    icon: <ListTodo size={48} />,
    heading: "Simple Steps",
    desc: "Follow our easy process to connect",
  },
  {
    icon: <Star size={48} />,
    heading: "Unique Features",
    desc: "Explore various tools for your success",
  },
];

const BlueBanner = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0, scale: 0.8 }}
      whileInView={{ y: 20, opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 250, damping: 30 }}
      className="w-full mb-20 bg-blue-500 text-white px-6 sm:px-10 md:px-16 py-12 flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-10 rounded-2xl shadow-lg"
    >
      {BanItems.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="flex flex-col sm:flex-row items-center text-center sm:text-left max-w-xs"
        >
          <div className="text-white mb-3 sm:mb-0">{item.icon}</div>
          <div className="sm:ml-4">
            <p className="font-bold text-lg">{item.heading}</p>
            <p className="mt-1 text-sm text-blue-100">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BlueBanner;
