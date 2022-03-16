import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const Container = styled.div`
  
`;

export const Content = styled.div`
  background-color: ${colors.white};
  width: 270px;
  padding: 24px;

  
  h3{
    margin-top: 0;
    margin-bottom: 10px;
    color: ${colors.darkerGrey};
  }

  @media(max-width: 379px){
    width: 260px;
  }
  @media(max-width: 360px){
    width: 245px;
  }
  @media(max-width: 280px){
    width: 165px;
  }
`

export const InputRow = styled.div`
  display: flex;
  float: right;
  flex-direction: row;
  @media(max-width: 280px){
    flex-direction: column-reverse;
    width: 100%;
  }
`

export const DeleteButton = styled.button`
  background: ${colors.orange};
  border-radius: 7px;
  width: 30px;
  height: 40px;
  margin-left: 8px;
  border: 0;
  align-self: flex-end;
  margin-top: 28px ;
  color: ${colors.white};
  min-width: 101px !important;
  cursor: pointer ;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.8)
  }

  @media(max-width: 280px){
    width: 100%;
  }
`

export const ButtonOutline = styled.button`
  background-color: ${colors.white} ;
  border-radius: 7px;
  width: 30px;
  height: 40px;
  border: 0;
  align-self: flex-end;
  margin-top: 28px ;
  color: ${colors.darkGrey};
  min-width: 101px !important;
  cursor: pointer ;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.8)
  }

  @media(max-width: 280px){
    width: 100%;
  }
`

export const Option = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`