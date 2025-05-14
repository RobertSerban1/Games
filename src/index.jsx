import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
//REDUX SETUP

import { createStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index.js";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
