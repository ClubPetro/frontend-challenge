import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import GlobalStyle from './commons/styles/globalStyle'
import HVTheme from './commons/styles/theme'
import { Header, FieldBar } from './components'
import { Home } from './containers'
import { CountrieContextProvider } from "./contexts/CardsInfos";

function App() {
  return (
    <CountrieContextProvider>
      <StyledEngineProvider injectFirst>
        <EmotionThemeProvider theme={HVTheme}>
          <ThemeProvider theme={HVTheme}>
            <GlobalStyle/>
            <Header/>
            <FieldBar/>
            <Home />
          </ThemeProvider>
        </EmotionThemeProvider>
      </StyledEngineProvider>
    </CountrieContextProvider>
  );
}

export default App;
