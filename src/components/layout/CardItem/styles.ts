import styled from '@emotion/styled'
import { css } from '@mui/styled-engine'
import { Theme, CardContent } from '@mui/material'

export const CardContentStyled = styled(CardContent)`
  ${({ theme }: { theme?: Theme }) =>
    theme &&
    css`
      position: relative;

      img {
        margin: 0;
        width: 50px;
        min-height: 40px;
        max-width: 200px;
      }

      h4 {
        margin: 15px 0px 10px 0px;
        padding: 0;
        color: ${theme.palette.primary.main};
      }

      p {
        font-size: 14px;
        margin: 0px 0px 8px 0px;
        padding: 0;

        &:first-of-type {
          margin: 40px 0px 8px 0px;
        }
      }
  `}
`

export const IconsPositionStyled = styled('div')`
  ${({ theme }: { theme?: Theme }) =>
    theme &&
    css`
      position: absolute;
      top: 16px;
      right: 12px;

      
      svg.MuiSvgIcon-root {
        color:#868686;
        cursor: pointer;

        &:first-of-type {
          margin-right: 5px;
        }
      }
  `}
`