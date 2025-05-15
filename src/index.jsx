import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
//REDUX SETUP

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index.js";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnchancer(applyMiddleware(thunk))
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
