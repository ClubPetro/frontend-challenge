import { Input, Box, Typography, TextField, Button } from '@material-ui/core';
import MaterialInput from '@material-ui/core/Input';
import { ReactElement } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { useCountries } from '../../../hooks/useCountries/useCountries';
import { useLocalesToVisit } from '../../../hooks/useLocalesToVisit/useLocalesToVisit';
import { useFormik } from 'formik';
import { FormikInitialValues } from '../../organisms/AddNewLocale/AddNewLocale.interface';
import InputMask from 'react-input-mask';

export const FormAddLocale = ({ edit }: { edit?: boolean }): ReactElement => {
  const { countries } = useCountries();
  const { addCountry } = useLocalesToVisit(countries);

  const handleSubmit = (values: any) => {
    addCountry(values.countryName, values.locale, values.date);
    formik.resetForm();
  };

  const formik = useFormik<FormikInitialValues>({
    initialValues: {
      countryName: '',
      locale: '',
      date: '',
    },

    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const onSubmitValidations = () => {
    if (
      formik.values.countryName.length <= 0 &&
      formik.values.locale.length <= 0 &&
      formik.values.date.length <= 0
    ) {
      return;
    }

    formik.submitForm();
  };

  return (
    <>
      <Box flex='1' minWidth='200px'>
        <Typography variant='subtitle1'>País</Typography>
        <Autocomplete
          disabled={edit}
          options={countries}
          getOptionLabel={(option): any => option.translations.br}
          renderInput={(params): any => (
            <TextField {...params} label='Selecione...' variant='outlined' />
          )}
          onChange={(event, values) =>
            formik.setFieldValue('countryName', values?.name)
          }
          value={{
            name: formik.values.countryName,
            translations: { br: formik.values.countryName },
          }}
        />
      </Box>
      <Box flex='2' minWidth='208px'>
        <Typography variant='subtitle1'>Local</Typography>
        <Input
          placeholder='Digite o local que deseja conhecer'
          onChange={(values) =>
            formik.setFieldValue('locale', values.target.value)
          }
          value={formik.values.locale}
        />
      </Box>
      <Box flex='1' minWidth='200px'>
        <Typography variant='subtitle1'>Meta</Typography>
        <InputMask
          mask='99/99/9999'
          value={formik.values.date}
          onChange={(values) =>
            formik.setFieldValue('date', values.target.value)
          }
          placeholder='Mês/ano'
        >
          {() => <MaterialInput placeholder='Mês/ano' />}
        </InputMask>
      </Box>

      <Button variant='contained' onClick={onSubmitValidations}>
        Adicionar
      </Button>
    </>
  );
};
