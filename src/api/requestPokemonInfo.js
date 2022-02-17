export const requestSpeciesInfo = ({ id }) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
};

export const requestPokemonInfo = ({ id }) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
};
