import { Box } from "@chakra-ui/react";
import React from "react";

const Center = () => {
  return (
    <Box
      w="100%"
      h={50}
      bgColor="red.400"
      borderColor="black"
      borderWidth={2}
      borderRadius={4}
      position="relative"
    >
      <Box position="absolute" h="100%" left={20} borderColor="black" borderRightWidth={2}></Box>
      <Box
        position="absolute"
        h="50%"
        w={2}
        borderRadius={10}
        background="black"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
      ></Box>
      <Box position="absolute" h="100%" right={20} borderColor="black" borderRightWidth={2}></Box>
    </Box>
  );
};

export default Center;
