import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 15.625rem;
  background: var(--white);
  border-radius: 0.625rem;
  box-shadow: 1px 2px 5px var(--gray-60);
  padding: 1.625rem 0.875rem;

  @media (max-width: 570px) {
    width: 25rem;
    margin: 0 auto;
  }
`;

export const CardHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid var(--gray-50);

  > div {
    display: flex;
    justify-content: space-between;

    > img {
      width: 3.5rem;
      height: 2.125rem;
    }

    div {
      width: 3.75rem;
      height: 1.25rem;

      button {
        background: transparent;
        border: 0;
        outline: none;

        & + button {
          margin-left: 1.438rem;
        }
      }
    }
  }

  strong {
    display: block;
    margin: 1rem 0 0.563rem;
    text-transform: uppercase;
    color: var(--green-50);
  }
`;

export const CardBody = styled.div`
  margin: 2.688rem 1.625rem;

  p + p {
    margin-top: 0.688rem;
  }
`;
