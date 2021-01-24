import React, { useRef, useEffect } from 'react';
import Select, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';
import { useField } from '@unform/core';
import customStyles from './customStyles';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}
const SelectInput: React.FC<Props> = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField} = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
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
    <Select
      defaultValue={defaultValue}
      ref={selectRef}
      {...rest}
      styles={customStyles}
      theme={theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: 'rgba(79, 148, 25, 0.5)',
          primary: '#4f9419',
        },
      })}
    />
  );
};
export default SelectInput;