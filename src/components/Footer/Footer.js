import React from "react";
import { useStyles } from "./style";

export const Footer = ({ children }) => {
  const classes = useStyles();
  return <footer className={classes.footer}>{children}</footer>;
};
