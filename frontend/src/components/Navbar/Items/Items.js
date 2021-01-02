import React from "react";
import { useStyles } from "./style";

export const Items = ({ children }) => {
  const classes = useStyles();

  return <ul className={classes.items}>{children}</ul>;
};

export default Items;
