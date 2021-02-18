import React from "react";
import { useStyles } from "./style";
import PropTypes from "prop-types";

export const SkillIcon = ({ children, size, viewBox }) => {
  const classes = useStyles({ sizeProps: size });
  return (
    <svg
      className={classes.skillIcon}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

SkillIcon.propTypes = {
  size: PropTypes.number,
  viewBox: PropTypes.string,
};

SkillIcon.defaultProps = {
  size: 24,
  viewBox: "0 0 100 40",
};
