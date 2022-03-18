import styled from '@emotion/styled'
import { css } from '@mui/styled-engine'
import { Button } from '@mui/material'

export const ButtonStyled = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  fontWeight: 400,
  padding: '6px 12px',
  border: '1px solid',
  borderRadius: 7,
  lineHeight: 1.5,
  backgroundColor: '#006C18',
  borderColor: '#006C18',
  height: 45,
  alignSelf: 'flex-end',
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
  '&:hover': {
    backgroundColor: '#2b520c',
    boxShadow: 'none',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});