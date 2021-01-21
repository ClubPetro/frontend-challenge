import React, { useRef, useEffect } from 'react';
import { OptionTypeBase, Props as SelectProps } from 'react-select';
import { useField } from '@unform/core';

import { Container, SelectReact } from './styles';

interface Props extends SelectProps {
  name: string;
}

const Select: React.FC<Props> = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  const style = {
    control: () => ({
      border: 0,
      display: 'flex',
    }),
  };

  return (
    <Container>
      <SelectReact
        styles={style}
        defaultValue={defaultValue}
        ref={selectRef}
        {...rest}
      />
    </Container>
  );
};

export default Select;
