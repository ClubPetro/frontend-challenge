import { createTheme } from '@mui/material'
import { dsTokens } from './dsTokens'

const HAVTheme = createTheme({
  palette: {
    primary: {
      main: dsTokens.colors.mainGreen,
    },
    secondary: {
      main: dsTokens.colors.mainBlack,
    },
    
    background: {
      default: dsTokens.colors.backgroundPrimary
    }
  },
  typography: {
    button: {
      fontFamily: dsTokens.fonts.primary
    }
  },
  shape: {
    borderRadius: dsTokens.shape.medium
  }
})

export default HAVTheme
