import React, { useState } from "react";
import { Box, Flex, Grid, IconButton, Icon } from "@chakra-ui/react";
import PokedexIcon from "../PokedexIcon";
import pokedexList from "../../constants/pokedex";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import { motion } from "framer-motion";

const CONTAINER_PADDINGS = 25;

const DexSelector = () => {
  const [showSelector, setShowSelector] = useState(false);
  const { dimensions, setRef } = useResizeObserver();

  const menuStateVariants = {
    open: {
      marginTop: 0,
      transition: { duration: 1 },
    },
    closed: {
      marginTop: (dimensions.height + CONTAINER_PADDINGS + 2) * -1,
      transition: { duration: 1 },
    },
  };

  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        paddingTop: CONTAINER_PADDINGS,
        backgroundColor: "#202124",
        gap: CONTAINER_PADDINGS,
      }}
      initial="closed"
      animate={showSelector ? "open" : "closed"}
      variants={menuStateVariants}
    >
      <Box
        maxW="90%"
        padding={3}
        borderRadius="md"
        borderWidth={1}
        borderColor="gray.600"
        overflow="auto"
        ref={setRef}
      >
        <Grid
          w="fit-content"
          justifyContent="center"
          gridAutoFlow="column"
          gap={2}
        >
          {pokedexList.map((pokedex, idx) => (
            <PokedexIcon
              key={idx}
              size={50}
              onClick={() => setShowSelector(false)}
              {...pokedex}
            />
          ))}
        </Grid>
      </Box>
      <IconButton
        isRound={true}
        variant="solid"
        colorScheme="whiteAlpha"
        fontSize="20px"
        icon={<Icon as={showSelector ? BiChevronUp : BiChevronDown} />}
        onClick={() => setShowSelector((showSelector) => !showSelector)}
      />
    </motion.div>
  );
};

export default DexSelector;
