"use client";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    "Diamond Selection",
    "Cutting & Polishing",
    "Quality Certification",
    "Global Delivery",
  ];

  return (
    <section className="py-20 bg-gray-700">
      <h2 className="text-center text-4xl font-semibold">Our Process</h2>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-400 p-6 shadow rounded-xl text-center"
          >
            <div className="text-5xl font-light text-white">{i + 1}</div>
            <h3 className="text-xl font-medium mt-4 text-white">{step}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
