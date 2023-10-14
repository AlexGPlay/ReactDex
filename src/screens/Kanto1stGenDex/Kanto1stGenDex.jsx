import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Flex, useToken } from "@chakra-ui/react";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import CircleLight from "./components/CircleLight";
import SmallCircleLight from "./components/SmallCircleLight";
import CoverInterior from "./components/CoverInterior";
import LeftSide from "./components/LeftSide";
import { POKEDEX_RED } from "./constants";
import POKEMON_ENTRIES from "../../constants/1stGenEntries";
import { usePokemonData } from "../../hooks/usePokemonData";

const CLOSE_OPEN_ANIMATION_DURATION = 0.75;
const COVER_VISUAL_CHANGE = CLOSE_OPEN_ANIMATION_DURATION / 2;
const LEFT_PART_WIDTH = 500;
const HINGE_WIDTH = 50;
const RIGHT_PART_WIDTH = LEFT_PART_WIDTH - HINGE_WIDTH;

const Kanto1stGenDex = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [red500, red900, yellow500, yellow900, green500, green900] = useToken(
    "colors",
    ["red.500", "red.900", "yellow.500", "yellow.900", "green.500", "green.900"]
  );

  const {
    dimensions: { width: parentWidth },
    setRef: setParentRef,
  } = useResizeObserver({ debug: true });

  const {
    dimensions: { height: headerHeight },
    setRef: setHeaderHeight,
  } = useResizeObserver();

  const {
    dimensions: { height: subheaderHeight },
    setRef: setSubheaderHeight,
  } = useResizeObserver();

  const topMargins = (headerHeight + subheaderHeight) * 0.25;
  const topCircleDimensions = headerHeight + subheaderHeight - topMargins * 2;

  const coverVariants = {
    open: {
      x: 0,
      rotateY: 0,
      transition: { duration: CLOSE_OPEN_ANIMATION_DURATION },
    },
    closed: {
      x: -50,
      rotateY: 180,
      transition: { duration: CLOSE_OPEN_ANIMATION_DURATION },
    },
  };

  const coverTransitionVariants = {
    initial: {
      opacity: 0,
      duration: 0,
    },
    animate: {
      opacity: 1,
      duration: 0,
    },
    exit: {
      opacity: 0,
      transition: {
        delay: COVER_VISUAL_CHANGE,
        duration: 0,
      },
    },
  };

  const positionVariants = {
    open: {
      x: parentWidth / 2 - 350,
      transition: { duration: CLOSE_OPEN_ANIMATION_DURATION },
    },
    closed: {
      x: parentWidth / 2 - 175,
      transition: { duration: CLOSE_OPEN_ANIMATION_DURATION },
    },
  };

  const [selectedPokemonIdx, setSelectedPokemonIdx] = useState(0);
  const selectedPokemon = POKEMON_ENTRIES[selectedPokemonIdx];

  const handleSelectedPokemon = (acc) => {
    setSelectedPokemonIdx((currentIdx) => {
      const newIdx = currentIdx + acc;
      if (newIdx < 0) return 0;
      if (newIdx >= POKEMON_ENTRIES.length) return POKEMON_ENTRIES.length - 1;
      return newIdx;
    });
  };

  const { data } = usePokemonData({ id: selectedPokemon });

  return (
    <Flex alignItems="center" h="100%" w="100%" ref={setParentRef}>
      <motion.div
        style={{ display: "flex", height: 800 }}
        animate={isOpen ? "open" : "closed"}
        variants={positionVariants}
      >
        <Flex
          flexDir="column"
          h="100%"
          w={LEFT_PART_WIDTH}
          bgColor={POKEDEX_RED}
          outline="1px solid black"
        >
          <Box
            h="12%"
            w="100%"
            backgroundColor={POKEDEX_RED}
            position="relative"
            ref={setHeaderHeight}
            paddingTop={`${topMargins}px`}
            paddingLeft={`${topMargins}px`}
          >
            <Flex gap={7}>
              <CircleLight size={topCircleDimensions} isOn={isOpen} />
              <SmallCircleLight
                size={topCircleDimensions / 5}
                isOn={isOpen}
                onColor={red500}
                offColor={red900}
              />
              <SmallCircleLight
                size={topCircleDimensions / 5}
                isOn={isOpen}
                onColor={yellow500}
                offColor={yellow900}
              />
              <SmallCircleLight
                size={topCircleDimensions / 5}
                isOn={isOpen}
                onColor={green500}
                offColor={green900}
              />
            </Flex>
            <Box
              ref={setSubheaderHeight}
              position="absolute"
              w="45%"
              h="67%"
              top="100%"
              left="-1px"
              background={POKEDEX_RED}
              overflowY="clip"
              borderBottom="1px solid black"
              borderLeft="1px solid black"
              _after={{
                content: "''",
                position: "absolute",
                width: "100%",
                height: "100%",
                left: "44%",
                background: POKEDEX_RED,
                borderTop: "1px solid black",
                transform: "rotate(135deg)",
              }}
            />
          </Box>
          <Flex h="88%" w="100%" background={POKEDEX_RED}>
            <Flex
              flexDir="column"
              justifyContent="flex-end"
              flex={1}
              h="100%"
              w="100%"
              borderTop="1px solid black"
            >
              <LeftSide
                marginTop={subheaderHeight}
                padding={`${topMargins}px`}
                pokemonId={selectedPokemon}
                onDPadClick={(acc) => handleSelectedPokemon(acc)}
              />
            </Flex>
            <Flex
              flexDir="column"
              outline="1px solid black"
              borderTop="1px solid black"
              h="100%"
              w={HINGE_WIDTH}
              background={POKEDEX_RED}
            >
              <Box h="10%" />
              <Box h="2%" outline="1px solid black" />
              <Box flex={1} />
              <Box h="2%" outline="1px solid black" />
              <Box h="10%" />
            </Flex>
          </Flex>
        </Flex>
        <motion.div
          onClick={() => {
            setIsOpen((open) => !open);
          }}
          animate={isOpen ? "open" : "closed"}
          variants={coverVariants}
          style={{
            zIndex: 2,
            outline: "1px solid black",
            height: "80%",
            width: RIGHT_PART_WIDTH,
            backgroundColor: POKEDEX_RED,
            marginTop: "auto",
            transformOrigin: "left",
            cursor: "pointer",
            position: "relative",
            padding: topMargins,
          }}
        >
          <AnimatePresence exitBeforeEnter>
            {isOpen ? (
              <motion.div
                key={`${isOpen}`}
                style={{ height: "100%", width: "100%" }}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={coverTransitionVariants}
              >
                <CoverInterior pokemonData={data} />
              </motion.div>
            ) : (
              <motion.div
                key={`${isOpen}`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={coverTransitionVariants}
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Box
                  width="0px"
                  height="0px"
                  borderTop="15px solid transparent"
                  borderBottom="15px solid transparent"
                  borderRight="20px solid yellow"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <Box
            position="absolute"
            w="38%"
            h="calc(10% + 1px)"
            bottom="100%"
            left="-1px"
            background={POKEDEX_RED}
            overflowY="clip"
            borderTop="1px solid black"
            borderLeft="1px solid black"
            _after={{
              content: "''",
              position: "absolute",
              width: "130%",
              height: "100%",
              left: "27%",
              background: POKEDEX_RED,
              borderTop: "1px solid black",
              transform: "rotate(45deg)",
            }}
          />
        </motion.div>
      </motion.div>
    </Flex>
  );
};

export default Kanto1stGenDex;
