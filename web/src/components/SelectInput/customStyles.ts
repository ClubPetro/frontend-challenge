import { StylesConfig, OptionTypeBase } from 'react-select';

const customStyles: StylesConfig<OptionTypeBase, boolean> = {
  container: provided => ({
    ...provided,
    width: '303px',
    minHeight: '1px',
    textAlign: 'left',
    alignItems: 'center',
    color: '#333333',
    border: 0,
  }),
  control: provided => ({
    ...provided,
    borderRadius: '7px',
    minHeight: '1px',
    height: '48px',
    width: '303px',
    border: 0,
    backgroundColor: '#fff',

  }),

  input: (provided) => ({
    ...provided,
    textAlign: 'center',
    color: '#868686',
  }),

  placeholder: provided => ({
    ...provided,
    minHeight: '1px',
    textAlign: 'center',
    color: '#868686',
  }),

  singleValue: provided => ({
    ...provided,
    color: '#868686',
  }),
};

export default customStyles;