import { motion } from "framer-motion";
import React from "react";

export const PageAnimation = ({ children, className }) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.section>
  );
};

export default PageAnimation;
