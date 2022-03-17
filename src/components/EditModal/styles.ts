import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const Container = styled.div`
`;

export const Content = styled.div`
  background-color: ${colors.white};
  height: 90%;
  position: relative;
  width: 300px;
  overflow-x: hidden ;
  padding: 26px 26px ;
  flex-direction: column ;
  align-items: center ;
  display:flex ;

  span {
    margin-bottom: 8px ;
  }

  img{
    width: 150px;
  }
  h1{
    color: ${colors.green};
    font-weight: 700;
    font-size: 26px;
    margin-bottom: 0;
    text-align: center;
  }
  small{
    color: ${colors.black};
    text-align: center;
    text-overflow: ellipsis ;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
  }

  small:hover{
    overflow: visible; 
    word-wrap: break-word;
    white-space: break-spaces;
    height: auto; 
  }

  @media (max-width: 416px) { 
    width: 250px;
  }
  @media (max-width: 360px) { 
    width: 240px;
  }
  @media (max-width: 280px) { 
    width: 165px;
  }
`
export const TitleContainer = styled.div`
  display:flex ;
  width: 100%;
  flex-direction: column ;
  align-items: center ;
  margin-bottom: 10px ;
`

export const Line = styled.div`
  background-color: ${colors.grey};
  height: 1px !important;
  width: 100%;
  margin-bottom: 6px ;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column ;
  width: 100%;
`


export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 14px ;

`
export const Option = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`

export const SaveButton = styled.button`
  background: ${colors.darkGreen};
  border-radius: 7px;
  width: 90%;
  align-self: center;
  height: 40px;
  border: 0;
  margin-top: 24px ;
  color: ${colors.white};
  font-size: 18px;
  cursor: pointer ;
  transition: filter 0.2s;
  
  &:hover{
    filter: brightness(0.8)
  }
`