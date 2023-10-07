import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const DEFAULT_SIZE = 200;
const DEFAULT_WIDTH = "40px";
const DEFAULT_COLOR = "gray.400";
const DEFAULT_BORDER_COLOR = "black";

const DPad = ({
  size = DEFAULT_SIZE,
  width = DEFAULT_WIDTH,
  color = DEFAULT_COLOR,
  borderColor = DEFAULT_BORDER_COLOR,
  onTopClick,
  onLeftClick,
  onRightClick,
  onBottomClick,
}) => {
  const middleHeight = width;
  const middleWidth = width;

  const verticalPadsHeight = size - middleHeight;
  const verticalPadsWidth = width;

  const horizontalPadsHeight = width;
  const horizontalPadsWidth = (size - middleWidth) / 2;

  return (
    <Flex h={size} w={size} alignItems="center" flexDir="column">
      <Box
        width={verticalPadsWidth}
        height={verticalPadsHeight}
        bgColor={color}
        borderColor={borderColor}
        borderWidth={1}
        borderStyle="solid"
        borderBottomColor="transparent"
        borderTopRadius={4}
        onClick={onTopClick}
      />
      <Flex
        gap={0}
        backgroundColor={color}
        borderLeftRadius={4}
        borderRightRadius={4}
      >
        <Box
          width={horizontalPadsWidth}
          height={horizontalPadsHeight}
          bgColor={color}
          borderLeftRadius={4}
          borderColor={borderColor}
          borderWidth={1}
          borderStyle="solid"
          borderRightColor="transparent"
          onClick={onLeftClick}
        />
        <Box width={middleWidth} height={middleHeight} bgColor={color} />
        <Box
          width={horizontalPadsWidth}
          height={horizontalPadsHeight}
          bgColor={color}
          borderRightRadius={4}
          borderColor={borderColor}
          borderWidth={1}
          borderStyle="solid"
          borderLeftColor="transparent"
          onClick={onRightClick}
        />
      </Flex>
      <Box
        width={verticalPadsWidth}
        height={verticalPadsHeight}
        bgColor={color}
        borderBottomRadius={4}
        borderColor={borderColor}
        borderWidth={1}
        borderStyle="solid"
        borderTopColor="transparent"
        onClick={onBottomClick}
      />
    </Flex>
  );
};

export default DPad;
