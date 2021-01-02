import React from "react";
import { useStyles } from "./style";

export const CloseIcon = () => {
  const classes = useStyles();
  return (
    <svg
      className={classes.closeIcon}
      viewBox="0 0 68 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42.385 19.5L34 27.885L25.615 19.5L23.5 21.615L31.885 30L23.5 38.385L25.615 40.5L34 32.115L42.385 40.5L44.5 38.385L36.115 30L44.5 21.615L42.385 19.5Z"
        fill="#F9FAF7"
      />
    </svg>
  );
};

export default CloseIcon;
