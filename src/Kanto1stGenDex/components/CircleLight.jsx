import React from "react";
import { Flex, useToken } from "@chakra-ui/react";
import { motion } from "framer-motion";

const CircleLight = ({ size, isOn }) => {
  const [blue600, gray700] = useToken("colors", ["blue.600", "gray.700"]);

  const lightVariants = {
    isOn: {
      backgroundColor: blue600,
      transition: { duration: 1.25 },
    },
    isOff: {
      backgroundColor: gray700,
      transition: { duration: 1.25 },
    },
  };

  return (
    <Flex
      w={`${size}px`}
      h={`${size}px`}
      zIndex={1}
      border="1px solid black"
      bgColor="gray.100"
      borderRadius="50%"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <motion.div
        variants={lightVariants}
        animate={isOn ? "isOn" : "isOff"}
        style={{
          width: "85%",
          height: "85%",
          zIndex: 1,
          border: "1px solid black",
          borderRadius: "50%",
        }}
      />
    </Flex>
  );
};

export default CircleLight;
