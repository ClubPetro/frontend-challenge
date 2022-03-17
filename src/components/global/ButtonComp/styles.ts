import styled from '@emotion/styled'
import { css } from '@mui/styled-engine'
import { Theme, TextField, InputBase  } from '@mui/material'

export const ButtonStyled = styled(TextField)`
  ${({ theme }: { theme?: Theme }) =>
    theme &&
    css`
      background: red;
  `}
`