import { Box } from "@chakra-ui/react";
import React from "react";

const WIDTH = 250;

const Control = () => {
  return (
    <Box
      position="absolute"
      height="100%"
      width={WIDTH}
      borderWidth={2}
      borderTopLeftRadius={WIDTH}
      borderBottomLeftRadius={WIDTH}
      borderColor="black"
      bg="gray.900"
      right="100%"
    >
      <Box position="relative" h="100%" w="100%">
        <Box
          position="absolute"
          bgColor="green.500"
          w={4}
          h={2}
          top="50%"
          transform="translateX(-1px)"
        ></Box>
      </Box>
    </Box>
  );
};

export default Control;
