import React from 'react';

import GlobaStyle from './styles/global';

import Header from './components/Header';
import Form from './components/Form';

const  App: React.FC = () =>  {
  return (
    <>
    <Header />
    <Form />
    <GlobaStyle />
    </>
  );
}

export default App;
