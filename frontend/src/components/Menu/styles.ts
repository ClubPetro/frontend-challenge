import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const media = generateMedia({
  huge: "1440px",
  large: "1170px",
  medium: "915px",
  small: "600px",
});

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: var(--lightGreen);

  .MuiIconButton-root {
    color: orange;
  }

  ${media.greaterThan("large")`
  display: flex;
  align-items: flex-end;
  width: 100%;
 
  `}

  ${media.between("medium", "large")`
  display: grid;
    grid-template-columns: repeat(3);
    gap: 1rem 1rem;
    margin-left: 0;
  `}

  ${media.between("small", "medium")`
  display: grid;
    grid-template-columns: repeat(2);
    gap: 1rem 1rem;
  `} 
  
  ${media.lessThan("small")`
  display: grid;
    grid-template-columns: repeat(1);
    gap: 1rem 1rem;
  `}
`;

export const Cont = styled.div`
  min-width: 100px;
  width: 100%;
  height: 80px;

  background-color: var(--black);
  margin-left: 1rem;
`;

export const Cont2 = styled.div`
  min-width: 100px;
  width: 100;

  height: 80px;

  background-color: var(--black);
  margin-left: 1rem;
`;
