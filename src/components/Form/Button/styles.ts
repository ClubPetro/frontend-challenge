import { Button } from "@mui/material";
import styled, { css } from "styled-components";

interface Props {
  typebgcolor?: "default" | "cancel";
}

export const ButtonStyles = styled(Button)<Props>`
  && {
    width: 100%;
    height: 49px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fonts.size.big};
    background-color: ${({ theme }) => theme.colors.button};
    ${({ typebgcolor }) =>
      typebgcolor === "default"
        ? css`
            background-color: ${({ theme }) => theme.colors.button};
            &:hover {
              background-color: ${({ theme }) => theme.colors.button};
              opacity: 0.75;
            }
          `
        : css`
            background-color: ${({ theme }) => theme.colors.buttonCancel};
            &:hover {
              background-color: ${({ theme }) => theme.colors.buttonCancel};
              opacity: 0.75;
            }
          `}
    border-radius: 7px;
    text-transform: capitalize;
    transition: all 0.5s;
  }
`;
