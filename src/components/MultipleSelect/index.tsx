import { FormControl, MenuItem, OutlinedInput, SelectChangeEvent, Theme, useTheme, Select, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { componentsTheme } from '../../theme/materialStyles';
import { Country } from '../../types';
import { Container } from './styles';

// import { Container } from './styles';
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


interface SelectProps {
  countries: Country[]
  onSelect: (e: string) => void;
}

const MultipleSelect: React.FC<SelectProps> = ({countries, onSelect}) => {
  const [country, setCountry] = useState<string>('');
  const [commonName, setCommonName] = useState<string>('')

  const handleChange = (event: SelectChangeEvent<typeof country>) => {
    console.log(event)
    const {target: { value },} = event;
    setCountry(value);
    onSelect(String(value));
  };

  console.log(countries);
  return (
    <Container>
      <span>País</span>
      <ThemeProvider theme={componentsTheme}>
        <Select
          displayEmpty
          value={country}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (!selected) {
              return <span className="placeholder">Selecione...</span>;
            }
            return commonName;
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
              value={item.name.official}
              onClick={() => setCommonName(item.translations.por.common)}
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