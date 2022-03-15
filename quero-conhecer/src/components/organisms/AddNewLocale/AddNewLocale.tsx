import { Button } from '@material-ui/core';
import { ReactElement } from 'react';
import { FormAddLocale } from '../../molecules/FormAddLocale/FormAddLocale';
import { AddNewLocaleContainer } from './styles';

export const AddNewLocale = (): ReactElement => {
  return (
    <AddNewLocaleContainer display='flex' alignItems='end'>
      <FormAddLocale />
      <Button variant='contained'>Adicionar</Button>
    </AddNewLocaleContainer>
  );
};
