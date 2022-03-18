import styled from '@emotion/styled'
import { css } from '@mui/styled-engine'
import { Theme } from '@mui/material'
import { MainContainerStyled } from '../../commons/styles/globalStyle'

export const WrapContainerStyled = styled('div')`
  ${({ theme }: { theme?: Theme }) =>
    theme &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
  `}
`

export const ContainerStyled = styled(MainContainerStyled)`
  ${({ theme }: { theme?: Theme }) =>
    theme &&
    css`
      margin: 40px 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      gap: 25px;

      ${theme.breakpoints.down('md')}{
        grid-template-columns: 1fr 1fr;
      }

      ${theme.breakpoints.down('sm')}{
        grid-template-columns: 1fr;
      }
  `}
`