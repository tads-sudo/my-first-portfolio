import React from "react";
import { motion } from "framer-motion";

export const FilterRow1Animation = ({ children, className, isShow }) => {
  return (
    <motion.div
      className={className}
      initial={false}
      animate={isShow ? "up" : "down"}
    >
      {children}
    </motion.div>
  );
};
