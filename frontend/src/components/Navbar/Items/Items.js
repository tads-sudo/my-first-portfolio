import React from "react";
import { useStyles } from "./style";

export const Items = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.items}>{children}</div>;
};

export default Items;
