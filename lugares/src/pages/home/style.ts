import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
`;

export const Header = styled.header`
  background-color: #000000;
  box-shadow: 0px 0px 4px black;
  padding: 0 5%;

  img {
    height: 80px;
    width: 150px;
  }
`;

export const FormGroup = styled.div`
  background-color: #4f9419;
  height: 247px;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 0 5%;
  box-sizing: border-box;
  @media (max-width: 800px) {
    height: 100%;
    padding: 2% 0;
    justify-content: center;
  }
`;

export const CardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
`;
