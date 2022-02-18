import { useEffect, useRef, useState } from "react";
import { requestPokemonInfo, requestSpeciesInfo } from "../api/requestPokemonInfo";

export const usePokemonData = ({ id }) => {
  const [pokemonDataCache, setPokemonDataCache] = useState({});

  useEffect(async () => {
    if (pokemonDataCache[id]) {
      return;
    }

    const requests = [requestSpeciesInfo({ id }), requestPokemonInfo({ id })];
    const [speciesResponse, pokemonResponse] = await Promise.all(requests);
    const [speciesJson, pokemonJson] = await Promise.all([
      speciesResponse.json(),
      pokemonResponse.json(),
    ]);

    setPokemonDataCache((cache) => ({
      ...cache,
      [id]: { species: speciesJson, pokemon: pokemonJson },
    }));
  }, [id]);

  return {
    rawData: pokemonDataCache[id],
    data: extractPokemonData(pokemonDataCache[id]),
  };
};

const extractPokemonData = (data) => {
  return {
    name: data?.pokemon?.name,
    genera: data?.species?.genera.find((genera) => genera.language.name === "en")?.genus,
    description: data?.species?.flavor_text_entries?.findLast(
      (flavor) => flavor.language.name === "en"
    )?.flavor_text,
    types: data?.pokemon?.types?.map(({ type }) => type.name) || [],
    height: (data?.pokemon?.height * 0.1).toFixed(2), // The height is given in decimeters
    weight: (data?.pokemon?.weight * 0.1).toFixed(2), // The weight is given in hectograms
  };
};
