import React from 'react'
import { Button  } from '@mui/material'
import { ButtonStyled } from './styles'

const ButtonComp: React.FC = ({children}) => {
  return (
    <ButtonStyled variant="contained">{children}</ButtonStyled>
  )
}

export default ButtonComp