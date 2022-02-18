import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import React from "react";
import PokeballMarker from "../components/PokeballMarker";
import PokemonList from "../components/PokemonList";

const Info = ({ pokemon, currentPokemon, setCurrentPokemon }) => {
  return (
    <Grid p={3} h="100%" w="100%" gridTemplateColumns="30% 70%">
      <Flex
        position="absolute"
        left={0}
        top={0}
        transform="translate(13px, 12px)"
        h="calc(100% - 24px)"
        w="calc(100% - 15px)"
        overflow="hidden"
      >
        <PokeballMarker />
      </Flex>
      <Box />
      <Flex w="100%" h="100%" justify="flex-end" overflow="hidden">
        <PokemonList
          currentPokemon={currentPokemon}
          setCurrentPokemon={setCurrentPokemon}
          pokemon={pokemon}
        />
      </Flex>
    </Grid>
  );
};

export default Info;
