import React, { useEffect, useRef } from 'react';
import { Props as InputProps } from 'react-input-mask';
import { useField } from '@unform/core';

import { Container } from './styles';

interface Props extends InputProps {
  name: string;
  large?: boolean;
}

const InputMask: React.FC<Props> = ({ name, large = false, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container
      isLarge={large}
      ref={inputRef}
      defaultValue={defaultValue}
      {...rest}
    />
  );
};

export default InputMask;
