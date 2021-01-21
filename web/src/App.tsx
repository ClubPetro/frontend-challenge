import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobaStyle from './styles/global';

import Routes from './routes';

const  App: React.FC = () =>  {
  
  return (
    <Router>
      <Routes/>
      <GlobaStyle />
    </Router>
  );
}

export default App;
