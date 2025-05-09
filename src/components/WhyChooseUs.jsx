import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const reasons = [
    { title: "Fast & Easy Process", icon: "⚡" },
    { title: "Best Market Rates", icon: "💸" },
    { title: "Secure & Verified", icon: "🔒" },
    { title: "Excellent Support", icon: "📞" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="why"
      className="bg-gray-100 py-16 px-4 text-center"
    >
      <h3 className="text-2xl font-bold mb-10">Why Choose Us</h3>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {reasons.map((reason, i) => (
          <div key={i} className="p-6 bg-white rounded shadow">
            <div className="text-3xl mb-4">{reason.icon}</div>
            <h4 className="font-semibold">{reason.title}</h4>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
