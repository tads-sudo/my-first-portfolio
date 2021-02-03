import React from "react";
import { motion } from "framer-motion";

export const SocialIconAnimation = ({ children, href }) => {
  const entryAnimation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  return (
    <motion.a
      style={{ textDecoration: "none" }}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      variants={entryAnimation}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.8 }}
    >
      {children}
    </motion.a>
  );
};
