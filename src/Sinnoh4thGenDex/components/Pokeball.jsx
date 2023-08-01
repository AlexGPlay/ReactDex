import { Box } from "@chakra-ui/react";
import React from "react";

const Pokeball = () => {
  return (
    <Box position="relative" w="20px" h="20px" bgColor="yellow.500" borderRadius="50%">
      <Box
        w="15px"
        h="7.5px"
        position="absolute"
        borderRadius="18px"
        borderBottomRadius={0}
        left="50%"
        top="2px"
        transform="translateX(-50%)"
        bgColor="red"
      />
      <Box
        w="15px"
        h="7.5px"
        position="absolute"
        borderRadius="18px"
        borderTopRadius={0}
        left="50%"
        bottom="2px"
        transform="translateX(-50%)"
        bgColor="white"
      />
      <Box
        h="5px"
        w="5px"
        bgColor="white"
        position="absolute"
        top="50%"
        left="50%"
        borderRadius="50%"
        borderColor="yellow.500"
        borderWidth={1}
        transform="translate(-50%, -50%)"
      />
    </Box>
  );
};

export default Pokeball;
