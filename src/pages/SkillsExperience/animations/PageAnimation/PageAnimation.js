import { motion } from "framer-motion";
import React from "react";

export const PageAnimation = ({ children }) => {
  const pageAnimation = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <motion.section
      initial="initial"
      animate="in"
      exit="out"
      variants={pageAnimation}
    >
      {children}
    </motion.section>
  );
};
