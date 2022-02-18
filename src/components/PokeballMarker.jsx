import { Box } from "@chakra-ui/react";
import React from "react";

const PokeballMarker = () => {
  return (
    <Box
      w="400px"
      h="400px"
      position="relative"
      bgColor="black"
      borderRadius="50%"
      borderStyle="solid"
      borderColor="black"
      borderWidth={5}
      transform="translate(-50%, -15%)"
    >
      <Box
        h="200px"
        w="100%"
        position="absolute"
        borderTopRadius="400px"
        borderBottomWidth={5}
        borderBottomColor="black"
        borderBottomStyle="solid"
        bgColor="red"
        top={0}
        left="50%"
        transform="translateX(-50%)"
      />
      <Box
        h="200px"
        w="100%"
        position="absolute"
        borderBottomRadius="400px"
        borderTopWidth={5}
        borderTopColor="black"
        borderTopStyle="solid"
        bgColor="white"
        bottom={0}
        left="50%"
        transform="translateX(-50%)"
      />
      <Box
        h="50px"
        w="50px"
        position="absolute"
        borderRadius="50%"
        bgColor="black"
        boxShadow="0 0 0 15px white,
                   0 0 0 25px black"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      />
    </Box>
  );
};

export default PokeballMarker;
