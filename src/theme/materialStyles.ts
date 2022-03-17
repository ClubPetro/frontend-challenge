import { createTheme } from "@mui/material";

export const componentsTheme = createTheme({
  breakpoints:{
    values: {
      xs: 0,
      sm: 732,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        outlined: {
          backgroundColor: '#fff',
        }
      },
    },
    MuiTextField:{
      styleOverrides:{
        root:{
          color: '#000'
        }
      }
    }
  },
});