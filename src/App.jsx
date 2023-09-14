import React from "react";

import { Routes, Route } from "react-router-dom";
import MainMenu from "./screens/MainMenu";
import Kanto1stGenDex from "./screens/Kanto1stGenDex";
import Sinnoh4thGenDex from "./screens/Sinnoh4thGenDex/Sinnoh4thGen";

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
