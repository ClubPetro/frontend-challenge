import { Button } from '@material-ui/core';
import { ReactElement } from 'react';
import { FormAddLocale } from '../../molecules/FormAddLocale/FormAddLocale';
import { AddNewLocaleContainer } from './styles';
import { useFormik } from 'formik';
import { useLocalesToVisit } from '../../../hooks/useLocalesToVisit/useLocalesToVisit';
import { FormikInitialValues } from './AddNewLocale.interface';

export const AddNewLocale = (): ReactElement => {
  return (
    <AddNewLocaleContainer display='flex' alignItems='end'>
      <FormAddLocale />
    </AddNewLocaleContainer>
  );
};
