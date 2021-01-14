import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const Container = styled.div`
  min-height: calc(100vh - 465.78px);
  /* 104px header + 379.78px footer = 120px  */
`;

export const ContentLimit = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 3rem;

  @media (max-width: 350px) {
    padding: 0 1rem;
  }
`;
