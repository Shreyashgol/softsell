import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-indigo-600 text-white py-6 text-center"
    >
      <p>&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
