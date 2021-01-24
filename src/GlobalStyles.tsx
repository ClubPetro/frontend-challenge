import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, .input-standard, .button-submited, .card-country-name {
    margin: 0px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
`;

export default GlobalStyle;
