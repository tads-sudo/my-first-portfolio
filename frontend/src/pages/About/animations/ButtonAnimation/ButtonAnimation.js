import React from "react";
import { motion } from "framer-motion";

export const ButtonAnimation = ({ children }) => {
  return (
    <motion.span
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 1.8,
        duration: 0.5,
        type: "spring",
        damping: 20,
      }}
    >
      {children}
    </motion.span>
  );
};
