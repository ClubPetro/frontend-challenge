import React from 'react';
import * as S from './styled';
import * as U from '../../styles/utilities';
import Logo from '../../assets/img/logo.png';

const Header: React.FC = () => {
  return (
    <S.Container>
      <U.ContentLimit>
        <img src={Logo} alt="Logo" />
      </U.ContentLimit>
    </S.Container>
  );
};

export default Header;
