import React from "react";
import { useStyles } from "./style";
import { motion } from "framer-motion";

export const Items = ({ children }) => {
  const classes = useStyles();

  const ul = {
    hidden: {
      opacity: 1,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.ul
      className={classes.items}
      variants={ul}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.ul>
  );
};

export default Items;
