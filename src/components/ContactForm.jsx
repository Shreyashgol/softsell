import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! This is just a demo.");
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="contact"
      className="bg-indigo-50 py-16 px-4"
    >
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">Get in Touch</h3>
        <form
          className="space-y-4 bg-white p-6 rounded shadow"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full border px-4 py-2 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            required
            placeholder="Company"
            className="w-full border px-4 py-2 rounded"
            onChange={handleChange}
          />
          <select
            name="licenseType"
            required
            className="w-full border px-4 py-2 rounded"
            onChange={handleChange}
          >
            <option value="">Select License Type</option>
            <option>Enterprise</option>
            <option>Individual</option>
            <option>Bulk Resale</option>
          </select>
          <textarea
            name="message"
            required
            placeholder="Your Message"
            className="w-full border px-4 py-2 rounded"
            rows="4"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactForm;
