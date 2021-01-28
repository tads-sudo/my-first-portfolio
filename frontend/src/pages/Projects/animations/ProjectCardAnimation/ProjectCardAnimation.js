import React from "react";
import { motion } from "framer-motion";

export const ProjectCardAnimation = ({ children, className }) => {
  const projectCard = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div className={className} variants={projectCard}>
      {children}
    </motion.div>
  );
};
