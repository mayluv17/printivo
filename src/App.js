import "./App.css";

import React from "react";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Cart" element={<Cart />} />
        <Route exact path="/" element={<Photos />} />
        <Route path="*" element={<Photos />} />
      </Routes>
    </div>
  );
}

export default App;
