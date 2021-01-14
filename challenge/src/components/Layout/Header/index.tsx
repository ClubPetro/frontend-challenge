import React from 'react';
import * as S from './styled';
import Logo from '../../../assets/img/logo.png';

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.ContentLimit>
        <img src={Logo} alt="Logo" />
      </S.ContentLimit>
    </S.Container>
  );
};

export default Header;
