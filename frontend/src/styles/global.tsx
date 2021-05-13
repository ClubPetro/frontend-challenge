import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #ffffff;
    --black: #000000;

    --green-50: #4F9419;
    --green-100: #006C18;

    --gray-50: #ABABAB;
    --gray-60: #aaaaaa;
    --gray-100: #868686;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--white);
    color: var(--back);
  }

  body,
  input,
  select,
  button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
