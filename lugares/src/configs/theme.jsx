import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  root: {
    overflow: 'none'
  },
  palette: {
    primary: {
      // main: '#556cd6',
      main: '#006C18',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
