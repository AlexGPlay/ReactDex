import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import Sinnoh4thGenDex from "./Sinnoh4thGenDex";
import Kanto1stGenDex from "./Kanto1stGenDex";

const SimpleLinks = () => {
  return (
    <div>
      <div>The main menu is still work in progress, so for now...</div>
      <div>
        <Link to="sinnoh-4th">Sinnoh 4th Gen Dex</Link>
      </div>
      <div>
        <Link to="kanto-1st">Kanto 1st Gen Dex</Link>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="kanto-1st" element={<Kanto1stGenDex />} />
      <Route path="sinnoh-4th" element={<Sinnoh4thGenDex />} />
      <Route path="*" element={<SimpleLinks />} />
    </Routes>
  );
};

export default App;
