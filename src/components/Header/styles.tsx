import styled from "styled-components";

const Styles = styled.header`
  width: 100%;
  height: 85px;
  background: #000;
  box-sizing: border-box;

  @media (min-width: 1440px) {
    
    .container {
      width: 1425px;
      margin: 0 auto;
    }

    .logo {
      margin-left: 53px;
    }
  }
`;

export default Styles;
