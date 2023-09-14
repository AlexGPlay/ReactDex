import { Flex, Box, Grid, useToken, Center } from "@chakra-ui/react";
import React from "react";
import SmallCircleLight from "./SmallCircleLight";
import CustomLight from "./CustomLight";
import { useResizeObserver } from "../../../hooks/useResizeObserver";

const CoverInterior = () => {
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
      <Box h="30%" w="100%" background="gray.800" borderRadius="xl" />
      <Box h="50%" w="100%" marginTop={3}>
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
          justifyContent="space-around"
        >
          <SmallCircleLight
            size={halfRowHeight}
            offColor={red500}
            onColor={red900}
            isOn={false}
          />
          <SmallCircleLight
            size={halfRowHeight}
            offColor={green500}
            onColor={green900}
            isOn={false}
          />
          <Center>
            <CustomLight
              width={40}
              height={halfRowHeight / 3}
              borderRadius="10px"
              offColor={gray600}
              onColor={gray600}
            />
          </Center>
          <Center>
            <CustomLight
              width={40}
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
              size={secondHalfRowHeight * 0.6}
              onColor={orange400}
              offColor={orange400}
            />
          </Center>
        </Flex>
      </Box>
      <Flex gap={3} h="20%" w="100%" marginTop={3}>
        <Box
          border="1px solid black"
          borderRadius="2xl"
          h="100%"
          w="50%"
          backgroundColor="gray.600"
        />
        <Box
          border="1px solid black"
          borderRadius="2xl"
          h="100%"
          w="50%"
          backgroundColor="gray.600"
        />
      </Flex>
    </Flex>
  );
};

export default CoverInterior;
