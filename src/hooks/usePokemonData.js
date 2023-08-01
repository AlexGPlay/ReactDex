import { useEffect, useState } from "react";
import {
  requestPokemonInfo,
  requestSpeciesInfo,
} from "../api/requestPokemonInfo";

const getPokemonDataFromCache = (id) => {
  const data = window.sessionStorage.getItem(id);
  if (!data) return null;
  return JSON.parse(data);
};

const setPokemonDataCache = (id, data) => {
  window.sessionStorage.setItem(id, JSON.stringify(data));
  return data;
};

const hasPokemonDataInCache = (id) => {
  return !!getPokemonDataFromCache(id);
};

export const usePokemonData = ({ id }) => {
  const [pokemonData, setPokemonData] = useState();

  useEffect(async () => {
    const cacheData = getPokemonDataFromCache(id);

    if (hasPokemonDataInCache(id)) {
      return setPokemonData(pokemonData);
    }

    const requests = [requestSpeciesInfo({ id }), requestPokemonInfo({ id })];
    const [speciesResponse, pokemonResponse] = await Promise.all(requests);
    const [speciesJson, pokemonJson] = await Promise.all([
      speciesResponse.json(),
      pokemonResponse.json(),
    ]);

    const savedData = setPokemonDataCache(id, {
      species: speciesJson,
      pokemon: pokemonJson,
    });
    setPokemonData(savedData);
  }, [id]);

  return {
    rawData: getPokemonDataFromCache(id),
    data: extractPokemonData(getPokemonDataFromCache(id)),
  };
};

const extractPokemonData = (data) => {
  return {
    name: data?.pokemon?.name,
    genera: data?.species?.genera.find(
      (genera) => genera.language.name === "en"
    )?.genus,
    description: data?.species?.flavor_text_entries?.findLast(
      (flavor) => flavor.language.name === "en"
    )?.flavor_text,
    types: data?.pokemon?.types?.map(({ type }) => type.name) || [],
    height: (data?.pokemon?.height * 0.1).toFixed(2), // The height is given in decimeters
    weight: (data?.pokemon?.weight * 0.1).toFixed(2), // The weight is given in hectograms
  };
};
