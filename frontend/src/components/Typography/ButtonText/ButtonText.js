import React from "react";
import { useStyles } from "./style";

export const ButtonText = ({ children }) => {
  const classes = useStyles();
  return <p className={classes.button}>{children}</p>;
};
