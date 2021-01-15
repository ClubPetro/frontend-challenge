import React from 'react';

import logoImg from '../../assets/logo.svg';
import { Container, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={logoImg} />
    </Container>
  );
};

export default Header;
