"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

export default function StairTransition() {
  const pathName = usePathname();
  const [showStairs, setShowStairs] = useState(true);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setShowStairs(false);
    const timeout = setTimeout(() => {
      setShowStairs(true);
    }, 400);

    return () => clearTimeout(timeout);
  }, [pathName]);

  return (
    <AnimatePresence mode="wait">
      {showStairs && (
        <div key={pathName}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>
          <motion.div
            className="h-screen w-screen fixed bg-app-primary top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          ></motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
