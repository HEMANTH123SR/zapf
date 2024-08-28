"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const AnimatedQuoteButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="relative  bg-black text-white px-4  rounded-md overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={false}
    >
      <div className="flex items-center justify-center px-6 py-3.5">
        <div className="relative">
          <motion.div
            className="w-5 h-5 bg-lime-400 rounded-md flex items-center justify-center"
            animate={{
              scale: isHovered ? 2 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="black"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.5,
              }}
              transition={{ duration: 0.2, delay: isHovered ? 0.1 : 0 }}
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </motion.svg>
          </motion.div>
        </div>
        <span className="ml-3 font-semibold text-base">Get Started</span>
      </div>
    </motion.button>
  );
};
