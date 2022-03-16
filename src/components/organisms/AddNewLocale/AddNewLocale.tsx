import { ReactElement } from 'react';
import { FormAddLocale } from '../../molecules/FormAddLocale/FormAddLocale';
import { AddNewLocaleContainer } from './styles';

export const AddNewLocale = (): ReactElement => {
  return (
    <AddNewLocaleContainer
      display='flex'
      alignItems='end'
      flexWrap='wrap'
      justifyContent='center'
    >
      <FormAddLocale />
    </AddNewLocaleContainer>
  );
};
