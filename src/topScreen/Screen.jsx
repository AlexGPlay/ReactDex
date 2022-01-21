import { Box, Flex } from "@chakra-ui/react";
import CommonScreen from "../components/Screen";
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
    <CommonScreen />
    <Flex
      w="60px"
      h="90%"
      bgColor="gray.900"
      borderColor="black"
      borderLeftColor="gray.900"
      borderWidth={2}
      borderTopRightRadius="100px"
      borderBottomRightRadius={4}
      alignItems="center"
      justifyContent="center"
    >
      <Box h={4} w={4} bgColor="black" borderRadius="50%" />
    </Flex>
  </Flex>
);

export default Screen;
