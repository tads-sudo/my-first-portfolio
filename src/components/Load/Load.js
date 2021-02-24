import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export const Load = ({ color }) => {
  return (
    <CircularProgress style={{ color: color, width: "50%", height: "50%" }} />
  );
};
