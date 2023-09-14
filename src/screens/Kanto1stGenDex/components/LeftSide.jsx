import { Box, Flex, useToken } from "@chakra-ui/react";
import React from "react";
import SmallCircleLight from "./SmallCircleLight";
import CustomLight from "./CustomLight";

export default function LeftSide({ padding, marginTop }) {
  const [red500, red900, blue500] = useToken("colors", [
    "red.500",
    "red.900",
    "blue.500",
  ]);

  return (
    <Flex
      gap={30}
      flexDir="column"
      h={`calc(100% - ${marginTop}px)`}
      padding={padding}
    >
      <Flex
        width="100%"
        height="55%"
        borderRadius="md"
        padding="1px"
        backgroundColor="black"
        clipPath="polygon(0% 0%, 0 90%, 10% 100%, 100% 100%, 100% 0%);"
      >
        <Flex
          borderRadius="md"
          height="100%"
          width="100%"
          backgroundColor="lightgray"
          flexDir="column"
          position="relative"
          clipPath="polygon(0% 0%, 0 90%, 10% 100%, 100% 100%, 100% 0%);"
        >
          <Flex
            height="40px"
            justifyContent="center"
            alignItems="center"
            gap="20px"
          >
            <SmallCircleLight
              size="10px"
              offColor={red500}
              onColor={red900}
              isOn={false}
            />
            <SmallCircleLight
              size="10px"
              offColor={red500}
              onColor={red900}
              isOn={false}
            />
          </Flex>
          <Flex
            borderRadius="md"
            margin="auto"
            height="calc(100% - 80px)"
            backgroundColor="gray.800"
            width="calc(100% - 80px)"
          ></Flex>
          <Flex
            height="40px"
            alignItems="center"
            paddingLeft="40px"
            paddingRight="40px"
            justifyContent="space-between"
          >
            <SmallCircleLight
              size="15px"
              offColor={red500}
              onColor={red900}
              isOn={false}
            />
            <Flex flexDir="column" gap="3px">
              <Box height="2px" width="25px" bgColor="black" />
              <Box height="2px" width="25px" bgColor="black" />
              <Box height="2px" width="25px" bgColor="black" />
              <Box height="2px" width="25px" bgColor="black" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex flex={1}>
        <Box
          width="50px"
          height="50px"
          borderRadius="50%"
          backgroundColor="black"
        />
        <Box marginLeft={10}>
          <Flex justifyContent="space-between">
            <CustomLight
              width={40}
              height={10}
              borderRadius="10px"
              offColor={red500}
              onColor={red500}
            />
            <CustomLight
              width={40}
              height={10}
              borderRadius="10px"
              offColor={blue500}
              onColor={blue500}
            />
          </Flex>
          <Flex
            alignItems="center"
            marginTop="40px"
            h="calc(60% - 40px)"
            w="160px"
          >
            <Box
              h="100%"
              w="100%"
              bgColor="green.300"
              borderColor="black"
              borderStyle="solid"
              borderWidth={1}
              borderRadius="md"
            />
          </Flex>
        </Box>
        <Box></Box>
      </Flex>
    </Flex>
  );
}
