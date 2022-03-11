import {  FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField, ThemeProvider, useTheme } from '@mui/material';
import React from 'react';
import MultipleSelect from '../MultipleSelect';

import { Container } from './styles';

const Search: React.FC = () => {
  return <Container>
    <MultipleSelect/>
    {/* <ThemeProvider theme={theme}>
      <TextField
        select
        id="outlined-required"
        defaultValue="Hello World"
        placeholder='Selecione...'
        label="aaaaa"
      />
      <Select style={{width: '150px'}} defaultValue="AAAAAAAA" label="País"/>
    </ThemeProvider> */}

  </Container>;
}

export default Search;