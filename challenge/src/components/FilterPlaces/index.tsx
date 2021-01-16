import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Input from '../../shared/Input';
import Text from '../../shared/Text';
import * as S from './styled';
import * as U from '../../styles/utilities';
import api from '../../services/api';

const FilterPlaces: React.FC = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/all');
      setPlaces(response.data.map((item: any) => item.name));
    };
    fetchData();
  }, []);

  return (
    <S.Container>
      <U.ContentLimit>
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} md={3}>
            <Input select label="País" options={places} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Input
              label="Local"
              placeholder="Digite o local que deseja conhecer"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Input label="Meta" mask="99/9999" placeholder="mês/ano" />
          </Grid>
          <Grid item xs={12} md={2}>
            <S.Button type="submit">
              <Text modifiers={['white']}>Adicionar</Text>
            </S.Button>
          </Grid>
        </Grid>
      </U.ContentLimit>
    </S.Container>
  );
};

export default FilterPlaces;
