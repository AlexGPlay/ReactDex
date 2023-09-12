import React from "react";

import { Routes, Route } from "react-router-dom";
import Sinnoh4thGenDex from "./Sinnoh4thGenDex";
import Kanto1stGenDex from "./Kanto1stGenDex";
import MainMenu from "./MainMenu";

const App = () => {
  return (
    <Routes>
      <Route path="kanto-1st" element={<Kanto1stGenDex />} />
      <Route path="sinnoh-4th" element={<Sinnoh4thGenDex />} />
      <Route path="*" element={<MainMenu />} />
    </Routes>
  );
};

export default App;
