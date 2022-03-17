import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import GlobalStyle from './commons/styles/globalStyle'
import HVTheme from './commons/styles/theme'
import { Header, FieldBar } from './components'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <EmotionThemeProvider theme={HVTheme}>
        <ThemeProvider theme={HVTheme}>
          <GlobalStyle/>
          <Header/>
          <FieldBar/>
          <h1>Started development - {process.env.REACT_APP_BASE_URL_COUNTRIES}</h1>
          <h1>Started development - {process.env.REACT_APP_BASE_URL_BACKEND_SERVER}</h1>
        </ThemeProvider>
      </EmotionThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
