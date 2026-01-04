"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Hero from "./Hero";
import StickyHeader from "./StickeyHeader";

export default function HeroContainer() {
  const { scrollY } = useScroll();
  const [collapsed, setCollapsed] = useState(false);
  const lastScrollY = useRef(0);
  const scrollDirection = useRef<'up' | 'down'>('down');

  useEffect(() => {
    return scrollY.on("change", (y) => {
      // Determine scroll direction
      if (y > lastScrollY.current) {
        scrollDirection.current = 'down';
      } else if (y < lastScrollY.current) {
        scrollDirection.current = 'up';
      }
      lastScrollY.current = y;

      // Use viewport height for thresholds
      const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;
      
      // Different thresholds for scroll up vs down (hysteresis)
      const collapseThreshold = viewportHeight * 0.9; // Collapse when scrolled 90% of viewport
      const expandThreshold = viewportHeight * 0.7; // Expand when scrolled back to 70% of viewport
      
      if (scrollDirection.current === 'down') {
        setCollapsed(y > collapseThreshold);
      } else {
        // When scrolling up, only expand if we're close to the top
        setCollapsed(y > expandThreshold);
      }
    });
  }, [scrollY]);

  return (
    <>
      {/* Sticky Header visible ONLY when collapsed */}
      <StickyHeader collapsed={collapsed} />

      {/* Container that maintains 100vh layout to prevent jump */}
      <div className="h-screen">
        {/* Collapsible Hero Wrapper */}
        <motion.div
          initial={false}
          animate={collapsed ? "collapsed" : "expanded"}
          variants={{
            expanded: { height: "100vh", transition: { duration: 0.5 } },
            collapsed: { height: "50px", transition: { duration: 0.4 } }
          }}
          className="sticky top-0 left-0 w-full overflow-hidden z-[50]"
        >
          <Hero collapsed={collapsed} />
        </motion.div>
      </div>

      {/* Spacer to prevent content overlap when header is collapsed */}
      {collapsed && <div className="h-[70px]" />}
    </>
  );
}
