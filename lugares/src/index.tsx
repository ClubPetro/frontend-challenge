import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/home/App";
import { CardProvider } from "./Context/CardContext";
import "./global/style.css";

ReactDOM.render(
  <React.StrictMode>
    <CardProvider>
      <App />
    </CardProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
