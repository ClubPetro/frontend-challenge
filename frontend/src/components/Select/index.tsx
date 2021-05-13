import { useRef, useEffect, useMemo } from 'react';
import { OptionTypeBase, Props as ReactSelectProps } from 'react-select';
import { useField } from '@unform/core';
import Tooltip from '../Tooltip';

import { Container, SelectReact } from './styles';

interface SelectProps extends ReactSelectProps {
  name: string;
  label?: string;
}

const Select: React.FC<SelectProps> = ({ name, label, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const selectStyle = useMemo(() => {
    const style = {
      control: () => ({
        border: 0,
        display: 'flex',
      }),
    };

    return style;
  }, []);

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

  return (
    <Container>
      {!!label && <label htmlFor={name}>{label}</label>}
      <div>
        <SelectReact
          id={name}
          styles={selectStyle}
          defaultValue={defaultValue}
          ref={selectRef}
          {...rest}
        />
        {error && <Tooltip errorMessage={error} />}
      </div>
    </Container>
  );
};

export default Select;
