import React from 'react';

import logo from '../../assets/lugares.png';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Planet Earth"/>
    </Container>
  );
}

export default Header;