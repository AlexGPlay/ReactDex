import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Pokeball from "./Pokeball";

const ListItem = ({ name, number, onClick, style }) => {
  return (
    <Flex
      bgColor="yellow.100"
      borderTopRightRadius="20px"
      borderBottomRightRadius="20px"
      borderTopLeftRadius="100px"
      borderBottomLeftRadius="100px"
      paddingRight={10}
      paddingLeft={10}
      position="relative"
      onClick={onClick}
      transition="width 1s ease"
      {...style}
    >
      <Flex
        h={30}
        w={30}
        alignItems="center"
        justifyContent="center"
        position="absolute"
        left="5px"
      >
        <Pokeball />
      </Flex>
      <Flex w="100%" justifyContent="flex-end">
        <Flex alignItems="center" w="55px">
          N.º {number}
        </Flex>
        <Flex paddingLeft={15} alignItems="center" justifyContent="flex-start" w="100px">
          {name}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ListItem;
