"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="relative flex items-center justify-center w-[240px] h-[240px] xl:w-[450px] xl:h-[450px]">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="absolute w-[200px] h-[200px] xl:w-[400px] xl:h-[400px] z-10 mix-blend-lighten"
      >
        <Image
          src="/assets/profile_picture.png"
          priority
          quality={100}
          fill
          alt="Profile"
          className="object-contain rounded-full"
        />
      </motion.div>

      {/* Animated Circle */}
      <motion.svg
        className="absolute w-full h-full"
        fill="transparent"
        viewBox="0 0 450 450"
        xmlns="https://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="225"
          cy="225"
          r="200"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, strokeDasharray: "24 10 0 0" }}
          animate={{
            opacity: 1,
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            opacity: { delay: 2, duration: 0.4, ease: "easeIn" },
            strokeDasharray: {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />
      </motion.svg>
    </div>
  );
}
