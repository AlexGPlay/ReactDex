import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Flex, useToken } from "@chakra-ui/react";
import { useResizeObserver } from "../hooks/useResizeObserver";
import CircleLight from "./components/CircleLight";
import SmallCircleLight from "./components/SmallCircleLight";
import CoverInterior from "./components/CoverInterior";

const CLOSE_OPEN_ANIMATION_DURATION = 0.75;
const COVER_VISUAL_CHANGE = CLOSE_OPEN_ANIMATION_DURATION / 2;

const Kanto1stGenDex = () => {
  const bgColor = "white";
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

  const topMargins = (headerHeight + subheaderHeight) * 0.15;
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

  return (
    <Flex
      bgColor={bgColor}
      alignItems="center"
      h="100vh"
      w="100%"
      ref={setParentRef}
    >
      <motion.div
        style={{ display: "flex", height: "75%" }}
        animate={isOpen ? "open" : "closed"}
        variants={positionVariants}
      >
        <Flex
          flexDir="column"
          h="100%"
          w="450px"
          bgColor="red"
          outline="1px solid black"
        >
          <Box
            h="12%"
            w="100%"
            backgroundColor="red"
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
              h="65%"
              top="100%"
              left="-1px"
              background="red"
              overflowY="clip"
              borderBottom="1px solid black"
              borderLeft="1px solid black"
              _after={{
                content: "''",
                position: "absolute",
                width: "100%",
                height: "100%",
                left: "45%",
                background: "red",
                borderTop: "1px solid black",
                transform: "rotate(135deg)",
              }}
            />
          </Box>
          <Flex h="88%" w="100%" background="black">
            <Box flex={1} h="100%" w="auto" />
            <Flex
              flexDir="column"
              outline="1px solid black"
              borderTop="1px solid black"
              h="100%"
              w="50px"
              background="red"
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
            outline: "1px solid black",
            height: "80%",
            width: 400,
            backgroundColor: "red",
            marginTop: "auto",
            transformOrigin: "left",
            cursor: "pointer",
            position: "relative",
            padding: topMargins,
          }}
        >
          {isOpen ? (
            <CoverInterior />
          ) : (
            <Flex
              w="100%"
              h="100%"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Box
                width="0px"
                height="0px"
                borderTop="15px solid transparent"
                borderBottom="15px solid transparent"
                borderRight="20px solid yellow"
              />
            </Flex>
          )}
          <Box
            position="absolute"
            w="40%"
            h="calc(10% + 1px)"
            bottom="100%"
            left="-1px"
            background="red"
            overflowY="clip"
            borderTop="1px solid black"
            borderLeft="1px solid black"
            _after={{
              content: "''",
              position: "absolute",
              width: "100%",
              height: "100%",
              left: "45%",
              background: "red",
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
