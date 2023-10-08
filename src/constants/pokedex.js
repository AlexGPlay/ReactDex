import kantoPhoto from "../assets/kanto-1st-gen.png";
import sinnohPhoto from "../assets/sinnoh-4th-gen.png";
import johtoPhoto from "../assets/johto-2nd-gen.png";

const pokedexList = [
  { region: "Kanto", gen: 1, link: "kanto-1st", preview: kantoPhoto },
  { region: "Johto", gen: 2, link: "johto-2nd", preview: johtoPhoto },
  { region: "Hoenn", gen: 3 },
  { region: "Sinnoh", gen: 4, link: "sinnoh-4th", preview: sinnohPhoto },
  { region: "Johto", gen: 4 },
  { region: "Unova", gen: 5 },
  { region: "Kalos", gen: 6 },
  { region: "Hoenn", gen: 6 },
  { region: "Alola", gen: 7 },
  { region: ["Galar", "Paldea"], gen: [8, 9] },
];

export default pokedexList;
