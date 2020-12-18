import React from "react";
import { useStyles } from "./style";

export const Text = ({ children, bold = false }) => {
  const classes = useStyles({ bold: bold });
  return <p className={classes.text}>{children}</p>;
};

export default Text;
