"use client";
import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { SparklesCore } from "@/components/ui/sparkles";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const word: string[] = ["students", "colleges", "clubs"];

const Login = () => {
  return (
    <div className="grid min-h-screen bg-black md:grid-cols-2 p-4 overflow-hidden">
      {/* LEFT PANEL (Form) */}
      <motion.div
        className="flex justify-center items-center p-6 md:p-10"
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
              Welcome back to <span className="font-bold">UNIverse</span>
            </motion.h2>

            <motion.h3
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-sm md:text-base text-gray-500 text-center"
            >
              Enter your credentials to access
            </motion.h3>

            {/* Form */}
            <motion.form
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="flex flex-col items-center mt-4"
            >
              {/* Email */}
              <div className="w-full mb-4">
                <label
                  htmlFor="email"
                  className="text-sm text-gray-300 block mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email/UNI ID"
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
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg text-white bg-transparent hover:border-cyan-300 focus:border-cyan-400 outline-none transition-all duration-300"
                />
              </div>

              {/* Forgot Password */}
              <div className="w-full flex justify-end mb-4">
                <a
                  href="#"
                  className="text-sky-400 text-xs hover:text-sky-300 underline underline-offset-2 transition-all duration-200"
                >
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(139,92,246,0.7)" }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-violet-500 hover:from-indigo-500 hover:to-violet-400 w-full px-6 py-2 rounded-lg text-sky-300 transition-all duration-300"
              >
                Login
              </motion.button>

              {/* Divider */}
              <div className="flex items-center justify-center mt-4 mb-2 w-full">
                <span className="text-gray-400 text-sm">OR</span>
              </div>

              {/* OAuth Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  type="button"
                  className="bg-gradient-to-r from-indigo-600 to-violet-500 hover:from-indigo-500 hover:to-violet-400 flex items-center justify-center gap-2 w-full sm:w-1/2 px-4 py-2 rounded-lg text-sky-300 text-xs transition-all duration-300"
                >
                  <FcGoogle size={16} /> Google
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  type="button"
                  className="bg-gradient-to-r from-indigo-600 to-violet-500 hover:from-indigo-500 hover:to-violet-400 flex items-center justify-center gap-2 w-full sm:w-1/2 px-4 py-2 rounded-lg text-sky-300 text-xs transition-all duration-300"
                >
                  <FaApple className="text-black" size={16} /> Apple
                </motion.button>
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
            whileHover={{ scale: 1.05, textShadow: "0 0 15px rgba(139,92,246,0.8)" }}
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
            UNIverse is your college’s digital life where{" "}
            <span className="text-sky-400 font-bold">
              <FlipWords
                words={word}
                className="text-sky-400 font-bold text-xl sm:text-2xl"
              />
            </span>{" "}
            connect and grow.
          </motion.div>

          {/* Mobile Button */}
          <motion.div
            className="mt-10 md:hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <button className="bg-gradient-to-r from-indigo-600 to-violet-500 hover:from-indigo-500 hover:to-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.6)] w-full px-6 py-3 rounded-lg text-sky-300 text-base transition-all duration-300">
              Login Now
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
