import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column ;
  margin-top: 8px;
  width: 100%;

  span{
    color: ${colors.white};
  }
  .placeholder{
    color: ${colors.lightGrey};
  }
`;
