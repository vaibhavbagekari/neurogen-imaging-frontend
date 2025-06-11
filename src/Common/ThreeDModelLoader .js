import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const messages = [
  "Analyzing file...",
  "Generating 3D mesh...",
  "Applying textures...",
  "Optimizing geometry...",
  "Almost there..."
];

const ThreeDModelLoader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2000); // Switch message every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[300px] flex flex-col items-center justify-center bg-gray-100 rounded-xl shadow-md">
      <motion.div
        className="loader mb-6"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      >
        <svg
          className="w-12 h-12 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
      </motion.div>
      <motion.p
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg text-gray-700 font-medium"
      >
        {messages[index]}
      </motion.p>
    </div>
  );
};

export default ThreeDModelLoader;
