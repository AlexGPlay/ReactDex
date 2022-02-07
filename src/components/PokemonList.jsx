import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { capitalize } from "../util/capitalize";
import ListItem from "./ListItem";

const CENTER_PX = 129;
const ELEMENT_HEIGHT = 30;
const ELEMENT_GAP = 8;

const PokemonList = ({ pokemon, currentPokemon, setCurrentPokemon }) => {
  if (!pokemon) return <></>;

  const pokemonList = (() => {
    const list = [];

    for (let i = currentPokemon - 25; i <= currentPokemon + 25; i++) {
      const name = pokemon[i] ? capitalize(pokemon[i].name) : null;
      const distance = i - currentPokemon;
      const top = CENTER_PX + distance * (ELEMENT_HEIGHT + ELEMENT_GAP) - ELEMENT_HEIGHT / 2;

      const width = 100 - Math.abs(distance) * 5;

      list.push({
        name,
        number: i + 1,
        width: `${width}%`,
        heigth: `${ELEMENT_HEIGHT}px`,
        top: `${top}px`,
        selected: i === currentPokemon,
      });
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
      position="relative"
      gap={`${ELEMENT_GAP}px`}
    >
      {pokemonList.map((item) =>
        item.name ? (
          <Flex
            position="absolute"
            top={item.top}
            transition="top 1s ease"
            width="100%"
            justifyContent="flex-end"
            key={item.name}
          >
            {item.selected ? (
              <Flex
                w="110%"
                h="40px"
                bgColor="red.500"
                position="absolute"
                borderRadius="5px"
                transform="translate(5px, -5px)"
                justifyContent="flex-start"
                alignItems="center"
                paddingLeft="5px"
              >
                <Box
                  h="0px"
                  w="0px"
                  borderTop="10px solid transparent"
                  borderBottom="10px solid transparent"
                  borderLeft="15px solid white"
                />
              </Flex>
            ) : null}
            <ListItem
              name={item.name}
              number={item.number}
              onClick={() => setCurrentPokemon(item.number - 1)}
              style={{ width: item.width, height: item.heigth, cursor: "pointer" }}
            />
          </Flex>
        ) : null
      )}
    </Flex>
  );
};

export default PokemonList;
