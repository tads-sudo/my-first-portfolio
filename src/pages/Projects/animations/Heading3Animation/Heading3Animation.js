import React from "react";
import { motion } from "framer-motion";

export const Heading3Animation = ({ children, className, transition }) => {
  return (
    <motion.div
      className={className}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};
