import React from "react";
import CustomLight from "./CustomLight";

const SmallCircleLight = ({ size, ...props }) => {
  return (
    <CustomLight width={size} height={size} borderRadius="50%" {...props} />
  );
};

export default SmallCircleLight;
