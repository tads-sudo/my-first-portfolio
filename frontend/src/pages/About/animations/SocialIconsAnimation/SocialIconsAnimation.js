import React from "react";
import { motion } from "framer-motion";

export const SocialIconsAnimation = ({ children, className }) => {
  const entryAnimation = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.15,
      },
    },
  };
  return (
    <motion.span
      className={className}
      variants={entryAnimation}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.span>
  );
};
