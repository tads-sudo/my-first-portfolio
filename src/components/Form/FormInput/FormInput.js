import React from "react";
import { useStyles } from "./style";
import { TextField } from "@material-ui/core";

export const FormInput = React.forwardRef(({ ...props }, ref) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.formInput}
      id="custom-css-full-width-input"
      inputRef={ref}
      {...props}
    />
  );
});
