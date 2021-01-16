import React from "react";
import { useStyles } from "./style";
import PropTypes from "prop-types";

export const CompanyLogo = ({ children, viewBox, width, height, style }) => {
  const classes = useStyles({ width, height });
  return (
    <svg
      className={classes.companyLogo}
      style={style}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

CompanyLogo.propTypes = {
  viewBox: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
