import { Box, Flex } from "@chakra-ui/react";
import * as React from "react";

const Screen = () => (
  <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
    <Box
      w={50}
      h="90%"
      bgColor="black"
      borderTopLeftRadius={4}
      borderBottomLeftRadius={4}
      bgColor="gray.900"
      borderColor="black"
      borderRightColor="gray.900"
      borderWidth={2}
    />
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
        ></Box>
      </Box>
    </Box>
    <Flex
      w="60px"
      h="90%"
      bgColor="gray.900"
      borderColor="black"
      borderLeftColor="gray.900"
      borderWidth={2}
      borderTopRightRadius={4}
      borderBottomRightRadius={4}
      alignItems="center"
      justifyContent="center"
    >
      <Box h={4} w={4} bgColor="black" borderRadius="50%" />
    </Flex>
  </Flex>
);

export default Screen;
