import React from "react";
import { useStyles } from "./style";
import { TextField } from "@material-ui/core";

export const FormTextArea = ({ ...props }) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.formTextArea}
      id="custom-css-multiline-static"
      {...props}
    />
  );
};
