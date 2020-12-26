import React from "react";
import { useStyles } from "./style";

export const LinkText = ({ children, href = "#", color = "TERTIARY" }) => {
  const classes = useStyles({ colorProps: color });
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={classes.linkText}
    >
      {children}
    </a>
  );
};
