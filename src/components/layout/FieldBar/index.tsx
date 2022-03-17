import React from 'react'
import { WrapContainerStyled, ContainerStyled } from './styles'
import { InputComp, ButtonComp } from '../../'

const FieldBar: React.FC = () => {
  return (
    <WrapContainerStyled>
      <ContainerStyled>
        <InputComp 
          idInput={'test11'}
          labelTxt="País"
          required
        />
        <InputComp 
          idInput={'local'}
          labelTxt="Local"
         />
        <InputComp 
          idInput={'goal'}
          labelTxt="Meta"
         />
        <ButtonComp>Adicionar</ButtonComp>
      </ContainerStyled>
    </WrapContainerStyled>
  )
}

export default FieldBar