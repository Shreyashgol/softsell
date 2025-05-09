import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-indigo-600 text-white py-20 px-4 text-center"
    >
      <h2 className="text-4xl font-bold mb-4">
        Turn Unused Software Into Cash
      </h2>
      <p className="text-lg mb-8">
        Sell your old software licenses in minutes with SoftSell.
      </p>
      <a
        href="#contact"
        className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
      >
        Sell My Licenses
      </a>
    </motion.section>
  );
};

export default HeroSection;
