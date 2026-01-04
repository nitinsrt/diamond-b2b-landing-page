"use client";
import { motion } from "framer-motion";

export default function Hero({ collapsed }) {
  return (
    <div className="relative w-full h-full">
      {/* Video BG */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
          collapsed ? "opacity-0" : "opacity-100"
        }`}
        src="/diamond-bg1.mp4"
      />

      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Text */}
      <motion.div
        initial={false}
        animate={collapsed ? { scale: 0.8, y: 15 } : { scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-white text-5xl md:text-7xl font-light tracking-widest">
          Buy Natural & Lab-Grown (CVD) Diamonds at Best Prices
        </h1>

        {!collapsed && (
          <p className="mt-5 text-gray-200 text-lg md:text-xl max-w-2xl">
            Trusted Sourcing from Surat & Mumbai
          </p>
        )}
        <div className="mt-6 flex justify-center items-center flex-row">
          <a href="https://wa.me/917565857905?text=Hi%20I%20want%20to%20buy%20natural%20or%20lab-grown%20diamonds" className="mr-4 text-black bg-green-50 px-6 py-4 rounded-md text-md hover:bg-green-300 transition" target="_blank">
            WhatsApp Now
          </a>
          <a href="#enquiry" className=" text-black bg-green-50 px-6 py-4 rounded-md text-md hover:bg-green-300 transition">
            Enquire
          </a>
        </div>
      </motion.div>
    </div>
  );
}
