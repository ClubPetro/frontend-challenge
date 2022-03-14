import { TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`

`;

export const SearchContainer = styled.div`
  background-color: #4F9419;
  height: 247px;
  display: flex;
  align-items: center;
  justify-content: center ;
`;

export const InputRow = styled.div`
  width: 100%;
  display: flex ;
  justify-content: center ;
  align-items: center ;
`

export const LocalInput = styled(TextField)`
  background-color: #ffff ;
  display: flex;
  flex-direction: row ;
  height: 56px;
  border-radius: 4px ;
  width: 100%;
  
`

export const Col = styled.div`
  display: flex ;
  flex-direction: column ;
  width: 100% ;
  span{
    margin-top: 8px;
    color: #fff
  }
`

export const MetaInput = styled(TextField)`
  background-color: #ffff ;
  display: flex;
  flex-direction: row ;
  height: 56px;
  border-radius: 4px ;
  width: 100%;
`

export const AddButton = styled.button`
  background: #006C18;
  border-radius: 7px;
  width: 100%;
  height: 56px;
  border: 0;
  align-self: flex-end;
  margin-top: 28px ;
  color: #fff;
  font-size: 18px;
  cursor: pointer ;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.8)
  }

`
export const ListingContainer = styled.div`
  padding: 53px 36px 0 36px;
`