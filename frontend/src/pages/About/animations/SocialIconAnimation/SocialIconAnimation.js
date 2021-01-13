import React from "react";
import { motion } from "framer-motion";

export const SocialIconAnimation = ({ children, href }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      {children}
    </motion.a>
  );
};
