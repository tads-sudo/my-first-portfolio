import React from "react";
import { useStyles } from "./style";
export const Card = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.card}>{children}</div>;
};
