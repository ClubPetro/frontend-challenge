import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const media = generateMedia({
  huge: "1440px",
  large: "1170px",
  medium: "915px",
  small: "600px",
});

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem 1rem;
  margin-left: 0;

  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 3rem;
  padding-bottom: 3rem;

  ${media.greaterThan("large")`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem 1rem;
    margin-left: 0;
  `}

  ${media.between("medium", "large")`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem 1rem;
    margin-left: 0;
  `}

  ${media.between("small", "medium")`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 1rem;
    margin-left: 0;

  `} 
  
  ${media.lessThan("small")`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem 1rem;
    margin-left: 0;

  `}
`;
