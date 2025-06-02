import React from "react";
// Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
// Styles
import GlobalStyles from "./components/GlobalStyles";
// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
