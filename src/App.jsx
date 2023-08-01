import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Sinnoh4thGenDex from "./Sinnoh4thGenDex";

const App = () => {
  return (
    <ChakraProvider>
      <Sinnoh4thGenDex />
    </ChakraProvider>
  );
};

export default App;
