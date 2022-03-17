import styled from '@emotion/styled'
import { css } from '@mui/styled-engine'
import { Theme, Container } from '@mui/material'

export const WrapContainerStyled = styled('div')`
  ${({ theme }: { theme?: Theme }) =>
    theme &&
    css`
      background-color: ${theme.palette.primary.main};
      display: flex;
      justify-content: center;
      align-items: center;
  `}
`

export const ContainerStyled = styled(Container)`
  ${({ theme }: { theme?: Theme }) =>
    theme &&
    css`
      min-height: 55px;
      padding: 55px 0 35px 0;
      display: grid;
      grid-template-columns: 2fr 3fr 1fr 1fr;
      gap: 30px;

      ${theme.breakpoints.down('sm')}{
        grid-template-columns: 1fr;
        padding: 55px 10px 35px 10px;
      }
  `}
`
