import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    { title: "Upload License", emoji: "📤" },
    { title: "Get Valuation", emoji: "💰" },
    { title: "Get Paid", emoji: "🏦" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="how"
      className="py-16 px-4 max-w-5xl mx-auto text-center"
    >
      <h3 className="text-2xl font-bold mb-10">How It Works</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{step.emoji}</div>
            <h4 className="text-xl font-semibold">{step.title}</h4>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default HowItWorks;
