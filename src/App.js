import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import SearchPackages from "./pages/SearchPackagesPage";
import FavoritePage from "./pages/ViewAndEditPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/search" element={<SearchPackages />} />
      <Route path="/favorite" element={<FavoritePage />} />
    </Routes>
  );
}

export default App;
