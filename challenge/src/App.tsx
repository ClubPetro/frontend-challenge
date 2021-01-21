import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Lugares que eu quero conhecer</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}
