import React from "react";
import { useStyles } from "./style";

export const FormGroup = ({ children, style = {} }) => {
  const classes = useStyles();
  return (
    <div style={style} className={classes.formGroup}>
      {children}
    </div>
  );
};
