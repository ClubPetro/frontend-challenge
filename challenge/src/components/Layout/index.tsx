import React from 'react';
import * as S from './styled';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.Wrapper>
      <Header />

      <S.Container>
        <S.ContentLimit>{children}</S.ContentLimit>
      </S.Container>
    </S.Wrapper>
  );
};

export default Layout;
