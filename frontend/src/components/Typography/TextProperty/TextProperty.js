import React from "react";
import PropTypes from "prop-types";
import {
  color as colorTheme,
  font_weight as weightTheme,
} from "../../../theme";
import { useStyles } from "./style";

export const TextProperty = ({ children, color = "TERTIARY", weight = "" }) => {
  const classes = useStyles({ colorProps: color, weightProps: weight });
  return <span className={classes.text}>{children}</span>;
};

TextProperty.propTypes = {
  children: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(colorTheme)),
  weight: PropTypes.oneOf(Object.keys(weightTheme)),
};
