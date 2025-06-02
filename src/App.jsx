import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//Components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
