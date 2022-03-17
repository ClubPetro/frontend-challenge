import React from 'react'
import { ButtonStyled } from './styles'

interface ButtonProps {
  rest?: any;
}

const ButtonComp: React.FC<ButtonProps> = ({rest, children}) => {
  return (
    <ButtonStyled {...rest} variant="contained" type="submit">
      {children}
    </ButtonStyled>
  )
}

export default ButtonComp