import React from "react";
import Lottie from "react-lottie";
import animationData from "../../lotties/loading.json";

export const Load = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      style={{
        margin: "none",
        objectFit: "contain",
        height: "auto",
        width: "auto",
      }}
    />
  );
};
