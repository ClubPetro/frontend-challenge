import { StylesProvider } from '@material-ui/core'
import React from 'react'
import { TravelProvider } from './hooks/travels'
import Home from './pages/Home'

function App() {
  return (
    <StylesProvider injectFirst>
      <TravelProvider>
        <Home />
      </TravelProvider>
    </StylesProvider>
  )
}

export default App
