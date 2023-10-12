import { Box, Flex } from "@chakra-ui/react";
import {
  POKEDEX_RED,
  LIGHT_BLUE,
  LIGHT_BLUE_SHADOW,
  LIGHT_BLUE_WHITE,
} from "./constants";
import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * 185 (12) => Panel de arriba (bisagra)
 * 159 => Panel de abajo
 * 77 => Hueco inferior
 *
 * ==> 421
 *
 * Ancho => 573
 *
 * 0.45 => 405 (27)
 * 0.35 => 315
 * 0.20 => 180
 */

const lowerCasePositionVariants = {
  open: {
    x: "100%",
    transition: { duration: 1 },
    rotateY: 0,
  },
  closed: {
    x: "100%",
    transition: { duration: 1 },
    rotateY: 180,
  },
};

const upperCasePositionVariants = {
  open: {
    y: "-100%",
    transition: { duration: 1 },
    rotateX: 0,
  },
  closed: {
    y: "-100%",
    transition: { duration: 1 },
    rotateX: 180,
  },
};

const animatePadding = {
  open: {
    paddingTop: 405,
    transition: { duration: 1 },
  },
  closed: {
    paddingTop: 0,
    transition: { duration: 1 },
  },
};

const Johto2ndGenDex = () => {
  const [isLowerCaseOpen, setIsLowerCaseOpen] = useState(false);
  const [isUpperCaseOpen, setIsUpperCaseOpen] = useState(false);

  return (
    <motion.div
      animate={isUpperCaseOpen ? "open" : "closed"}
      variants={animatePadding}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: isUpperCaseOpen ? 405 : 0,
      }}
    >
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
          }}
        ></motion.div>
        <Box h="405px" border="1px solid black"></Box>
        <Box
          position="relative"
          h="315px"
          border="1px solid black"
          borderTop={0}
        >
          <Box>Content</Box>
          <motion.div
            animate={isLowerCaseOpen ? "open" : "closed"}
            variants={lowerCasePositionVariants}
            onClick={() =>
              setIsLowerCaseOpen((isLowerCaseOpen) => !isLowerCaseOpen)
            }
            style={{
              border: "1px solid black",
              backgroundColor: POKEDEX_RED,
              position: "absolute",
              height: "100%",
              width: "100%",
              top: 0,
              left: 0,
              transformOrigin: "left",
              x: "100%",
              rotateY: 180,
            }}
          >
            Case
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
