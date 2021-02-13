import React from "react";
import { motion } from "framer-motion";

export const Heading1Animation = ({ children }) => {
  return (
    <motion.span
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 1.2,
        duration: 0.5,
        type: "spring",
        damping: 20,
      }}
    >
      {children}
    </motion.span>
  );
};
