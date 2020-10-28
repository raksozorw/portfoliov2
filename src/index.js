import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import BoxProvider from "./context/context";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(
  <React.StrictMode>
    <BoxProvider>
      <App />
    </BoxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
