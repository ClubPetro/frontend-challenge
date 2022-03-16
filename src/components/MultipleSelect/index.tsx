import { MenuItem, OutlinedInput, SelectChangeEvent, Select, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { componentsTheme } from '../../theme/materialStyles';
import { SelectProps } from '../../types';
import { Container } from './styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultipleSelect: React.FC<SelectProps> = ({countries, onSelect, value = ''}) => {
  const [country, setCountry] = useState<string>('');

  const handleChange = (event: SelectChangeEvent<typeof country>) => {
    const {target: { value },} = event;
    setCountry(value);
    onSelect(String(value));
  };
  return (
    <Container>
      <span>País</span>
      <ThemeProvider theme={componentsTheme}>
        <Select
          displayEmpty
          value={value}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (!selected) {
              return <span className="placeholder">Selecione...</span>;
            }
            return selected;
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Selecione...</em>
          </MenuItem>
          {countries.map((item, index)=> (
            <MenuItem
              key={index}
              value={item.translations.por.common}
            >
              {item.translations.por.common}
            </MenuItem>
          ))
          }

        </Select>
      </ThemeProvider>

    </Container>
  );
}

export default MultipleSelect;