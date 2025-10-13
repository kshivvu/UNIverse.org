// import React from 'react'
"use client";
import { motion, type Variants } from "framer-motion";
import { Landmark } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Globe } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
import { BotMessageSquare } from "lucide-react";
import { Briefcase } from "lucide-react";
const Cards = [
  {
    icon: <Landmark className="text-blue-500 font-black- " />,
    head: "College Profiles",
    Desc: "Access Detailed Profiles of colleges including courses ,  ratings and reviews",
  },
  {
    icon: <GraduationCap className="text-blue-500 font-extrabold" />,
    head: "Student",
    Desc: "Create and manage your own Student profile to showcase achievements",
  },
  {
    icon: <Globe className="text-blue-500 font-extrabold" />,
    head: "Explore Profiles",
    Desc: "Explore profiles of peers and connect with like minded individuals",
  },
  {
    icon: <MessageCircleMore className="text-blue-500 font-extrabold" />,
    head: "Social Media Feed",
    Desc: "Stay updated with the latest news and trends in the education sector",
  },
  {
    icon: <BotMessageSquare className="text-blue-500 font-extrabold" />,
    head: "AI College Match ",
    Desc: "Get personalized college recommendation using AI technology",
  },
  {
    icon: <Briefcase className="text-blue-500 font-extrabold" />,
    head: "Opportunities Hub",
    Desc: "Discover internships , scholarships, and job opportunities tailored for you",
  },
];

const ParentVariants:Variants = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const childVariants:Variants = {
  initial: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const Features = () => {
  return (
    <div className="mt-5 mb-20 ">
      <motion.h1
        initial={{ y: 40, opacity: 0.5, scale: 0.5 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="text-center font-extrabold text-3xl mb-12"
      >
        Core Features
      </motion.h1>
      <motion.div
        variants={ParentVariants}
        initial="initial"
        exit="exit"
        whileInView={"visible"}
        className="flex flex-wrap justify-center items-center space-x-4 "
      >
        {Cards.map((card, index) => (
          <motion.div
            variants={childVariants}
            key={index}
            className="min-w-64 p-3 shadow-lg flex flex-col space-y-3 mb-12 hover:bg-neutral-600  hover:scale-105 transition duration-500  ease-in-out"
          >
            <div className="flex justify-center items-center">{card.icon}</div>
            <div>
              <p className="text-center font-bold">{card.head}</p>
            </div>

            <div>
              <p className="text-center w-full  text-sm mb-2 max-w-64">
                {card.Desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Features;
