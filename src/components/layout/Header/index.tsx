import React from 'react'
import { WrapContainerStyled, ContainerStyled } from './styles'

const Header: React.FC = () => {
  return (
    <WrapContainerStyled>
      <ContainerStyled>
        <img src="../test" alt="Lugares para conhecer" />
      </ContainerStyled>
    </WrapContainerStyled>
  )
}

export default Header