"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type AnimationName = "fadeUp" | "fadeDown" | "fadeIn" | "clipMask" | "slideLeft" | "slideRight";

interface AnimatedElementProps {
  children: ReactNode;
  animation?: AnimationName;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

 function OnViewAnimation({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: AnimatedElementProps) {
  // on type explicitement la map pour éviter les erreurs sur `variants[...]`
  const variantsMap: Record<AnimationName, Variants> = {
    fadeUp: {
      initial: { opacity: 0, y: 40 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration, delay, ease: "easeOut" },
      },
    },
    fadeDown: {
      initial: { opacity: 0, y: -40 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration, delay, ease: "easeOut" },
      },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: { duration, delay, ease: "easeOut" },
      },
    },
    clipMask: {
      initial: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
      animate: {
        opacity: 1,
        clipPath: "inset(0 0 0% 0)",
        transition: { duration: duration + 0.2, delay, ease: "easeOut" },
      },
    },
    slideLeft: {
      initial: { opacity: 0, x: -40 },
      animate: {
        opacity: 1,
        x: 0,
        transition: { duration, delay, ease: "easeOut" },
      },
    },
    slideRight: {
      initial: { opacity: 0, x: 40 },
      animate: {
        opacity: 1,
        x: 0,
        transition: { duration, delay, ease: "easeOut" },
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="animate"
      variants={variantsMap[animation]}
      viewport={{ once, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}

export default OnViewAnimation;