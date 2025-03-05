"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
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
        </div>
      )}
    </AnimatePresence>
  );
}
