import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: 0.1s;
    }
    body {
        background: ${({ theme }) => theme.colors.backgroundPrimary};
        font-family: ${({ theme }) => theme.fonts.primary};
    }
`;
