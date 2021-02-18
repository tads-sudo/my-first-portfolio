import React from "react";
import { useStyles } from "./style";

export const SmallText = ({ children }) => {
  const classes = useStyles();
  return <p className={classes.smallText}>{children}</p>;
};
