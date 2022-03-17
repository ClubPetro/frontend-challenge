import React from 'react'
import { InputLabel, FormControl  } from '@mui/material'
import { BootstrapInput } from './styles'

interface PropsInput {
  labelTxt?: string;
  idInput: string | undefined;
  required?: boolean | undefined;
  requiredOption?: boolean | undefined;
}

const InputComp: React.FC<PropsInput> = ({labelTxt, idInput, required = false }) => {
  return (
    <>
      <FormControl >
        <InputLabel style={{ left: -13, fontWeight: 400, color: '#fff' }} shrink htmlFor={idInput}>
          {labelTxt}
        </InputLabel>
        <BootstrapInput
          id={idInput}
          required={required}
        />
      </FormControl>
    </>
  )
}

export default InputComp