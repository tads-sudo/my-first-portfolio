import React from "react";
import { useStyles } from "./style";

export const Heading3 = ({ children, style }) => {
  const classes = useStyles();
  return (
    <h3 className={classes.heading} style={style}>
      {children}
    </h3>
  );
};
