import styled from "styled-components";

const Styles = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 33px 0px;

  .wrapper {
    display: grid;
    grid-template-columns: repeat(1, 250px);
    grid-column-gap: 30px;
    grid-row-gap: 33px;
  }

  @media (min-width: 560px) {
    .wrapper {
      grid-template-columns: repeat(2, 250px);
    }
  }

  @media (min-width: 870px) {
    .wrapper {
      grid-template-columns: repeat(3, 250px);
    }
  }

  @media (min-width: 1180px) {
    .wrapper {
      grid-template-columns: repeat(4, 250px);
    }
  }

  @media (min-width: 1440px) {
    padding: 53px 0px;
    .wrapper {
      grid-template-columns: repeat(5, 250px);
    }
  }
`;

export default Styles;
