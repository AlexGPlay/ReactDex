import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import Sinnoh4thGenDex from "./Sinnoh4thGenDex";

const SimpleLinks = () => {
  return (
    <div>
      <div>The main menu is still work in progress, so for now...</div>
      <Link to="sinnoh-4th">Sinnoh 4th Gen Dex</Link>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="sinnoh-4th" element={<Sinnoh4thGenDex />} />
      <Route path="*" element={<SimpleLinks />} />
    </Routes>
  );
};

export default App;
