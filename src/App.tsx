import React from 'react';
import { SelectedLocalesProvider } from './context/SelectedLocalesContext/SelectedLocalesContext';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <SelectedLocalesProvider>
      <Dashboard />
    </SelectedLocalesProvider>
  );
}

export default App;
