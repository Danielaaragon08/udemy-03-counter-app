import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
import { FirsApp } from "./FirsApp";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <CounterApp valorInicialContador={0} /> */}
    <FirsApp title="Aplicación React" name="Daniela" />
  </React.StrictMode>
);
