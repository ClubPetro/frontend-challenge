import { useEffect, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import Tooltip from '../Tooltip';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: ref => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {!!label && <label htmlFor={name}>{label}</label>}
      <div>
        <input id={name} ref={inputRef} defaultValue={defaultValue} {...rest} />
        {error && <Tooltip errorMessage={error} />}
      </div>
    </Container>
  );
};

export default Input;
