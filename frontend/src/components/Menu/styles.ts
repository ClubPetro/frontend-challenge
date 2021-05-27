import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const media = generateMedia({
  huge: "1440px",
  large: "1170px",
  medium: "915px",
  small: "600px",
});

export const Container = styled.div`
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: var(--lightGreen);

  ${media.greaterThan("large")`
  display: flex;
  width: 100%;
 
  `}

  ${media.between("medium", "large")`
  display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 1rem 1rem;
    
  `}

  ${media.between("small", "medium")`
  display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 1rem 1rem;
  `} 
  
  ${media.lessThan("small")`
  display: grid;
    grid-template-columns: repeat(1, auto);
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
