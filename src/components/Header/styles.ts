import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const Container = styled.div`
  background-color: ${colors.black} ;
  height: 85px;
  display: flex;
  padding-left: 53px ;

  @media (max-width: 732px) { 
    align-items: center;
    justify-content: center;
    padding-left: 0;
  }

`;
