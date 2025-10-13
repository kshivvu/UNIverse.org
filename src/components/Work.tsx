"use client";

import { World, Doorbell3pSharp, UserGraduate } from "./ICONS";
import { motion } from "framer-motion";
import type { ReactElement } from "react";

interface workType {
  icon: ReactElement;
  head: string;
  desc: string;
}
const work: workType[] = [
  {
    icon: <World className="h-16 w-16 sm:h-20 sm:w-20 text-blue-500" />,
    head: "Explore colleges",
    desc: "Discover and compare colleges, uncover admission criteria, and find the perfect fit for your academic journey.",
  },
  {
    icon: <UserGraduate className="h-16 w-16 sm:h-20 sm:w-20 text-blue-500" />,
    head: "Build Your Profile",
    desc: "Craft a comprehensive profile showcasing your strengths and accomplishments to stand out in the competitive landscape.",
  },
  {
    icon: (
      <Doorbell3pSharp className="h-16 w-16 sm:h-20 sm:w-20 text-blue-500" />
    ),
    head: "Access Opportunities",
    desc: "Unlock a world of opportunities, from internships to scholarships, tailored to your aspirations and goals.",
  },
];

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 250, damping: 30 }}
      className="mb-15   rounded-2xl mt-8 px-4 sm:px-10 md:px-16 py-8 bg-blue-300 shadow-lg"
    >
      <motion.h1
        initial={{ y: 40, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.5 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-center mb-10"
      >
        How UNIverse Works
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 md:gap-6">
        {work.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="flex flex-col items-center text-center md:text-left max-w-xs sm:max-w-sm"
          >
            <div className="mb-4 flex justify-center items-center">
              {item.icon}
            </div>
            <h1 className="font-extrabold text-xl sm:text-2xl mb-2">
              {item.head}
            </h1>
            <p className="text-sm sm:text-base text-center md:text-left">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Work;
