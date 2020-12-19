import React from "react";
import { useStyles } from "./style";

export const PlaceholderText = ({ children }) => {
  const classes = useStyles();
  return <p className={classes.placeholder}>{children}</p>;
};

export default PlaceholderText;
