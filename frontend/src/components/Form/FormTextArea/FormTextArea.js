import React from "react";
import { useStyles } from "./style";

export const FormTextArea = ({ placeholder }) => {
  const classes = useStyles();
  return (
    <textarea
      placeholder={placeholder}
      className={classes.formTextArea}
      rows="3"
    />
  );
};
