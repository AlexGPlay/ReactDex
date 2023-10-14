import { Box, Flex, Img, Text } from "@chakra-ui/react";
import {
  POKEDEX_RED,
  LIGHT_BLUE,
  LIGHT_BLUE_SHADOW,
  LIGHT_BLUE_WHITE,
  DARK_BLUE,
  DARK_BLUE_SHADOW,
  DARK_BLUE_WHITE,
  DARK_GRAY,
  LIGHT_BLACK,
  CASE_ANIMATION_DURATION,
} from "./constants";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DPad from "../../components/DPad";
import POKEMON_ENTRIES from "../../constants/2ndGenEntries";
import { getSecondGenSprite } from "./utils";
import { usePokemonData } from "../../hooks/usePokemonData";
import { capitalize } from "../../util/capitalize";
import { selectIndex } from "../../util/selectIndex";

const lowerCasePositionVariants = {
  open: {
    x: "100%",
    transition: { duration: CASE_ANIMATION_DURATION },
    rotateY: 0,
  },
  closed: {
    x: "100%",
    transition: { duration: CASE_ANIMATION_DURATION },
    rotateY: 180,
  },
};

const upperCasePositionVariants = {
  open: {
    y: "-100%",
    transition: { duration: CASE_ANIMATION_DURATION },
    rotateX: 0,
  },
  closed: {
    y: "-100%",
    transition: { duration: CASE_ANIMATION_DURATION },
    rotateX: 180,
  },
};

const animatePadding = {
  open: {
    paddingTop: 500,
    transition: { duration: CASE_ANIMATION_DURATION },
  },
  closed: {
    paddingTop: 0,
    transition: { duration: CASE_ANIMATION_DURATION },
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
      delay: CASE_ANIMATION_DURATION / 2,
      duration: 0,
    },
  },
};

const ClassicBox = ({ children, h, w, borderWidth, ...props }) => (
  <Box
    backgroundColor="gray"
    padding={borderWidth}
    border="1px solid black"
    borderRadius="sm"
    h={h}
    w={w}
  >
    <Box h="100%" w="100%" border="1px solid black" {...props}>
      {children}
    </Box>
  </Box>
);

const LoadingDots = ({ frequency }) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((dots) => {
        if (dots.length === 3) {
          return "";
        }
        return dots + ".";
      });
    }, frequency);
    return () => clearInterval(interval);
  }, [frequency]);

  return <Text>{dots}</Text>;
};

