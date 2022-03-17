import styled from '@emotion/styled'
import { css } from '@mui/styled-engine'
import { Theme, TextField, InputBase  } from '@mui/material'

export const InputStyled = styled(TextField)`
  ${({ theme }: { theme?: Theme }) =>
    theme &&
    css`
      .MuiOutlinedInput-root.MuiInputBase-root {
        background-color: ${theme.palette.background.default};
        height: 45px;
      }
  `}
`

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: '15px',
  },
  '& .MuiInputBase-input': {
    borderRadius: 7,
    position: 'relative',
    backgroundColor: '#fcfcfb',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: 'none',
      borderColor: 'black',
    },
  },
}));
