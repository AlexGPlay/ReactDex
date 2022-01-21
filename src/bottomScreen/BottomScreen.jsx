import { Box } from "@chakra-ui/react";
import React from "react";
import Arrows from "./Arrows";
import Control from "./Control";
import Screen from "../components/Screen";

const BottomScreen = () => {
  return (
    <Box
      bgColor="red.400"
      w={800}
      h={400}
      borderRadius={4}
      borderBottomRightRadius={100}
      borderWidth={2}
      borderColor="black"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Control />
      <Arrows />
      <Box w="90%" h="80%" display="flex" justifyContent="center" alignItems="center">
        <Box w="100%" h="100%" pl="50px">
          <Screen></Screen>
        </Box>
        <Box
          w="60px"
          h="90%"
          bgColor="gray.900"
          borderBottomRightRadius="100px"
          display="flex"
          flexDir="column"
          justifyContent="flex-end"
          paddingBottom={10}
          alignItems="center"
          gap={10}
        >
          <Box h={4} w={4} borderRadius="50%" bgColor="gray.400" />
          <Box h={4} w={4} borderRadius="50%" bgColor="gray.400" />
        </Box>
      </Box>
    </Box>
  );
};

export default BottomScreen;
