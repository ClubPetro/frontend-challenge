import React from 'react'
import { WrapContainerStyled, ContainerStyled } from './styles'
import Logo from "../../../assets/imgs/svg/logo.svg";

const Header: React.FC = () => {
  return (
    <WrapContainerStyled>
      <ContainerStyled>
        <img src={Logo} alt="Lugares para conhecer" width="115px" />
      </ContainerStyled>
    </WrapContainerStyled>
  )
}

export default Header