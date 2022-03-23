import { createTheme, ThemeProvider } from '@mui/material';
import Home from './pages/Home/Home';
import GlobalStyle from './styles/globalStyle';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4F9419'
    }
  }
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
