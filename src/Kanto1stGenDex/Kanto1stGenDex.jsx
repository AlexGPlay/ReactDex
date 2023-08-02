import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Box, Flex } from "@chakra-ui/react";

const Kanto1stGenDex = () => {
  const bgColor = "white";
  const [isOpen, setIsOpen] = useState(false);
  const [parentWidth, setParentWidth] = useState(0);

  const resizeObserver = useMemo(
    () =>
      new ResizeObserver((entries) => {
        const entry = entries[0];
        const newWidth = entry.contentRect.width;
        setParentWidth(newWidth);
      }),
    []
  );

  useEffect(() => () => resizeObserver.disconnect(), [resizeObserver]);

  const coverVariants = {
    open: { rotateY: 0, transition: { duration: 0.75 } },
    closed: { rotateY: 180, transition: { duration: 0.75 } },
  };

  const positionVariants = {
    open: { x: parentWidth / 2 - 450, transition: { duration: 0.75 } },
    closed: { x: parentWidth / 2 - 225, transition: { duration: 0.75 } },
  };

  return (
    <Flex
      bgColor={bgColor}
      alignItems="center"
      h="100vh"
      w="100%"
      ref={(ref) => ref && resizeObserver.observe(ref)}
    >
      <motion.div
        style={{ display: "flex", height: "75%" }}
        animate={isOpen ? "open" : "closed"}
        variants={positionVariants}
      >
        <Box h="100%" w="450px" bgColor="black"></Box>
        <motion.div
          onClick={() => {
            setIsOpen((open) => !open);
          }}
          animate={isOpen ? "open" : "closed"}
          variants={coverVariants}
          style={{
            outline: "1px solid black",
            height: "80%",
            width: 450,
            backgroundColor: "red",
            marginTop: "auto",
            transformOrigin: "left",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <Box
            position="absolute"
            w="40%"
            h="10%"
            bottom="100%"
            left="0"
            background="red"
            overflowY="clip"
            borderTop="1px solid black"
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
          ></Box>
        </motion.div>
      </motion.div>
    </Flex>
  );
};

export default Kanto1stGenDex;
