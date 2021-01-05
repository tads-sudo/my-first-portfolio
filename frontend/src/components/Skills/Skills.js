import React from "react";
import { useStyles } from "./style";
import { ReactSVG } from "react-svg";

export const Skills = ({ name, color, size = "25", transform, style }) => {
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
        svg.setAttribute("class", `${classes.skillsLogo}`);
      }}
    />
  );
};
