import styled from 'styled-components';

export const Container = styled.div`
  height: 8.5rem;
  background-color: #000;
`;

export const ContentLimit = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 3rem;

  @media (max-width: 350px) {
    padding: 0 1rem;
  }
`;
