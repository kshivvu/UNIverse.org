"use client";
import React from "react";
import { useActionState } from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";
import { registerUser } from "../../action/user";



const word: string[] = ["friends", "communities", "creators"];

const SignUPP = () => {
  
    
  const [state, formAction] = useActionState(registerUser, { error: "" });
  return (
    <div className="grid min-h-screen bg-black md:grid-cols-2 p-4 overflow-hidden">
      {/* LEFT PANEL (Form) */}
      <motion.div
        className="flex justify-center items-center p-6 md:p-6 max-h-screen"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <BackgroundGradient className="bg-black w-full max-w-md h-auto rounded-[22px] p-6 md:p-10">
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {/* Heading */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-2xl md:text-3xl bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 text-transparent bg-clip-text text-center"
            >
              Join the <span className="font-bold">UNIverse</span>
            </motion.h2>

            <motion.h3
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-sm md:text-base text-gray-500 text-center"
            >
              Create your account to connect with the world.
            </motion.h3>

            {/* Form */}
            <motion.form 
              action={formAction}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="flex flex-col items-center mt-2"
            >
              {/* Name */}
              <div className="w-full mb-4">
                <label
                  htmlFor="name"
                  className="text-sm text-gray-300 block mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg text-white bg-transparent hover:border-cyan-300 focus:border-cyan-400 outline-none transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div className="w-full mb-2">
                <label
                  htmlFor="email"
                  className="text-sm text-gray-300 block mb-2"
                  
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg text-white bg-transparent hover:border-cyan-300 focus:border-cyan-400 outline-none transition-all duration-300"
                  
                />
              </div>

              {/* Password */}
              <div className="w-full mb-2">
                <label
                  htmlFor="password"
                  className="text-sm text-gray-300 block mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg text-white bg-transparent hover:border-cyan-300 focus:border-cyan-400 outline-none transition-all duration-300"
                />
              </div>

              {/* Confirm Password */}
              <div className="w-full mb-3">
                <label
                  htmlFor="confirmPassword"
                  className="text-sm text-gray-300 block mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg text-white bg-transparent hover:border-cyan-300 focus:border-cyan-400 outline-none transition-all duration-300"
                />
              </div>
              {state?.error && (
              <p className="text-red-400 text-sm mb-2 text-center w-full">
                {state.error}
              </p>
            )}
              {/* Sign Up Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(139,92,246,0.7)",
                }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-violet-500 hover:from-indigo-500 hover:to-violet-400 w-full px-6 py-2 rounded-lg text-sky-300 transition-all duration-300"
              >
                Sign Up
              </motion.button>

              {/* Divider */}
              <div className="flex items-center justify-center mt-4 mb-0 w-full">
                <span className="text-gray-400 text-sm">OR</span>
              </div>

              {/* OAuth Buttons */}
              

              {/* Footer link */}
              <div className="mt-2 text-gray-400 text-sm text-center">
                Already have an account?{" "}
                <Link
                  href={"/login"}
                  className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-all duration-200"
                >
                  Login here
                </Link>
              </div>
            </motion.form>
          </motion.div>
        </BackgroundGradient>
      </motion.div>

      {/* RIGHT PANEL (Hero / Sparkles) */}
      <motion.div
        className="relative flex flex-col items-center justify-center text-center text-white overflow-hidden px-6 sm:px-10 md:px-0"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Sparkles background */}
        <div className="absolute inset-0 z-0">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(500px_400px_at_center,transparent_30%,white)]" />
        </div>

        {/* Foreground content */}
        <motion.div
          className="relative z-10 flex flex-col items-center mt-10 sm:mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 15px rgba(139,92,246,0.8)",
            }}
          >
            UNIverse
          </motion.h1>

          {/* Line accent */}
          <motion.div
            className="relative w-3/4 h-[8px] mb-6 mt-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] blur-sm" />
            <div className="absolute inset-x-[25%] top-0 bg-gradient-to-r from-transparent via-sky-400 to-transparent h-[3px] blur-sm" />
          </motion.div>

          <motion.div
            className="text-base sm:text-lg md:text-xl font-semibold italic text-gray-400 leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Connect, share, and grow with{" "}
            <span className="text-sky-400 font-bold">
              <FlipWords
                words={word}
                className="text-sky-400 font-bold text-xl sm:text-2xl"
              />
            </span>{" "}
            around the world.
          </motion.div>

          {/* Mobile Button */}
          <motion.div
            className="mt-10 md:hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <button className="bg-gradient-to-r from-indigo-600 to-violet-500 hover:from-indigo-500 hover:to-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.6)] w-full px-6 py-3 rounded-lg text-sky-300 text-base transition-all duration-300">
              Join Now
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignUPP;
