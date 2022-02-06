import { AspectRatio, Box, Flex, Grid } from "@chakra-ui/react";
import React from "react";
import PokemonList from "../components/PokemonList";

const Info = () => {
  return (
    <Grid p={5} h="100%" w="100%" gridTemplateColumns="30% 70%">
      <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
        <Box
          h="150px"
          w="150px"
          bgColor="white"
          borderRadius={4}
          boxShadow="0 0 0 1px black, 0 0 0 10px var(--chakra-colors-gray-400), 0 0 0 11px black"
        ></Box>
      </Flex>
      <Flex w="100%" h="100%" justify="flex-end">
        <PokemonList />
      </Flex>
    </Grid>
  );
};

export default Info;
