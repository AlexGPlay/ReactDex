import { Box, Flex, useToken } from "@chakra-ui/react";
import React from "react";
import SmallCircleLight from "./SmallCircleLight";

export default function LeftSide({ padding, marginTop }) {
  const [red500, red900] = useToken("colors", ["red.500", "red.900"]);

  return (
    <Box h="100%" marginTop={marginTop} padding={padding}>
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
    </Box>
  );
}
