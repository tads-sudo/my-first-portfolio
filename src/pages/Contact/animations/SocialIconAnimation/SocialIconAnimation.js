import React from "react";
import { motion } from "framer-motion";

export const SocialIconAnimation = ({ children, href, ariaLabel }) => {
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
      aria-label={ariaLabel}
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
