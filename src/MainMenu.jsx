import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import missingNo from "./assets/missingno.png";
import kantoPhoto from "./assets/kanto-1st-gen.png";
import sinnohPhoto from "./assets/sinnoh-4th-gen.png";

const pokedexList = [
  { region: "Kanto", gen: 1, link: "kanto-1st", preview: kantoPhoto },
  { region: "Johto", gen: 2 },
  { region: "Hoenn", gen: 3 },
  { region: "Sinnoh", gen: 4, link: "sinnoh-4th", preview: sinnohPhoto },
  { region: "Johto", gen: 4 },
  { region: "Unova", gen: 5 },
  { region: "Kalos", gen: 6 },
  { region: "Hoenn", gen: 6 },
  { region: "Alola", gen: 7 },
  { region: ["Galar", "Paldea"], gen: [8, 9] },
];

const PokedexIcon = ({ region, gen, link, preview = missingNo }) => {
  const parsedRegion = Array.isArray(region) ? region.join(" / ") : region;
  const parsedGen = Array.isArray(gen) ? gen.join(" / ") : gen;

  return (
    <Box
      borderStyle="solid"
      borderWidth={1}
      borderColor="gray.300"
      borderRadius="sm"
      h="fit-content"
    >
      <Link to={link}>
        <Flex
          flexDirection="column"
          padding={3}
          justifyContent="center"
          alignItems="center"
          gap={3}
        >
          <Image
            w="150px"
            h="150px"
            fit="contain"
            src={`data:image/png;base64,${preview}`}
            alt={parsedRegion}
          />
          <Text color="gray.300">
            {parsedRegion} ({parsedGen})
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};

const MainMenu = () => {
  return (
    <Flex
      gap={2}
      flexWrap="wrap"
      backgroundColor="#202124"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
    >
      {pokedexList.map((pokedex, idx) => (
        <PokedexIcon key={idx} {...pokedex} />
      ))}
    </Flex>
  );
};

export default MainMenu;
