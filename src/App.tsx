import React from 'react';
import SelectedLocalesContext, {
  SelectedLocalesProvider,
} from './context/SelectedLocalesContext/SelectedLocalesContext';
import { PropsSelectedLocalesContext } from './context/SelectedLocalesContext/SelectedLocalesContext.interface';
import { PropsSelectedLocale } from './hooks/useLocalesToVisit/useLocalesToVisit.interface';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <SelectedLocalesProvider>
      <Dashboard />
    </SelectedLocalesProvider>
  );
}

export default App;
