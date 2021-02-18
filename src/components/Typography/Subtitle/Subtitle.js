import React from "react";
import { useStyles } from "./style";

export const Subtitle = ({ children, bold = false, style }) => {
  const classes = useStyles({ bold: bold });
  return (
    <p className={classes.subtitle} style={style}>
      {children}
    </p>
  );
};
