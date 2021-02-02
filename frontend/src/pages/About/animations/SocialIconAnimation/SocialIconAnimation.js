import React from "react";
import { motion } from "framer-motion";

export const SocialIconAnimation = ({ children, href }) => {
  const entryAnimation = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 5 },
    },
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      variants={entryAnimation}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      {children}
    </motion.a>
  );
};
