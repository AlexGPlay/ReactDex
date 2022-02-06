export const requestList = ({ from, to }) => {
  const limit = to - from;
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${from}`);
};
