import React from "react";
import { Flex } from "@chakra-ui/react";
import kantoPhoto from "../../assets/kanto-1st-gen.png";
import sinnohPhoto from "../../assets/sinnoh-4th-gen.png";
import PokedexIcon from "../../components/PokedexIcon/PokedexIcon";
import pokedexList from "../../constants/pokedex";

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
