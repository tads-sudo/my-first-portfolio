import React from "react";
import { useStyles } from "./style";
import { AnimatePresence, motion } from "framer-motion";

export const TopbarContainer = ({ children, isOpen }) => {
  const classes = useStyles();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          className={classes.topbarContainer}
          initial={{ bottom: "100%", scale: 0 }}
          animate={{ bottom: 0, scale: 1 }}
          exit={{ bottom: "100%", scale: 0 }}
          transition={{ type: "spring", damping: 12.7 }}
        >
          {children}
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
