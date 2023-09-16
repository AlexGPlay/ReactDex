import React from "react";
import missingNo from "../../assets/missingno.png";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const PokedexIcon = ({
  region,
  gen,
  link,
  onClick,
  preview = missingNo,
  size = 150,
}) => {
  const parsedRegion = Array.isArray(region) ? region.join(" / ") : region;
  const parsedGen = Array.isArray(gen) ? gen.join(" / ") : gen;

  return (
    <Box
      borderStyle="solid"
      borderWidth={1}
      borderColor="gray.300"
      borderRadius="sm"
    >
      <Link to={link} onClick={onClick}>
        <Flex
          flexDirection="column"
          padding={3}
          justifyContent="center"
          alignItems="center"
          gap={3}
        >
          <Image
            w={`${size}px`}
            h={`${size}px`}
            fit="contain"
            src={`data:image/png;base64,${preview}`}
            alt={parsedRegion}
          />
          <Text color="gray.300" whiteSpace="nowrap">
            {parsedRegion} ({parsedGen})
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};

export default PokedexIcon;
