import React from "react";
import { useStyles } from "./style";

export const Heading1 = ({ children }) => {
  const classes = useStyles();
  return <h1 className={classes.heading}>{children}</h1>;
};

export default Heading1;
