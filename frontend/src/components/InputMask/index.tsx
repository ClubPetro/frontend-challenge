/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';
import { Props as InputProps } from 'react-input-mask';
import { useField } from '@unform/core';

import Tooltip from '../Tooltip';

import { Container, ReactInputMask } from './styles';

interface InputMaskProps extends InputProps {
  name: string;
  label?: string;
}

const InputMask: React.FC<InputMaskProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

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
    <Container>
      {!!label && <label htmlFor={name}>{label}</label>}
      <div>
        <ReactInputMask
          id={name}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />
        {error && <Tooltip errorMessage={error} />}
      </div>
    </Container>
  );
};

export default InputMask;
