import { useEffect, useRef, useState } from "react";
import { requestPokemonInfo, requestSpeciesInfo } from "../api/requestPokemonInfo";

export const usePokemonData = ({ id }) => {
  const [pokemonData, setPokemonData] = useState({});

  const pokemonDataCache = useRef({});

  useEffect(async () => {
    if (pokemonDataCache.current[id]) {
      setPokemonData(pokemonDataCache.current[id]);
      return;
    }

    const requests = [requestSpeciesInfo({ id }), requestPokemonInfo({ id })];
    const [speciesResponse, pokemonResponse] = await Promise.all(requests);
    const [speciesJson, pokemonJson] = await Promise.all([
      speciesResponse.json(),
      pokemonResponse.json(),
    ]);

    pokemonDataCache.current[id] = {
      species: speciesJson,
      pokemon: pokemonJson,
    };

    console.log("pokemonDataCache", pokemonDataCache.current[id]);

    setPokemonData(pokemonDataCache.current[id]);
  }, [id]);

  return {
    rawData: pokemonData,
    data: extractPokemonData(pokemonData),
  };
};

const extractPokemonData = ({ species, pokemon }) => {
  return {
    name: pokemon?.name,
    genera: species?.genera.find((genera) => genera.language.name === "en")?.genus,
    description: species?.flavor_text_entries?.findLast((flavor) => flavor.language.name === "en")
      ?.flavor_text,
    types: pokemon?.types?.map(({ type }) => type.name) || [],
    height: (pokemon?.height * 0.1).toFixed(2), // The height is given in decimeters
    weight: (pokemon?.weight * 0.1).toFixed(2), // The weight is given in hectograms
  };
};
