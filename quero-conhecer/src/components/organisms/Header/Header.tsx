import { ReactElement } from 'react';
import { HeaderContainer } from './styles';

export const Header = (): ReactElement => {
  return (
    <HeaderContainer>
      <img src='./images/logo.png'></img>
    </HeaderContainer>
  );
};
