export const requestPokemonInfo = ({ id }) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
};
