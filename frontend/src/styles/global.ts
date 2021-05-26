import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --background: rgba(255,255,255,1.0);

    --darkGreen: rgba(0,108,24,1.0);
    
    --lightGreen: rgba(79,148,25,1.0);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 92.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }

  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;

  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
`;
