import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import * as React from "react";
import Center from "./center/Center";
import TopScreen from "./topScreen/TopScreen";

const App = () => (
  <ChakraProvider>
    <Flex w="100%" h="100%" justifyContent="center" alignItems="center" bgColor="whitesmoke">
      <Box width={800}>
        <TopScreen />
        <Center />
      </Box>
    </Flex>
  </ChakraProvider>
);

export default App;
