import React from 'react'
import { InputLabel, FormControl  } from '@mui/material'
import { BootstrapInput } from './styles'
import { UseFormRegisterReturn } from "react-hook-form"

interface PropsInput {
  labelTxt?: string;
  nameTxt?: string;
  txtPlaceholder?: string;
  idInput: string | undefined;
  required?: boolean | undefined;
  requiredOption?: boolean | undefined;
  register?: UseFormRegisterReturn;
}

const InputComp: React.FC<PropsInput> = ({labelTxt, idInput, required = false, txtPlaceholder, nameTxt, register }) => {
  return (
    <>
      <FormControl >
        <InputLabel 
          style={{ left: -13, fontWeight: 400, color: '#fff' }} 
          shrink 
          htmlFor={idInput}
        >
          {labelTxt}
        </InputLabel>
        <BootstrapInput
          id={idInput}
          required={required}
          placeholder={txtPlaceholder} 
          name={nameTxt}
          {...register}
        />
      </FormControl>
    </>
  )
}

export default InputComp