import React from 'react'
import { FormControl } from '@mui/material'
import { WrapContainerStyled, ContainerStyled } from './styles'
import { InputComp, ButtonComp } from '../../'
import { useContext } from "react";
import { CountrieContext } from "../../../contexts/CardsInfos";

const FieldBar: React.FC = () => {
  const { register, handleSubmit, onSubmitPostCard } = useContext(CountrieContext);

  return (
    <WrapContainerStyled>
      <form onSubmit={handleSubmit(onSubmitPostCard)}>
        <ContainerStyled>
            <InputComp 
              idInput={'countries'}
              txtPlaceholder={'Digite o nome do País'}
              labelTxt="País"
              register={register('countries')}
            />
            <InputComp 
              idInput={'local'}
              txtPlaceholder={'Digite o local que deseja conhecer'}
              labelTxt="Local"
              register={register('local')}
            />
            <InputComp 
              idInput={'goal'}
              txtPlaceholder={'mês/ano'}
              labelTxt="Meta"
              register={register('goal')}
            />
            <ButtonComp>Adicionar</ButtonComp>
        </ContainerStyled>
      </form>
    </WrapContainerStyled>
  )
}

export default FieldBar