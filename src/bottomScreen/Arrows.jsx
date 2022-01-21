import { Box } from "@chakra-ui/react";
import React from "react";

const WIDTH = 200;

const Arrows = () => {
  return (
    <Box
      position="absolute"
      height="75%"
      width={WIDTH}
      borderWidth={2}
      borderTopLeftRadius={WIDTH}
      borderBottomLeftRadius={WIDTH}
      borderColor="black"
      bg="gray.900"
      right="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box h="100%" w="100%" bgColor="gray.900" position="absolute" left="100%" />
      <Box
        h={WIDTH}
        w={WIDTH}
        borderRadius="50%"
        borderWidth={2}
        borderColor="black"
        position="relative"
        transform="translateX(25%)"
      >
        <Box
          position="absolute"
          width="40px"
          height="75%"
          bgColor="gray.400"
          left="50%"
          top="50%"
          borderRadius={4}
          transform="translate(-50%, -50%)"
        ></Box>
        <Box
          position="absolute"
          height="40px"
          width="75%"
          bgColor="gray.400"
          left="50%"
          top="50%"
          borderRadius={4}
          transform="translate(-50%, -50%)"
        ></Box>
      </Box>
    </Box>
  );
};

export default Arrows;
