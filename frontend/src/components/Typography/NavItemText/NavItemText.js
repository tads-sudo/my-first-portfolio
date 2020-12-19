import React from "react";
import { useStyles } from "./style";

export const NavItemText = ({ children }) => {
  const classes = useStyles();
  return <p className={classes.navItem}>{children}</p>;
};

export default NavItemText;
