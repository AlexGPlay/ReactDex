import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import * as React from "react";
import BottomScreen from "./bottomScreen/BottomScreen";
import Center from "./center/Center";
import TopScreen from "./topScreen/TopScreen";
import { requestList } from "./api/requestList";
import { requestPokemonInfo } from "./api/requestPokemonInfo";

const App = () => {
  const [pokemon, setPokemon] = React.useState();
  const [currentPokemon, setCurrentPokemon] = React.useState(0);
  const [currentPokemonData, setCurrentPokemonData] = React.useState();

  React.useEffect(() => {
    requestList({ from: 0, to: 151 })
      .then((response) => response.json())
      .then(({ results }) => setPokemon(results));
  }, []);

  React.useEffect(() => {
    requestPokemonInfo({ id: currentPokemon + 1 })
      .then((response) => response.json())
      .then((data) => setCurrentPokemonData(data));
  }, [currentPokemon]);

  return (
    <ChakraProvider>
      <Flex w="100%" h="100%" justifyContent="center" alignItems="center" bgColor="whitesmoke">
        <Box width={800}>
          <TopScreen
            pokemon={pokemon}
            currentPokemon={currentPokemon}
            setCurrentPokemon={setCurrentPokemon}
            currentPokemonData={currentPokemonData}
          />
          <Center />
          <BottomScreen />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
