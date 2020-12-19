import React from "react";
import { useStyles } from "./style";

export const Heading3 = ({ children }) => {
  const classes = useStyles();
  return <h3 className={classes.heading}>{children}</h3>;
};

export default Heading3;
