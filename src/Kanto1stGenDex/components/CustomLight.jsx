import React from "react";
import { motion } from "framer-motion";

const CustomLight = ({
  width,
  height,
  borderRadius,
  offColor,
  onColor,
  isOn,
}) => {
  const lightVariants = {
    isOn: {
      backgroundColor: onColor,
      transition: { duration: 1.25 },
    },
    isOff: {
      backgroundColor: offColor,
      transition: { duration: 1.25 },
    },
  };

  return (
    <motion.div
      variants={lightVariants}
      animate={isOn ? "isOn" : "isOff"}
      style={{
        width,
        height,
        zIndex: 1,
        border: "1px solid black",
        borderRadius,
      }}
    />
  );
};

export default CustomLight;
