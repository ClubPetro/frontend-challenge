import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
