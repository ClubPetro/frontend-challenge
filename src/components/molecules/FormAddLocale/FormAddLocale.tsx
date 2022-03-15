import { Input, Box, Typography, TextField, Button } from '@material-ui/core';
import { ReactElement } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { useCountries } from '../../../hooks/useCountries/useCountries';
import { useLocalesToVisit } from '../../../hooks/useLocalesToVisit/useLocalesToVisit';
import { useFormik } from 'formik';
import { FormikInitialValues } from '../../organisms/AddNewLocale/AddNewLocale.interface';

export const FormAddLocale = (): ReactElement => {
  const { countries } = useCountries();
  const { addCountry } = useLocalesToVisit(countries);

  const formik = useFormik<FormikInitialValues>({
    initialValues: {
      countryName: '',
      locale: '',
      date: '',
    },

    onSubmit: (values) => {
      addCountry(values.countryName, values.locale, values.date);
    },
  });

  return (
    <>
      <Box flex='1'>
        <Typography variant='subtitle1'>País</Typography>
        <Autocomplete
          options={countries}
          getOptionLabel={(option): any => option.translations.br}
          renderInput={(params): any => (
            <TextField {...params} label='Selecione...' variant='outlined' />
          )}
          onChange={
            (event, values) => formik.setFieldValue('countryName', values?.name)
            // formik.setFieldValue('locale', values.target.value)
          }
        />
      </Box>
      <Box flex='2'>
        <Typography variant='subtitle1'>Local</Typography>
        <Input
          placeholder='Digite o local que deseja conhecer'
          onChange={(values) =>
            formik.setFieldValue('locale', values.target.value)
          }
          value={formik.values.locale}
        />
      </Box>
      <Box>
        <Typography variant='subtitle1'>Meta</Typography>
        <Input
          placeholder='Mês/ano'
          onChange={(values) =>
            formik.setFieldValue('date', values.target.value)
          }
          value={formik.values.date}
        />
      </Box>

      <Button variant='contained' onClick={formik.submitForm}>
        Adicionar
      </Button>
    </>
  );
};
