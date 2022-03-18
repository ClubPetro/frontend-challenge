import styled from '@emotion/styled'
import { css } from '@mui/styled-engine'
import { Theme, Container } from '@mui/material'

export const ContainerStyled = styled(Container)`
  ${({ theme }: { theme?: Theme }) =>
    theme &&
    css`
      min-height: 55px;
      padding: 35px 0 35px 0;
      display: grid;
      grid-template-columns: 1fr;
      gap: 25px;
  `}
`
