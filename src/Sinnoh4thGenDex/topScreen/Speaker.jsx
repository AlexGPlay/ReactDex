import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const WIDTH = 200;

const Speaker = () => (
  <Flex
    bgColor="red.400"
    h="75%"
    w={WIDTH}
    borderWidth={2}
    borderTopLeftRadius={WIDTH}
    borderBottomLeftRadius={WIDTH}
    borderLeftColor="black"
    borderTopColor="black"
    borderBottomColor="black"
    borderRightColor="red.400"
    position="absolute"
    right="100%"
    top="50%"
    transform="translateY(-50%)"
    justifyContent="center"
    alignItems="center"
  >
    <Box w="100%" h="100%" position="relative">
      <Box
        w={5}
        h={5}
        bg="black"
        borderRadius="50%"
        left={115}
        top="25%"
        position="absolute"
        transform="translateX(-50%)"
      />
      <Box
        w={5}
        h={5}
        bg="black"
        borderRadius="50%"
        left={115}
        bottom="25%"
        position="absolute"
        transform="translateX(-50%)"
      />
      <Box
        w={5}
        h={5}
        bg="black"
        borderRadius="50%"
        left={50}
        top="50%"
        transform="translateY(-50%)"
        position="absolute"
      />
      <Box
        w={5}
        h={5}
        bg="black"
        borderRadius="50%"
        left={165}
        top="50%"
        transform="translateY(-50%)"
        position="absolute"
      />
    </Box>
  </Flex>
);

export default Speaker;
