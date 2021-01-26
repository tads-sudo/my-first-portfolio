import React, { useState } from "react";
import { useStyles } from "./style";
import PropTypes from "prop-types";
import { Load } from "../Load";

export const Image = ({
  alt,
  widthM,
  heightM,
  widthT,
  heightT,
  widthD,
  heightD,
  ...props
}) => {
  const classes = useStyles({
    widthM,
    heightM,
    widthT,
    heightT,
    widthD,
    heightD,
  });

  const [isLoading, setLoadingState] = useState(true);

  return (
    <>
      <div style={{ display: isLoading ? "block" : "none" }}>
        <Load />
      </div>
      <img
        className={classes.image}
        onLoad={() => setLoadingState(false)}
        style={{ display: isLoading ? "none" : "block", ...props.style }}
        alt={alt}
        {...props}
      />
    </>
  );
};

Image.propTypes = {
  widthD: PropTypes.string,
  heightD: PropTypes.string,
  widthT: PropTypes.string,
  heightT: PropTypes.string,
  widthM: PropTypes.string,
  heightM: PropTypes.string,
};
