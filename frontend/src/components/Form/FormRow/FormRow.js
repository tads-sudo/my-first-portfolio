import React from "react";
import { useStyles } from "./style";

export const FormRow = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.formRow}>{children}</div>;
};
