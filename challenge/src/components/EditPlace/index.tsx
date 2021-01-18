import React, { useState, useEffect, useCallback } from 'react';
import { Grid } from '@material-ui/core';
import { Formik } from 'formik';
import { Input, Text, Spacing } from '../../shared';
import { api } from '../../services/api';
import { usePlaces } from '../../hooks/context/modules/PlacesContext';
import * as S from './styled';

interface ItemProps {
  id?: string;
  flag?: string;
  country: string;
  placeEdit: string;
  goalEdit: string;
}

const Edit: React.FC = () => {
  const { itemId, editPlace } = usePlaces();

  const [initialValues, setInitialValues] = useState<ItemProps>({
    id: '',
    flag: '',
    country: '',
    placeEdit: '',
    goalEdit: '',
  });

  const loadPlace = useCallback(async () => {
    const response = await api.get(`places/${itemId}`);
    const { data } = response;
    setInitialValues({ ...data, placeEdit: data.place, goalEdit: data.goal });
  }, [itemId]);

  useEffect(() => {
    loadPlace();
  }, [loadPlace]);

  const handleSubmitForm = (values: any) => {
    editPlace(itemId, {
      ...values,
      place: values.placeEdit,
      goal: values.goalEdit,
    });
  };

  return (
    <S.ModalContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitForm}
        enableReinitialize
      >
        {({ handleSubmit, handleBlur, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <Text modifiers={['title']}>Editar</Text>
            <Spacing mb={4} />
            <Grid container direction="column" spacing={4}>
              <Grid item xs={12}>
                <Input
                  border
                  label="Local"
                  colorLabel="#000"
                  placeholder="Digite o local que deseja conhecer"
                  name="placeEdit"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.placeEdit}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  border
                  label="Meta"
                  colorLabel="#000"
                  mask="99/9999"
                  placeholder="mês/ano"
                  name="goalEdit"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.goalEdit}
                />
              </Grid>
              <Grid item xs={12}>
                <S.Button type="submit" data-cy="submit-edit-btn">
                  <Text modifiers={['white']}>Editar</Text>
                </S.Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </S.ModalContainer>
  );
};

export default Edit;
