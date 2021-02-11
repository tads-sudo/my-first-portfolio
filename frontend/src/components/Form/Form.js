import React from "react";
import { useStyles } from "./style";
import { Form as FormBase } from "formik";

export const Form = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <FormBase className={classes.form} {...props}>
      {children}
    </FormBase>
  );
};
