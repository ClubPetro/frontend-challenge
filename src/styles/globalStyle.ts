import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .main__container{
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;
    padding: 0 20px;
  }

  #modal__wrapper.active{
    position: fixed;
    height: 100%;
    width: 100%;
    background:rgba(0,0,0,0.8);
    top: 0;
    left: 0;
  }
`;

export default GlobalStyle;
