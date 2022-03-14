import { Button, Input, Box, Typography } from '@material-ui/core';
import { ReactElement } from 'react';
import { AddNewLocaleContainer } from './styles';

export const AddNewLocale = (): ReactElement => {
  return (
    <AddNewLocaleContainer display='flex' alignItems='end'>
      <Box flex='1'>
        <Typography variant='subtitle1'>País</Typography>
        <Input />
      </Box>
      <Box flex='2'>
        <Typography variant='subtitle1'>Local</Typography>
        <Input placeholder='Digite o local que deseja conhecer' />
      </Box>
      <Box>
        <Typography variant='subtitle1'>Meta</Typography>
        <Input placeholder='Mês/ano' />
      </Box>
      <Button variant='contained'>Adicionar</Button>
    </AddNewLocaleContainer>
  );
};
