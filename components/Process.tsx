"use client";
import { motion } from "framer-motion";
import FeaturesCard from "./FeaturesCard";

export default function Process() {
  const steps = [
    {
      index:1,
      img:"tick.svg",
      title:'Genuine Trusted Sources',
      subtext:'Direct access to surat and mumbai manufacturers'
    },
    {
      index:2,
      img:"dollar.svg",
      title:'Best Wholesale Pricing',
      subtext:'Transparent pricing with genuine videos and reports'
    },
    {
      index:3,
      img:"deliver.svg",
      title:'Fast Worldwide Delivery',
      subtext:'Safe & insured shipping'
    }
  ];

  return (
    <section className="bg-white pt-2">

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-25 max-w-6xl mx-auto px-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-white px-3 py-4 shadow rounded-xl text-center"
          >
            <FeaturesCard img={step.img} title={step.title} subtext={step.subtext}/>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
