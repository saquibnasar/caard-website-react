import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/caard/:userId" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
