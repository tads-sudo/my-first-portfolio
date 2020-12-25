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
    disabledProps: disabled,
  });
  return (
    <button className={classes.button} disabled={disabled}>
      {children}
    </button>
  );
};
