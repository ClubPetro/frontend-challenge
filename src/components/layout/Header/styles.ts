import styled from '@emotion/styled'
import { css } from '@mui/styled-engine'
import { Theme } from '@mui/material'
import { MainContainerStyled } from '../../../commons/styles/globalStyle'

export const WrapContainerStyled = styled('div')`
  ${({ theme }: { theme?: Theme }) =>
    theme &&
    css`
      background-color: ${theme.palette.secondary.main};
      display: flex;
      justify-content: center;
      align-items: center;
  `}
`

export const ContainerStyled = styled(MainContainerStyled)`
  ${({ theme }: { theme?: Theme }) =>
    theme &&
    css`
      min-height: 55px;
  `}
`