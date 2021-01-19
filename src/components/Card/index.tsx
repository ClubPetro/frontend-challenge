import React from 'react'

import * as S from './styles'

export type CardProps = {
  flag: string
  countryName: string
  local: string
  target: string
  onRemove: () => void
  onEdit: () => void
}

const Card = ({
  flag,
  countryName,
  local,
  target,
  onRemove,
  onEdit,
}: CardProps) => {
  return (
    <S.Wrapper elevation={4}>
      <S.Top>
        <S.FlagBar>
          <S.Country>
            <S.CountryFlag src={flag} alt={countryName} />
          </S.Country>
          <S.ActionsBar>
            <S.EditIcon
              onClick={onEdit}
              role="button"
              aria-label="Edit card button"
            />
            <S.CloseIcon
              onClick={onRemove}
              role="button"
              aria-label="Remove card button"
            />
          </S.ActionsBar>
        </S.FlagBar>
        <S.CountryName>{countryName}</S.CountryName>
      </S.Top>
      <S.Separator />
      <S.Bottom>
        <p>Local: {local} </p>
        <p>Meta: {target} </p>
      </S.Bottom>
    </S.Wrapper>
  )
}

export default Card
