import React from "react";
import { useStyles } from "./style";
export const TopbarWrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.topbarWrapper}>{children}</div>;
};
