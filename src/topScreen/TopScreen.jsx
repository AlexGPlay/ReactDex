import { Box } from "@chakra-ui/react";
import React from "react";
import Screen from "./Screen";
import Speaker from "./Speaker";

const TopScreen = ({ pokemon, currentPokemon, setCurrentPokemon }) => {
  return (
    <Box
      bgColor="red.400"
      w={800}
      h={400}
      borderRadius={4}
      borderTopRightRadius={100}
      borderWidth={2}
      borderColor="black"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Speaker />
      <Box w="90%" h="80%">
        <Screen
          currentPokemon={currentPokemon}
          setCurrentPokemon={setCurrentPokemon}
          pokemon={pokemon}
        />
      </Box>
    </Box>
  );
};

export default TopScreen;
