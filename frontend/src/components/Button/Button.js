import React from "react";
import { useStyles } from "./style";

export const Button = ({
  children,
  color = "PRIMARY",
  size = "LG",
  corner = "0",
  disabled = false,
  type = "fill",
}) => {
  const classes = useStyles({
    colorProps: color,
    sizeProps: size,
    cornerProps: corner,
    typeProps: type,
  });
  return (
    <button className={classes.button} disabled={disabled}>
      {children}
    </button>
  );
};

export const ButtonLink = ({
  children,
  href = "#",
  color = "PRIMARY",
  size = "LG",
  corner = "0",
  type = "fill",
}) => {
  const classes = useStyles({
    colorProps: color,
    sizeProps: size,
    cornerProps: corner,
    typeProps: type,
  });
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={classes.button}
    >
      {children}
    </a>
  );
};
