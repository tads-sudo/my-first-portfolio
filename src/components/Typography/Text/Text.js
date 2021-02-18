import React from "react";
import { useStyles } from "./style";

export const Text = ({ children, bold = false, style = {} }) => {
  const classes = useStyles({ bold: bold });
  return (
    <p className={classes.text} style={style}>
      {children}
    </p>
  );
};
