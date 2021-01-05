import React from "react";
import { useStyles } from "./style";

export const Subtitle = ({ children, bold = false }) => {
  const classes = useStyles({ bold: bold });
  return <p className={classes.subtitle}>{children}</p>;
};
