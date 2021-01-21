import * as S from './styles';

import logoImg from '../../assets/logo.svg';

export default function Header() {
  return (
    <S.Wrapper>
      <nav>
        <img src={logoImg} alt="Lugares que eu quero conhecer" />
      </nav>
    </S.Wrapper>
  );
}
