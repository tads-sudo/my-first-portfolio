import React from "react";
import { useStyles } from "./style";

export const ContactFormWrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.contactFormWrapper}>{children}</div>;
};
