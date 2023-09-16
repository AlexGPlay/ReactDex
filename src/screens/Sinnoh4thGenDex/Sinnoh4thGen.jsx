import { Box, Flex } from "@chakra-ui/react";
import * as React from "react";
import BottomScreen from "./bottomScreen/BottomScreen";
import Center from "./center/Center";
import TopScreen from "./topScreen/TopScreen";
import { requestList } from "../../api/requestList";

const MAX_POKEMON = 151;

const Sinnoh4thGenDex = () => {
  const [pokemon, setPokemon] = React.useState();
  const [currentPokemon, setCurrentPokemon] = React.useState(0);

  const nextPokemon = (quantity = 1) =>
    setCurrentPokemon((currentPokemon) =>
      Math.min(currentPokemon + quantity, MAX_POKEMON - 1)
    );

  const prevPokemon = (quantity = 1) =>
    setCurrentPokemon((currentPokemon) =>
      Math.max(currentPokemon - quantity, 0)
    );

  React.useEffect(() => {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "ArrowDown") nextPokemon();
      else if (evt.key === "ArrowUp") prevPokemon();
      else if (evt.key === "ArrowLeft") prevPokemon(5);
      else if (evt.key === "ArrowRight") nextPokemon(5);
    });

    document.addEventListener("wheel", (evt) => {
      const delta = Math.sign(evt.deltaY);
      if (delta === -1) prevPokemon();
      else if (delta === 1) nextPokemon();
    });

    requestList({ from: 0, to: MAX_POKEMON })
      .then((response) => response.json())
      .then(({ results }) => setPokemon(results));
  }, []);

  return (
    <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
      <Box width={800}>
        <TopScreen
          pokemon={pokemon}
          currentPokemon={currentPokemon}
          setCurrentPokemon={setCurrentPokemon}
        />
        <Center />
        <BottomScreen currentPokemon={currentPokemon} />
      </Box>
    </Flex>
  );
};

export default Sinnoh4thGenDex;
