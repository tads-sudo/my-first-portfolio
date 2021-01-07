import React from "react";
import { useStyles } from "./style";

export const Heading2 = ({ children, style }) => {
  const classes = useStyles();
  return (
    <h2 className={classes.heading} style={style}>
      {children}
    </h2>
  );
};
