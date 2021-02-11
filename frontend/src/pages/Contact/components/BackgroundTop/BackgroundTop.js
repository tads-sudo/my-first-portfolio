import React from "react";
import { useStyles } from "./style";
import { motion } from "framer-motion";

export const BackgroundTop = () => {
  const classes = useStyles();

  return (
    <svg
      className={classes.backgroundElement}
      viewBox="0 0 350 687"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M217.111 394.406L-36.051 245.415L192.782 101.665L217.111 394.406Z"
        fill="#F9FAF7"
        fillOpacity="0.05"
        initial={{ opacity: 0, x: 100, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, type: "just" }}
      />
      <motion.path
        d="M-12.6424 36.3748L-15.2379 148.032L87.8904 85.0291L-12.6424 36.3748Z"
        fill="#F9FAF7"
        fillOpacity="0.05"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "just" }}
      />
    </svg>
  );
};
