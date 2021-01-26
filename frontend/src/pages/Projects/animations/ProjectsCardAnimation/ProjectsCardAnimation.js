import React from "react";
import { motion } from "framer-motion";

export const ProjectsCardAnimation = ({
  children,
  className,
  projectIndex,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      {children}
    </motion.div>
  );
};
