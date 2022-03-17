import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import { Container, Theme } from '@mui/material'

const CSStyles = `
  *, *:before, *:after {
    box-sizing: border-box;
  }

  body, html {
    font-family: Roboto, Arial;
    margin: 0;
    padding: 0;
  }

  label, select, button { cursor: pointer; }
  img { max-width: 100%; }
`

const GlobalStyle = () => (
  <Global
    styles={css`
      ${CSStyles}
    `}
  />
)

export const MainContainerStyled = styled(Container)`
  ${({ theme }: { theme?: Theme }) =>
    theme &&
    css`
      background-color: transparent;
      display: flex;
      justify-content: flex-start;
      align-items: center;
  `}
`

export default GlobalStyle
