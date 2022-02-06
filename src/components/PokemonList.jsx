import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { requestList } from "../api/requestList";
import { capitalize } from "../util/capitalize";
import ListItem from "./ListItem";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState();
  const [currentPokemon, setCurrentPokemon] = useState(148);

  useEffect(() => {
    requestList({ from: 0, to: 151 })
      .then((response) => response.json())
      .then(({ results }) => setPokemon(results));
  }, []);

  if (!pokemon) return <></>;

  const pokemonList = (() => {
    const list = [];

    for (let i = currentPokemon - 3; i <= currentPokemon + 3; i++) {
      const name = pokemon[i] ? capitalize(pokemon[i].name) : null;
      const width = 100 - Math.abs(i - currentPokemon) * 5;
      list.push({ name, number: i + 1, width: `${width}%`, heigth: "30px" });
    }

    return list;
  })();

  return (
    <Flex
      width="75%"
      height="100%"
      flexDir="column"
      justifyContent="center"
      alignItems="flex-end"
      gap={2}
    >
      {pokemonList.map((item) =>
        item.name ? (
          <ListItem
            key={item.name}
            name={item.name}
            number={item.number}
            style={{ width: item.width, height: item.heigth }}
          />
        ) : (
          <Box style={{ height: item.heigth }} key={item.number}></Box>
        )
      )}
    </Flex>
  );
};

export default PokemonList;
