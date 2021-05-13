import styled from 'styled-components';
import { Form } from '@unform/web';

export const Content = styled(Form)`
  background: var(--green-50);
  width: 31.25rem;
  height: 20.625rem;
  padding: 0.625rem 4.063rem 0.313rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    width: 28rem;
    height: 20.625rem;
    padding: 0.625rem 4.375rem 0.313rem;
  }

  div + div {
    margin-top: 0.938rem;
  }

  button {
    width: 100%;
    height: 3.063rem;
    background: var(--green-100);
    border-radius: 0.438rem;
    border: 0;
    color: var(--white);
    margin-top: 1.563rem;
    transition: filter 0.2s;
    text-transform: uppercase;
    outline: none;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
