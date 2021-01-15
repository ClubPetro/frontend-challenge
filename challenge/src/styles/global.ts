import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  background: #FFFFFF;
  color: #363636;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 16px 'Roboto', sans-serif;
  line-height: 1.6
}

button {
  cursor: pointer;
}`;
