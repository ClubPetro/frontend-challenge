import { Button } from "@mui/material";
import styled from "styled-components";

export const ButtonStyles = styled(Button)`
  && {
    width: 100%;
    height: 49px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fonts.size.big};
    background-color: ${({ theme }) => theme.colors.button};
    border-radius: 7px;
    transition: all 0.5s;
    text-transform: capitalize;
    &:hover {
      background-color: ${({ theme }) => theme.colors.button};
      opacity: 0.75;
    }
  }
`;
