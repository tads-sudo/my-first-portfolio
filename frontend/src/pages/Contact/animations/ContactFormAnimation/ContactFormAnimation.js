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
          duration: 0.5,
          type: "just",
        },
      }}
    >
      {children}
    </motion.div>
  );
};
