import React from "react";
import { useStyles } from "./style";

export const FormGroup = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.formGroup} {...props}>
      {children}
    </div>
  );
};
