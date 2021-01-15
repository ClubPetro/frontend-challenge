/* eslint-disable react/prop-types */
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
}

const Select: React.FC<SelectProps> = ({ name, ...rest }) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <span>
        País:
        <select defaultValue={defaultValue} ref={selectRef} {...rest} />
      </span>
    </Container>
  );
};

export default Select;
