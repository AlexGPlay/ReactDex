import React from "react";

import { Routes, Route, Outlet, useOutlet } from "react-router-dom";
import MainMenu from "./screens/MainMenu";
import Kanto1stGenDex from "./screens/Kanto1stGenDex";
import Sinnoh4thGenDex from "./screens/Sinnoh4thGenDex/Sinnoh4thGen";
import DexSelector from "./components/DexSelector";

const RouteWithDexSelector = () => {
  const childElement = useOutlet();

  if (!childElement) return <MainMenu />;

  return (
    <>
      <DexSelector />
      <div style={{ padding: 25, minHeight: "100vh" }}>
        <Outlet />
      </div>
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RouteWithDexSelector />}>
        <Route path="kanto-1st" element={<Kanto1stGenDex />} />
        <Route path="sinnoh-4th" element={<Sinnoh4thGenDex />} />
      </Route>
      <Route path="*" element={<MainMenu />} />
    </Routes>
  );
};

export default App;
