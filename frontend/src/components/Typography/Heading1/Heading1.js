import React from "react";
import { useStyles } from "./style";

export const Heading1 = ({ children, style }) => {
  const classes = useStyles();
  return (
    <h1 className={classes.heading} style={style}>
      {children}
    </h1>
  );
};
