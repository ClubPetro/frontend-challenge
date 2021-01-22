import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

/** Global Styles */
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <Router>
        <Routes />
      </Router>
    </>
  );
};

export default App;
