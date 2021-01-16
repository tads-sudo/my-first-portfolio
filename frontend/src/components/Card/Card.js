import React from "react";
import { useStyles } from "./style";
export const Card = ({ children, style }) => {
  const classes = useStyles();
  return (
    <div className={classes.card} style={style}>
      {children}
    </div>
  );
};
