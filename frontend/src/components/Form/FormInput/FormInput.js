import React from "react";
import { useStyles } from "./style";

export const FormInput = ({ placeholder, type, isValid = null }) => {
  const classes = useStyles({ isValid });
  return (
    <input
      className={classes.formInput}
      placeholder={placeholder}
      type={type}
    />
  );
};
