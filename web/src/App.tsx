import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobaStyle from './styles/global';

import Routes from './routes';
import Header from './components/Header';

const  App: React.FC = () =>  {
  
  return (
    <Router>
      <Header />
      <Routes/>
      <GlobaStyle />
    </Router>
  );
}

export default App;
