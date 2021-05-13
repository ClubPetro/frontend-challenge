import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const Container = styled.div`
  width: 100%;

  > div {
    width: 100%;
    height: 3rem;
    border-radius: 0.438rem;
    border: 0;
    padding: 0 0.625rem;
    background: var(--white);

    display: flex;
    align-items: center;
  }

  label {
    display: block;
    color: var(--white);
    margin-bottom: 0.188rem;
  }
`;

export const ReactInputMask = styled(InputMask)`
  border: 0;
  outline: none;
  flex: 1;
  margin-right: 0.625rem;

  &::placeholder {
    color: var(--gray-100);
  }
`;
