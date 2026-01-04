"use client";
import { motion } from "framer-motion";

export default function StickyHeader({ collapsed }: {collapsed:boolean}) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={collapsed ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full h-[70px] bg-black/80 backdrop-blur-md flex items-center justify-between px-6 z-[90] border-b border-white/10"
    >
      {/* Logo */}
      <div className="text-white text-xl tracking-widest font-light flex items-center">
        DIAMOND CO.
      </div>

      {/* Right side buttons */}
      <a
        href="#enquiry"
        className="text-black bg-white px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition"
      >
        Enquire
      </a>
    </motion.div>
  );
}
