import React from "react";
// import { useStyles } from "./style";
import { color as themeColor } from "../../theme";

export const Icon = ({ src, color = "SECONDARY", style }) => {
  // const classes = useStyles();
  return (
    <svg
      // className={classes.icon}
      style={style}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={src} fill={themeColor[color]} />
    </svg>
  );
};

export default Icon;
