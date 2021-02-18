import React from "react";
import { useStyles } from "./style";
import { motion } from "framer-motion";

export const Card = ({ children, style, ...props }) => {
  const classes = useStyles();
  return (
    <motion.div className={classes.card} style={style} {...props}>
      {children}
    </motion.div>
  );
};
