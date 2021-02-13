import React from "react";
import { motion } from "framer-motion";

export const Heading2Animation = ({ children }) => {
  return (
    <motion.span
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 1.4,
        duration: 0.5,
        type: "spring",
        damping: 20,
      }}
    >
      {children}
    </motion.span>
  );
};
