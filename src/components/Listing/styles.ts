import { TextField } from "@mui/material";
import styled from "styled-components";
import { colors } from "../../theme/colors";

export const Container = styled.div`

`;

export const SearchContainer = styled.div`
  background-color: ${colors.green};
  height: 247px;
  display: flex;
  align-items: center;
  justify-content: center ;

  @media (max-width: 731px) { 
    height: 100%;
    padding: 40px 0 32px 0;
  }

`;

export const InputRow = styled.div`
  width: 100%;
  display: flex ;
  flex-wrap: wrap;
  justify-content: center ;
  align-items: center ;
`

export const LocalInput = styled(TextField)`
  background-color: ${colors.white} ;
  display: flex;
  flex-direction: row ;
  height: 56px;
  border-radius: 4px ;
  width: 100%;
  
`
export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Col = styled.div`
  display: flex ;
  flex-direction: column ;
  width: 100% ;
  span{
    margin-top: 8px;
    color: ${colors.white}
  }
`

export const MetaInput = styled(TextField)`
  background-color: ${colors.white} ;
  display: flex;
  flex-direction: row ;
  height: 56px;
  border-radius: 4px ;
  width: 100%;
`

export const AddButton = styled.button`
  background-color: ${colors.darkGreen};
  border-radius: 7px;
  width: 100%;
  height: 56px;
  border: 0;
  align-self: flex-end;
  margin-top: 28px ;
  color: ${colors.white};
  min-width: 101px !important;
  font-size: 18px;
  cursor: pointer ;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.8)
  }

`
export const ListingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
  margin: 53px 0;
  list-style: none;

  @media(max-width: 1417px){
    grid-template-columns: repeat(4, 1fr);
  }
  @media(max-width: 1165px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media(max-width: 935px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: 543px){
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Form = styled.form`
  width: 100%;
` 
