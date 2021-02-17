import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { meta } from "../../config";

export const Meta = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Meta.defaultProps = {
  title: meta.ABOUT.TITLE,
  description: meta.ABOUT.DESCRIPTION,
};
