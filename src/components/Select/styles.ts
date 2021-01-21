import styled from 'styled-components';
import ReactSelect from 'react-select';

export const Container = styled.div`
  width: 303px;
  height: 48px;
  background: #fff;
  border-radius: 7px;
  /* margin-right: 34px; */

  display: flex;
  align-items: center;

  @media screen and (min-width: 0px) and (max-width: 950px) {
    width: 400px;
    margin: 8px 0;
  }

  @media screen and (min-width: 950px) and (max-width: 1220px) {
    width: 170px;
  }
`;

export const SelectReact = styled(ReactSelect)`
  flex: 1;
`;
