import React from "react";
import { useStyles } from "./style";

export const Menu = ({ onClick }) => {
  const classes = useStyles();
  return (
    <svg
      onClick={onClick}
      className={classes.menuIcon}
      viewBox="0 0 68 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.5 39H20.5V36H47.5V39ZM47.5 31.5H20.5V28.5H47.5V31.5ZM47.5 24H20.5V21H47.5V24Z"
        fill="#F9FAF7"
      />
    </svg>
  );
};
