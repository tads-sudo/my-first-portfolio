import React from "react";
import { useStyles } from "./style";
import { Text } from "../../Typography";

export const FormInputLabel = ({ children }) => {
  const classes = useStyles();
  return (
    <label className={classes.formInputLabel}>
      <Text>{children}</Text>
    </label>
  );
};
