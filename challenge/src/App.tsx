import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import AppProvider from './hooks';
import GlobalStyle from './styles/global';

import Header from './components/Header';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Header />
      </AppProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
