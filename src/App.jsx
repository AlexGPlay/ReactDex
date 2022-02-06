import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import * as React from "react";
import BottomScreen from "./bottomScreen/BottomScreen";
import Center from "./center/Center";
import TopScreen from "./topScreen/TopScreen";
import { requestList } from "./api/requestList";

const App = () => {
  const [pokemon, setPokemon] = React.useState();
  const [currentPokemon, setCurrentPokemon] = React.useState(148);

  React.useEffect(() => {
    requestList({ from: 0, to: 151 })
      .then((response) => response.json())
      .then(({ results }) => setPokemon(results));
  }, []);

  return (
    <ChakraProvider>
      <Flex w="100%" h="100%" justifyContent="center" alignItems="center" bgColor="whitesmoke">
        <Box width={800}>
          <TopScreen
            pokemon={pokemon}
            currentPokemon={currentPokemon}
            setCurrentPokemon={setCurrentPokemon}
          />
          <Center />
          <BottomScreen />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