const Johto2ndGenDex = () => {
  const [isLowerCaseOpen, setIsLowerCaseOpen] = useState(false);
  const [isUpperCaseOpen, setIsUpperCaseOpen] = useState(false);

  const [isOn, setIsOn] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [highlightedPokemon, setHighlightedPokemon] = useState();

  const { isLoading, data } = usePokemonData({
    id: POKEMON_ENTRIES[selectedPokemon],
  });

  const toggleOn = () => {
    setIsOn((isOn) => !isOn);
    setSelectedPokemon(null);
    setHighlightedPokemon(null);
  };

  const incrementSelectedPokemon = (value) => {
    const newIndex = selectIndex(POKEMON_ENTRIES, value + selectedPokemon);
    selectPokemon(newIndex);
  };

  const selectPokemon = (value) => {
    setSelectedPokemon(value);
    setHighlightedPokemon(value);
  };

  const handleDPad = (value) => {
    if (selectedPokemon === undefined || selectedPokemon === null) {
      const elementsPerRow = 5;
      if (highlightedPokemon === undefined || highlightedPokemon === null) {
        return setHighlightedPokemon(0);
      }

      if (value === "TOP") {
        setHighlightedPokemon((currentHighlightedPokemon) => {
          const newIndex = selectIndex(
            POKEMON_ENTRIES,
            currentHighlightedPokemon - elementsPerRow
          );
          return newIndex;
        });
      }
      if (value === "BOTTOM") {
        setHighlightedPokemon((currentHighlightedPokemon) => {
          const newIndex = selectIndex(
            POKEMON_ENTRIES,
            currentHighlightedPokemon + elementsPerRow
          );
          return newIndex;
        });
      }
      if (value === "LEFT") {
        setHighlightedPokemon((currentHighlightedPokemon) => {
          const newIndex = selectIndex(
            POKEMON_ENTRIES,
            currentHighlightedPokemon - 1
          );
          return newIndex;
        });
      }
      if (value === "RIGHT") {
        setHighlightedPokemon((currentHighlightedPokemon) => {
          const newIndex = selectIndex(
            POKEMON_ENTRIES,
            currentHighlightedPokemon + 1
          );
          return newIndex;
        });
      }
    } else {
      if (value === "TOP") incrementSelectedPokemon(-1);
      if (value === "BOTTOM") incrementSelectedPokemon(1);
      if (value === "LEFT") incrementSelectedPokemon(-10);
      if (value === "RIGHT") incrementSelectedPokemon(10);
    }
  };

  return (
    <motion.div
      animate={isUpperCaseOpen ? "open" : "closed"}
      variants={animatePadding}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: isUpperCaseOpen ? 405 : 0,
      }}
    >
      <Box w="573px" paddingLeft="40px">
        <Box
          borderBottom="100px solid black"
          borderLeft="10px solid transparent"
          borderRight="10px solid transparent"
          height="0"
          width="50px"
        />
      </Box>
      <Box
        borderRadius="md"
        backgroundColor={POKEDEX_RED}
        w="573px"
        h="fit-content"
        position="relative"
      >
        <motion.div
          animate={isUpperCaseOpen ? "open" : "closed"}
          variants={upperCasePositionVariants}
          onClick={() =>
            setIsUpperCaseOpen((isUpperCaseOpen) => !isUpperCaseOpen)
          }
          style={{
            border: "1px solid black",
            backgroundColor: POKEDEX_RED,
            top: 0,
            left: 0,
            width: "100%",
            height: "405px",
            position: "absolute",
            transformOrigin: "bottom",
            zIndex: 1,
            y: "-100%",
            rotateX: 180,
          }}
        >
          <AnimatePresence exitBeforeEnter>
            {isUpperCaseOpen ? (
              <motion.div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  padding: "0 30px 30px 30px",
                }}
                key={`${isUpperCaseOpen}`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={coverTransitionVariants}
              >
                <Flex
                  h="100%"
                  w="100%"
                  justifyContent="space-between"
                  alignItems="flex-end"
                >
                  <Box
                    w="50px"
                    h="100px"
                    borderRadius="sm"
                    backgroundColor={DARK_GRAY}
                    border="1px solid black"
                  />
                  <Box
                    border="1px solid black"
                    h="100%"
                    w="353px"
                    backgroundColor={DARK_GRAY}
                    p="20px"
                  />
                  <Box
                    w="50px"
                    h="100px"
                    borderRadius="sm"
                    backgroundColor={DARK_GRAY}
                    border="1px solid black"
                  />
                </Flex>

                <Box
                  position="absolute"
                  top="-90px"
                  left="50%"
                  transform="translate(-50%, 0)"
                  w="180px"
                  h="180px"
                  backgroundColor={DARK_GRAY}
                  borderRadius="50%"
                  zIndex={1}
                />
              </motion.div>
            ) : (
              <motion.div
                style={{ position: "relative", width: "100%", height: "100%" }}
                key={`${isUpperCaseOpen}`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={coverTransitionVariants}
              >
                <Box position="relative" w="100%" h="100%" overflow="hidden">
                  <Box
                    w="457px"
                    h="457px"
                    borderRadius="50%"
                    backgroundColor="black"
                    top="0"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    position="absolute"
                    padding="13px"
                  >
                    <Box
                      w="100%"
                      h="100%"
                      borderRadius="50%"
                      backgroundColor={POKEDEX_RED}
                    />
                  </Box>
                </Box>

                <Box
                  position="absolute"
                  top="-90px"
                  left="50%"
                  transform="translate(-50%, 0)"
                  w="180px"
                  h="180px"
                  backgroundColor="black"
                  borderRadius="50%"
                  zIndex={1}
                  p="15px"
                >
                  <Flex
                    h="100%"
                    w="100%"
                    borderRadius="50%"
                    backgroundColor={DARK_BLUE}
                    position="relative"
                    overflow="hidden"
                  >
                    <Box
                      position="absolute"
                      h="75px"
                      w="75px"
                      borderRadius="50%"
                      backgroundColor={DARK_BLUE_SHADOW}
                      left="5px"
                      bottom="5px"
                      paddingLeft="30px"
                      paddingTop="15px"
                    >
                      <Box
                        h="30px"
                        w="30px"
                        borderRadius="50%"
                        backgroundColor={DARK_BLUE_WHITE}
                      />
                    </Box>
                  </Flex>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <Flex
          alignItems="flex-end"
          h="405px"
          border="1px solid black"
          p="30px"
          justifyContent="space-between"
        >
          <Box
            w="50px"
            h="100px"
            borderRadius="sm"
            backgroundColor={DARK_GRAY}
            border="1px solid black"
          />
          <Box
            border="1px solid black"
            h="100%"
            w="353px"
            backgroundColor={DARK_GRAY}
            p="20px"
          >
            <Box
              border="1px solid black"
              h="100%"
              w="100%"
              backgroundColor={isOn ? LIGHT_BLUE_WHITE : LIGHT_BLACK}
              transition="background-color 0.5s ease-in-out"
              padding="10px"
              overflow="auto"
            >
              {isOn ? (
                selectedPokemon === undefined || selectedPokemon === null ? (
                  <Flex flexWrap="wrap" gap="12px">
                    {POKEMON_ENTRIES.map((entry, idx) => (
                      <Box
                        key={entry}
                        id={`pokemon-icon-${entry}`}
                        w="45px"
                        h="45px"
                        padding="2.5px"
                        backgroundColor={
                          highlightedPokemon === idx ? "orange" : "gray"
                        }
                        border="1px solid black"
                        cursor="pointer"
                        onClick={() => selectPokemon(idx)}
                      >
                        <Box
                          p="1px"
                          backgroundColor="white"
                          border="1px solid black"
                        >
                          <Img
                            width="100%"
                            height="100%"
                            src={getSecondGenSprite(entry)}
                          />
                        </Box>
                      </Box>
                    ))}
                  </Flex>
                ) : (
                  <Flex h="100%" w="100%" flexDir="column">
                    <Flex h="115px" w="100%" justifyContent="space-between">
                      <ClassicBox
                        backgroundColor="white"
                        borderWidth="5px"
                        h="115px"
                        w="115px"
                        p="5px"
                      >
                        <Img
                          h="100%"
                          w="100%"
                          src={getSecondGenSprite(
                            POKEMON_ENTRIES[selectedPokemon]
                          )}
                        />
                      </ClassicBox>
                      <ClassicBox
                        h="115px"
                        w="160px"
                        backgroundColor="white"
                        borderWidth="5px"
                        p="5px"
                      >
                        {isLoading ? (
                          <LoadingDots frequency={500} />
                        ) : (
                          <Flex flexDir="column" h="100%" w="100%">
                            <Text fontWeight="bold" fontSize="md">
                              {capitalize(data.name)}
                            </Text>
                            <Text fontSize="small">{data.genera}</Text>
                            <Text fontSize="small">Height: {data.height}m</Text>
                            <Text fontSize="small">
                              Weight: {data.weight}kg
                            </Text>
                          </Flex>
                        )}
                      </ClassicBox>
                    </Flex>
                    <Box h="150px" w="100%" marginTop="auto">
                      <ClassicBox
                        h="100%"
                        w="100%"
                        backgroundColor="white"
                        borderWidth="5px"
                        p="5px"
                        overflow="auto"
                      >
                        {isLoading ? (
                          <LoadingDots frequency={500} />
                        ) : (
                          data.description
                        )}
                      </ClassicBox>
                    </Box>
                  </Flex>
                )
              ) : null}
            </Box>
          </Box>
          <Box
            w="50px"
            h="100px"
            borderRadius="sm"
            backgroundColor={DARK_GRAY}
            border="1px solid black"
          />
        </Flex>
        <Box
          position="relative"
          h="315px"
          border="1px solid black"
          borderTop={0}
        >
          <Box
            position="relative"
            w="100%"
            h="100%"
            overflow="hidden"
            padding="120px 30px 30px 30px"
          >
            <Box
              position="absolute"
              top="0"
              left="50%"
              h="180px"
              w="180px"
              borderRadius="50%"
              transform="translate(-50%, -50%)"
              backgroundColor="transparent"
              border="1px solid black"
            />
            <Flex justifyContent="space-between">
              <DPad
                width={45}
                size={164}
                color={DARK_GRAY}
                onTopClick={() => handleDPad("TOP")}
                onBottomClick={() => handleDPad("BOTTOM")}
                onLeftClick={() => handleDPad("LEFT")}
                onRightClick={() => handleDPad("RIGHT")}
              />
              <Flex flexDir="column" justifyContent="space-around">
                <Box
                  border="1px solid black"
                  backgroundColor={DARK_GRAY}
                  w="50px"
                  h="25px"
                  borderRadius="xl"
                  onClick={toggleOn}
                />
                <Box
                  border="1px solid black"
                  backgroundColor={DARK_GRAY}
                  w="50px"
                  h="25px"
                  borderRadius="xl"
                  onClick={toggleOn}
                />
              </Flex>
              <Flex
                w="164px"
                alignItems="flex-end"
                justifyContent="space-evenly"
              >
                <Box
                  border="1px solid black"
                  backgroundColor={DARK_GRAY}
                  w="50px"
                  h="50px"
                  borderRadius="50%"
                  onClick={() => setSelectedPokemon(null)}
                />
                <Box
                  border="1px solid black"
                  backgroundColor={DARK_GRAY}
                  w="50px"
                  h="50px"
                  borderRadius="50%"
                  onClick={() => setSelectedPokemon(highlightedPokemon)}
                />
              </Flex>
            </Flex>
          </Box>
          <motion.div
            animate={isLowerCaseOpen ? "open" : "closed"}
            variants={lowerCasePositionVariants}
            onClick={() =>
              setIsLowerCaseOpen((isLowerCaseOpen) => !isLowerCaseOpen)
            }
            style={{
              border: "1px solid black",
              borderTop: 0,
              position: "absolute",
              height: "100%",
              width: "100%",
              top: 0,
              left: 0,
              transformOrigin: "left",
              x: "100%",
              rotateY: 180,
              overflow: "hidden",
              background: `radial-gradient(circle at top center, transparent 90px, black 90px, ${POKEDEX_RED} 91px)`,
            }}
          >
            <AnimatePresence exitBeforeEnter>
              {isLowerCaseOpen ? (
                <motion.div
                  key={`${isLowerCaseOpen}`}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={coverTransitionVariants}
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                ></motion.div>
              ) : (
                <motion.div
                  key={`${isLowerCaseOpen}`}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={coverTransitionVariants}
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    w="457px"
                    h="457px"
                    borderRadius="50%"
                    border="13px solid black"
                    top="0"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    position="absolute"
                  >
                    <Box
                      w="100%"
                      h="100%"
                      borderRadius="50%"
                      backgroundColor={POKEDEX_RED}
                      background={`radial-gradient(circle at center, transparent 90px, black 90px, ${POKEDEX_RED} 91px)`}
                    />
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </Box>
        <Flex
          h="180px"
          border="1px solid black"
          borderTop={0}
          justifyContent="flex-end"
          alignItems="center"
          paddingRight="55px"
        >
          <Box
            h="125px"
            w="125px"
            borderRadius="50%"
            border="1px solid black"
            backgroundColor={LIGHT_BLUE_SHADOW}
          >
            <Box
              h="100%"
              w="100%"
              borderRadius="50%"
              backgroundColor={LIGHT_BLUE}
              position="relative"
              overflow="hidden"
            >
              <Box
                h="100%"
                w="100%"
                borderRadius="50%"
                backgroundColor={LIGHT_BLUE_SHADOW}
                position="absolute"
                left="10px"
              >
                <Box
                  h="50%"
                  w="50%"
                  borderRadius="50%"
                  backgroundColor={LIGHT_BLUE}
                  marginLeft="5px"
                  marginTop="5px"
                  paddingLeft="10px"
                  paddingTop="10px"
                >
                  <Box
                    h="50%"
                    w="50%"
                    borderRadius="50%"
                    backgroundColor={LIGHT_BLUE_WHITE}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default Johto2ndGenDex;
