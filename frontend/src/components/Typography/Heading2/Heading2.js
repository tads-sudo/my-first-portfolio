import React from "react";
import { useStyles } from "./style";

export const Heading2 = ({ children }) => {
  const classes = useStyles();
  return <h2 className={classes.heading}>{children}</h2>;
};
