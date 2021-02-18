import React from "react";
import { motion } from "framer-motion";

export const CategoriesAnimation = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      key="categories"
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={{
        show: { opacity: 1, height: "auto", scale: 1 },
        hidden: {
          opacity: 0,
          height: 0,
          scale: 0,
        },
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};
