import { Box } from "@chakra-ui/react";
import React from "react";

const Screen = ({ children }) => {
  return (
    <Box
      w="100%"
      h="100%"
      position="relative"
      bgColor="lightcoral"
      borderRadius={4}
      borderWidth={2}
      borderColor="black"
    >
      <Box w="100%" h="100%" borderRadius={4} borderWidth={10} borderColor="gray.400">
        <Box
          w="100%"
          h="100%"
          borderRadius={4}
          borderWidth={2}
          borderColor="black"
          bgColor="blue.700"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Screen;
