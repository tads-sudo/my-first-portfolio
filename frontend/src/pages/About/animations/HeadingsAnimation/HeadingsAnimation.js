import React from "react";
import { motion } from "framer-motion";

export const HeadingsAnimation = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", delay: 1.5 }}
    >
      {children}
    </motion.div>
  );
};
