import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import TypeBadge from "../components/TypeBadge";
import { usePokemonData } from "../../hooks/usePokemonData";
import { capitalize } from "../../util/capitalize";

const Description = ({ currentPokemon }) => {
  const { data } = usePokemonData({ id: currentPokemon + 1 });

  return (
    <Grid
      p={3}
      h="100%"
      w="100%"
      templateRows="repeat(12, 1fr)"
      templateColumns="repeat(12, 1fr)"
      gap={2}
    >
      <GridItem rowSpan={8} colSpan={5}>
        <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
          <Box
            h="150px"
            w="150px"
            bgColor="white"
            borderRadius={4}
            boxShadow="0 0 0 1px black, 0 0 0 10px var(--chakra-colors-gray-400), 0 0 0 11px black"
          >
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                currentPokemon + 1
              }.png`}
            />
          </Box>
        </Flex>
      </GridItem>
      <GridItem
        display="flex"
        flexDir="column"
        rowSpan={3}
        colSpan={7}
        bg="gray.200"
        borderRadius={5}
      >
        <Box
          w="100%"
          bgColor="red.500"
          borderTopRadius={5}
          padding="2px"
          paddingLeft={5}
        >
          N.º {currentPokemon + 1} {capitalize(data.name || "")}
        </Box>
        <Flex
          borderTopWidth="5px"
          borderTopStyle="solid"
          borderTopColor="red.300"
          flex={1}
          alignItems="center"
          paddingLeft={5}
        >
          {data.genera}
        </Flex>
      </GridItem>
      <GridItem
        rowSpan={2}
        colSpan={7}
        display="flex"
        alignItems="center"
        gap={2}
      >
        {data.types.map((type) => (
          <TypeBadge key={type} type={type} />
        ))}
      </GridItem>
      <GridItem rowSpan={3} colSpan={7} bg="gray.200" borderRadius={5} p={1}>
        <Flex pr={5} pl={5}>
          <Box>Height</Box>
          <Box marginLeft="auto">{`${data.height} m`}</Box>
        </Flex>
        <Flex
          pr={5}
          pl={5}
          borderTopStyle="dotted"
          borderTopWidth="1px"
          borderTopColor="gray.800"
        >
          <Box>Weight</Box>
          <Box marginLeft="auto">{`${data.weight} kg`}</Box>
        </Flex>
      </GridItem>
      <GridItem
        position="relative"
        borderRadius={5}
        p={3}
        pl={10}
        pr={10}
        rowSpan={4}
        colSpan={12}
        bg="gray.200"
      >
        <Box
          position="absolute"
          left={0}
          top={0}
          borderTopLeftRadius={5}
          borderBottomLeftRadius={5}
          h="100%"
          w="10px"
          bgColor="red.500"
        />
        <Box
          position="absolute"
          left="10px"
          top={0}
          h="100%"
          w="5px"
          bgColor="red.300"
        />
        {data.description}
        <Box
          position="absolute"
          right="10px"
          top={0}
          h="100%"
          w="5px"
          bgColor="red.300"
        />
        <Box
          position="absolute"
          right={0}
          top={0}
          borderTopRightRadius={5}
          borderBottomRightRadius={5}
          h="100%"
          w="10px"
          bgColor="red.500"
        />
      </GridItem>
    </Grid>
  );
};

export default Description;
