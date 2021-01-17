import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Formik } from 'formik';
import uniqid from 'uniqid';
import swal from 'sweetalert';
import Input from '../../shared/Input';
import Text from '../../shared/Text';
import * as S from './styled';
import * as U from '../../styles/utilities';
import { apiContries, api } from '../../services/api';

const FilterPlaces: React.FC = () => {
  const [contries, setCountries] = useState([]);
  const [places, setPlaces] = useState([]);

  const [initialValues] = useState({
    country: '',
    place: '',
    goal: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiContries.get('/all');
      setCountries(response.data.map((item: any) => item.name));
    };
    fetchData();
  }, []);

  async function handleSubmitForm(values: {
    country: string;
    place: string;
    goal: string;
  }) {
    try {
      const flagResp = await apiContries.get(`name/${values.country}`);
      const [result] = flagResp.data;

      if (flagResp) {
        const response = await api.post('/places', {
          id: uniqid(),
          flag: result.flag,
          country: values.country,
          place: values.place,
          goal: values.goal,
        });
        swal('Adicionado!', 'O lugar foi adicionado com sucesso!', 'success');

        setPlaces(response.data);
      }
    } catch {
      swal('Erro!', 'Verifique os campos!', 'error');
    }
  }

  console.log(places);

  return (
    <S.Container>
      <U.ContentLimit>
        <Formik initialValues={initialValues} onSubmit={handleSubmitForm}>
          {({ handleSubmit, handleBlur, handleChange, values }) => (
            <form onSubmit={handleSubmit}>
              <Grid container alignItems="center" spacing={4}>
                <Grid item xs={12} md={3}>
                  <Input
                    select
                    label="País"
                    options={contries}
                    name="country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.country}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Input
                    label="Local"
                    placeholder="Digite o local que deseja conhecer"
                    name="place"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.place}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <Input
                    label="Meta"
                    mask="99/9999"
                    placeholder="mês/ano"
                    name="goal"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.goal}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <S.Button type="submit">
                    <Text modifiers={['white']}>Adicionar</Text>
                  </S.Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </U.ContentLimit>
    </S.Container>
  );
};

export default FilterPlaces;
