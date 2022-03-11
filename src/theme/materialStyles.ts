import { createTheme } from "@mui/material";

export const componentsTheme = createTheme({
  components: {
    // Name of the component
    MuiSelect: {
      styleOverrides: {
        outlined: {
          backgroundColor: '#fff'
        }
        // Name of the slot
        // root: {
        //   // Some CSS
        //   // backgroundColor: '#000',
        //   width: '150px',
        //   borderRadius: '4px'
        // },
      },
    },
  },
});