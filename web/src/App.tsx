import React from 'react';

import GlobaStyle from './styles/global';

import Header from './components/Header';
import FormComponent from './components/FormComponent';
import PlaceCardList from './components/PlaceCardList';

const  App: React.FC = () =>  {
  return (
    <>
      <Header />
      <FormComponent/>
      <PlaceCardList/>
      <GlobaStyle />
    </>
  );
}

export default App;
