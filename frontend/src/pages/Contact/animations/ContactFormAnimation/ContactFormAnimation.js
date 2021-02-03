import React from "react";
import { motion } from "framer-motion";

export const ContactFormAnimation = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: -50,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.2,
        },
      }}
    >
      {children}
    </motion.div>
  );
};
