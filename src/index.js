import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import BoxProvider from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <BoxProvider>
      <App />
    </BoxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
