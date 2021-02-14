import React from "react";
import { useStyles } from "./style";
import { TextField } from "@material-ui/core";

export const FormTextArea = React.forwardRef(({ ...props }, ref) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.formTextArea}
      id="custom-css-multiline-static"
      inputRef={ref}
      {...props}
    />
  );
});
