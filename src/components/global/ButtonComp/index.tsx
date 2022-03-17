import React from 'react'
import { Button  } from '@mui/material'

const ButtonComp: React.FC = ({children}) => {
  return (
    <Button variant="contained">{children}</Button>
  )
}

export default ButtonComp