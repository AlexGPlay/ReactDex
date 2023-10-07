import { Flex, Box, Grid, useToken, Center, Text } from "@chakra-ui/react";
import React from "react";
import SmallCircleLight from "./SmallCircleLight";
import CustomLight from "./CustomLight";
import { useResizeObserver } from "../../../hooks/useResizeObserver";
import { capitalize } from "../../../util/capitalize";
import getTypeColor from "../../../util/getTypeColor";

const CoverInterior = ({ pokemonData }) => {
  const [red500, red900, green500, green900, gray600, orange400] = useToken(
    "colors",
    ["red.500", "red.900", "green.500", "green.900", "gray.600", "orange.400"]
  );
  const {
    setRef: setHalfRowRef,
    dimensions: { height: halfRowHeight },
  } = useResizeObserver();

  const {
    setRef: setSecondHalfRowRef,
    dimensions: { height: secondHalfRowHeight },
  } = useResizeObserver();

  return (
    <Flex h="100%" w="100%" flexDir="column">
      <Box
        h="25%"
        w="100%"
        background={!!pokemonData ? "#C8EBE7" : "gray.800"}
        borderRadius="xl"
        border="1px solid black"
        padding="10px"
        overflow="hidden"
      >
        <Text fontSize="lg" fontWeight="bold">
          {capitalize(pokemonData.name)}
        </Text>
        <Text>{pokemonData.description}</Text>
      </Box>
      <Box h="50%" w="100%" marginTop={10}>
        <Grid
          bgColor="black"
          gridGap="1px"
          padding="1px"
          gridTemplateColumns="repeat(5, 1fr)"
          h="50%"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <Box h="100%" backgroundColor="blue.500" />
          ))}
        </Grid>
        <Flex
          ref={setHalfRowRef}
          marginTop={3}
          h="10%"
          justifyContent="flex-end"
          gap={3}
        >
          <Center>
            <CustomLight
              width={65}
              height={halfRowHeight / 3}
              borderRadius="10px"
              offColor={gray600}
              onColor={gray600}
            />
          </Center>
          <Center>
            <CustomLight
              width={65}
              height={halfRowHeight / 3}
              borderRadius="10px"
              offColor={gray600}
              onColor={gray600}
            />
          </Center>
        </Flex>
        <Flex ref={setSecondHalfRowRef} marginTop={3} h="40%">
          <Box
            h={`${secondHalfRowHeight * 0.5}px`}
            w={`${secondHalfRowHeight * 0.5}px`}
            backgroundColor="white"
            border="1px solid black"
          />
          <Box
            h={`${secondHalfRowHeight * 0.5}px`}
            w={`${secondHalfRowHeight * 0.5}px`}
            backgroundColor="white"
            border="1px solid black"
          />
          <Center marginLeft="auto">
            <SmallCircleLight
              size={secondHalfRowHeight * 0.4}
              onColor={orange400}
              offColor={orange400}
            />
          </Center>
        </Flex>
      </Box>
      <Flex gap={5} h="15%" w="100%" marginTop={10}>
        <Flex
          border="1px solid black"
          borderRadius="2xl"
          h="100%"
          w="50%"
          backgroundColor={
            pokemonData.types[0]
              ? getTypeColor(pokemonData.types[0])
              : "gray.600"
          }
          justifyContent="center"
          alignItems="center"
          fontSize="2xl"
          fontWeight="bold"
        >
          {capitalize(pokemonData?.types[0])}
        </Flex>
        <Flex
          border="1px solid black"
          borderRadius="2xl"
          h="100%"
          w="50%"
          backgroundColor={
            pokemonData.types[1]
              ? getTypeColor(pokemonData.types[1])
              : "gray.600"
          }
          justifyContent="center"
          alignItems="center"
          fontSize="2xl"
          fontWeight="bold"
        >
          {capitalize(pokemonData?.types[1])}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CoverInterior;
