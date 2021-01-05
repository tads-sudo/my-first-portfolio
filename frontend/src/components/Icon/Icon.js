import React from "react";
import { useStyles } from "./style";
import { ReactSVG } from "react-svg";

export const Icon = ({ name, color, size = 24, transform, style }) => {
  const classes = useStyles({
    colorProps: color,
    sizeProps: size,
    transformProps: transform,
  });
  return (
    <ReactSVG
      style={style}
      src={`resources/Icons/${name}.svg`}
      beforeInjection={(svg) => {
        svg.setAttribute("class", `${classes.svg}`);
      }}
    />
  );
};
