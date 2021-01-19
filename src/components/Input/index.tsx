import React from 'react'
import ReactInputMask, { Props } from 'react-input-mask'

import * as S from './styles'

export type InputProps = Props & {
  inputSize?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  error?: boolean
  outline?: boolean
}

const Input = ({
  inputSize = 'medium',
  fullWidth = true,
  error,
  outline,
  ...props
}: InputProps) => (
  <S.Wrapper
    fullWidth={fullWidth}
    inputSize={inputSize}
    error={error}
    outline={outline}
  >
    <ReactInputMask {...props} />
  </S.Wrapper>
)

export default Input
