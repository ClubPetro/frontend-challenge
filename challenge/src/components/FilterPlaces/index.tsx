import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Formik } from 'formik';
import { Input, Text } from '../../shared';
import { usePlaces } from '../../hooks/context/modules/PlacesContext';
import { apiCountries } from '../../services/api';
import * as S from './styled';
import * as U from '../../styles/utilities';

interface ItemProps {
  country: string;
  place: string;
  goal: string;
}

const FilterPlaces: React.FC = () => {
  const [countries, setCountries] = useState([]);

  const { addPlace } = usePlaces();

  const [initialValues] = useState<ItemProps>({
    country: '',
    place: '',
    goal: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiCountries.get('/all');
      setCountries(response.data.map((item: any) => item));
    };
    fetchData();
  }, []);

  async function handleSubmitForm(values: ItemProps) {
    addPlace({
      ...values,
      country: values.country,
      place: values.place,
      goal: values.goal,
    });
  }

  return (
    <S.Container>
      <U.ContentLimit>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            handleSubmitForm(values);
            resetForm();
          }}
          enableReinitialize
        >
          {({ handleSubmit, handleBlur, handleChange, values }) => (
            <form onSubmit={handleSubmit}>
              <Grid container alignItems="center" spacing={4}>
                <Grid item xs={12} md={3}>
                  <Input
                    select
                    label="País"
                    options={countries}
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
