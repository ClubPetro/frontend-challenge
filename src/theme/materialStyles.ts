import { createTheme } from "@mui/material";

export const componentsTheme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        outlined: {
          backgroundColor: '#fff',
        }
      },
    },
  },
});