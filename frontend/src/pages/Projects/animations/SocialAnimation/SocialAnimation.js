import React from "react";
import { motion } from "framer-motion";

export const SocialIconAnimation = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      {children}
    </motion.a>
  );
};
