// src/components/Home.js
"use client";
import { motion } from "framer-motion";
import React from "react";
import backgroundImage from "../assets/pexels-binyaminmellish-116077.jpg";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-3xl md:text-7xl font-bold text-white text-center">
        Pushing through the pain, embracing the gain.
      </div>
      <button className="relative z-10 bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 mt-4">
        Contact Now
      </button>
    </motion.div>
  );
}
