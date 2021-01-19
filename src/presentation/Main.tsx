import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Persistor } from 'redux-persist/es/types'
import { EngageStore } from '../domain/DomainLayer'
import { Router } from './Router'

export type MainProps = {
  store: EngageStore
  persistor: Persistor
}

export const Main: React.FC<MainProps> = (props: MainProps) => {
  const { store, persistor } = props

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  )
}
