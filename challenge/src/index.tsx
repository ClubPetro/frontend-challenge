import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/global';
import AppProvider from './hooks/context/index';

import App from './pages/Dashboard';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);
