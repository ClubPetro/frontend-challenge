import React from 'react'

import * as S from './styles'

export type HeaderProps = {
  img: string
  imgAltText: string
}

const Header = ({ img, imgAltText }: HeaderProps) => (
  <S.Wrapper>
    <S.Mid>
      <img src={img} alt={imgAltText} />
    </S.Mid>
  </S.Wrapper>
)

export default Header
