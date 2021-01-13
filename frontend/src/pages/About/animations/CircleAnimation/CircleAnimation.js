import React from "react";
import { motion } from "framer-motion";

export const CircleAnimation = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 10 }}
    >
      {children}
    </motion.div>
  );
};
