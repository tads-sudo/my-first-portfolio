import React from "react";
import PropTypes from "prop-types";
import { color as colorTheme } from "../../../theme";
import { useStyles } from "./style";

export const ColoredText = ({ children, color = "TERTIARY" }) => {
  const classes = useStyles({ colorProps: color });
  return <span className={classes.text}>{children}</span>;
};

ColoredText.propTypes = {
  children: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(colorTheme)),
};
