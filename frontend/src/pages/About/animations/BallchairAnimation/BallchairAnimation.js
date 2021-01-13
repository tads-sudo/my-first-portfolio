import React from "react";
import { motion } from "framer-motion";

export const BallchairAnimation = ({ children }) => {
  return (
    <motion.span
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 10 }}
    >
      {children}
    </motion.span>
  );
};
