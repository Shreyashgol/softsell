import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Lee",
      role: "IT Manager",
      company: "TechNova Inc.",
      text: "SoftSell made it so easy to monetize our unused software. Seamless and fast!",
    },
    {
      name: "James Patel",
      role: "Procurement Lead",
      company: "CloudCorp",
      text: "I was skeptical at first, but the valuation and payout were great. Highly recommend.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="testimonials"
      className="py-16 px-4 bg-white"
    >
      <h3 className="text-2xl font-bold text-center mb-10">
        What Our Customers Say
      </h3>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded shadow">
            <p className="italic mb-4">“{t.text}”</p>
            <div className="text-sm font-semibold">{t.name}</div>
            <div className="text-xs text-gray-600">
              {t.role} @ {t.company}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
