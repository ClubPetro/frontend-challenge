import styled from 'styled-components';
import ReactSelect from 'react-select';

export const Container = styled.div`
  > div {
    width: 100%;
    height: 3rem;
    border-radius: 0.438rem;
    border: 0;
    padding: 0px 0.625rem;
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

export const SelectReact = styled(ReactSelect)`
  flex: 1;
`;
