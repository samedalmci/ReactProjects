import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/components/Home";
import Quiz from "./src/components/Quiz";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}
