import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  width: 100%;
  height: 15.438rem;
  padding: 4.5rem;
  background: var(--green-50);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    height: 25rem;
  }
`;

export const FormContent = styled(Form)`
  width: 100%;
  max-width: 82.5rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  gap: 2.125rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  button {
    width: 100%;
    height: 3.063rem;
    background: var(--green-100);
    border-radius: 0.438rem;
    border: 0;
    color: var(--white);
    margin-top: auto;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
