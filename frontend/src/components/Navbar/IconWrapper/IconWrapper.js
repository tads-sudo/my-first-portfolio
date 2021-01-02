import React from "react";
import { useStyles } from "./style";

export const IconWrapper = ({ children, onClick }) => {
  const classes = useStyles();
  return (
    <button className={classes.iconWrapper} onClick={onClick}>
      {children}
    </button>
  );
};
