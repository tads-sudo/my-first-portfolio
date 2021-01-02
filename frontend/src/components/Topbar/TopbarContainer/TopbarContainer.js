import React from "react";
import { useStyles } from "./style";

export const TopbarContainer = ({ children, isOpen }) => {
  const classes = useStyles({ isOpen });
  return <aside className={classes.topbarContainer}>{children}</aside>;
};
