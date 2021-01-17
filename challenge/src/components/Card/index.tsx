import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import swal from 'sweetalert';
import Text from '../../shared/Text';
import Spacing from '../../shared/Spacing';

import { api } from '../../services/api';
import iconEdit from '../../assets/img/icon-edit.png';
import iconDelete from '../../assets/img/icon-delete.png';
import * as S from './styled';

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Card: React.FC = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('places');

      const { data } = response;
      setPlaces(data);
    }
    loadProducts();
  }, []);

  const deleteItem = (id: string) => {
    swal({
      title: 'Tem certeza que quer deletar?',
      text: 'O item será deletado',
      icon: 'warning',
      buttons: ['Não', 'Sim'],
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        api
          .delete(`places/${id}`)
          .then(() => {
            if (willDelete) {
              swal('O item foi deletado com sucesso!', {
                icon: 'success',
              });
              // fetchData();
            }
          })
          .catch(() => {
            swal('Falhou', 'Há algo errado', 'warning');
          });
      }
    });
  };

  return (
    <S.Container>
      {places.map((item: any) => (
        <S.Card key={item}>
          <S.ActionIcons>
            <Grid container spacing={3} justify="flex-end">
              <Grid item>
                <img src={iconEdit} alt="edit" />
              </Grid>
              <Grid item onClick={() => deleteItem(item.id)}>
                <img src={iconDelete} alt="delete" />
              </Grid>
            </Grid>
          </S.ActionIcons>

          <S.Image src={item.flag} />
          <Spacing mt={1} mb={1}>
            <Text
              modifiers={['bodyBold', 'green']}
              style={{ textTransform: 'uppercase' }}
            >
              {item.country}
            </Text>
          </Spacing>
          <div style={{ borderBottom: '1px solid #ABABAB' }} />
          <Spacing mt={4.3} />

          <Text>{item.place}</Text>
          <Text>{item.goal}</Text>
        </S.Card>
      ))}
    </S.Container>
  );
};

export default Card;
