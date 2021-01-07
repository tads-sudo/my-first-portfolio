import React from "react";
import { useStyles } from "./style";
import PropTypes from "prop-types";

export const SocialIcon = ({ children, size }) => {
  const classes = useStyles({ sizeProps: size });
  return (
    <svg
      className={classes.svgSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

SocialIcon.propTypes = {
  size: PropTypes.number,
};

SocialIcon.defaultProps = {
  size: 24,
};
