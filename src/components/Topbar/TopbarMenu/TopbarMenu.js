import React from "react";
import { useStyles } from "./style";

export const TopbarMenu = ({ children }) => {
  const classes = useStyles();
  return <ul className={classes.topbarMenu}>{children}</ul>;
};
