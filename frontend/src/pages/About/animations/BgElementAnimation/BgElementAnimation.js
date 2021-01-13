import React from "react";
import { motion } from "framer-motion";

export const BgElementAnimation = ({ children }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", delay: 0.8 }}
    >
      {children}
    </motion.span>
  );
};
