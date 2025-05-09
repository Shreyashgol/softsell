import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">SoftSell</h1>
        <nav className="space-x-4">
          <a href="#how" className="hover:text-indigo-500">
            How It Works
          </a>
          <a href="#why" className="hover:text-indigo-500">
            Why Us
          </a>
          <a href="#testimonials" className="hover:text-indigo-500">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-indigo-500">
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
