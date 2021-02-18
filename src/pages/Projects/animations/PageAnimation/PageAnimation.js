import React from "react";
import { motion } from "framer-motion";

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
      initial="initiial"
      animate="in"
      exit="out"
      variants={pageAnimation}
    >
      {children}
    </motion.section>
  );
};
