import React from 'react';
import Header from '../../components/Header';
import Search from '../../components/Search';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header/>
      <Search/>
    </Container>
  );
}

export default Main;