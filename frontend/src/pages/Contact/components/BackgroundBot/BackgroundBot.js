import React from "react";
import { useStyles } from "./style";
import { motion } from "framer-motion";

export const BackgroundBot = () => {
  const classes = useStyles();

  return (
    <svg
      className={classes.backgroundElement}
      viewBox="0 0 302 294"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M48.9781 99.1129L257.086 95.1576L172.253 266.826L48.9781 99.1129Z"
        fill="#F9FAF7"
        fillOpacity="0.05"
        initial={{ opacity: 0, x: -100, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, type: "just" }}
      />
      <motion.path
        d="M320.493 230.046L280.643 161.672L241.751 237.962L320.493 230.046Z"
        fill="#F9FAF7"
        fillOpacity="0.05"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "just" }}
      />
    </svg>
  );
};
