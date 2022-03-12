import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./commons/styles/theme";
import { GlobalStyled } from "./commons/styles/global";
import "./fonts.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyled />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
