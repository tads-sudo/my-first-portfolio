import React from "react";
import { useStyles } from "./style";
import { motion } from "framer-motion";

export const Preloader = () => {
  const classes = useStyles();

  return (
    <>
      <motion.div
        className={classes.loader}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        LOADING
      </motion.div>
    </>
  );
};
