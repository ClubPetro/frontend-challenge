import styled from 'styled-components';

export const Content = styled.div`
  padding: 3.5rem 2.25rem;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.875rem;

  @media (min-width: 1350px) and (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 830px) and (max-width: 1350px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 570px) and (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 570px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.25rem;
  }
`;
