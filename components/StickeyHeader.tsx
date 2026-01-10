"use client";
import { motion } from "framer-motion";

export default function StickyHeader({ collapsed }: {collapsed:boolean}) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={collapsed ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full h-[70px] bg-white backdrop-blur-md flex items-center justify-between px-6 z-[90] border-b"
    >
      {/* Logo */}
      <div className="text-black text-xl tracking-widest font-light flex items-center">
        DIAMOND CO.
      </div>

      {/* Right side buttons */}
      <a
        href="#enquiry"
        className="text-white bg-black px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition"
      >
        Enquire
      </a>
    </motion.div>
  );
}
