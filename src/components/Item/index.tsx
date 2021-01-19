import React from 'react'

import * as S from './styles'

export type ItemProps = {
  children: React.ReactNode
  icon?: string
}

const Item = ({ icon, children }: ItemProps) => (
  <S.Wrapper>
    <S.Item>
      <S.Center>
        {!!icon && <S.Icon src={icon} />}
        {children}
      </S.Center>
    </S.Item>
  </S.Wrapper>
)

export default Item
