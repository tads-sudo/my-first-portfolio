import React from "react";
import { motion } from "framer-motion";

export const ProjectCardAnimation = ({ children }) => {
  const card = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div variants={card} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
};
