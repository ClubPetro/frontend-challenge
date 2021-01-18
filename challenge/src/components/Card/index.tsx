import React from 'react';
import { Grid } from '@material-ui/core';
import EditPlace from '../EditPlace';
import { Text, Spacing, Modal } from '../../shared';
import { usePlaces } from '../../hooks/context/modules/PlacesContext';
import iconEdit from '../../assets/img/icon-edit.png';
import iconDelete from '../../assets/img/icon-delete.png';
import * as S from './styled';

const Card: React.FC = () => {
  const {
    places,
    deletePlace,
    modalEditCountry,
    refModalEdit,
    modalEdit,
  } = usePlaces();

  return (
    <>
      <S.Container>
        {places.map((item: any) => (
          <S.Card key={item} data-cy="list-places">
            <S.ActionIcons>
              <Grid container spacing={3} justify="flex-end">
                <Grid
                  item
                  onClick={() => modalEditCountry(item.id)}
                  data-cy="edit-btn"
                >
                  <img src={iconEdit} alt="edit" />
                </Grid>
                <Grid
                  item
                  onClick={() => deletePlace(item.id)}
                  data-cy="delete-btn"
                >
                  <img src={iconDelete} alt="delete" />
                </Grid>
              </Grid>
            </S.ActionIcons>

            <S.Image src={item.flag} alt="flag" />
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

      {modalEdit && (
        <Modal onClose={() => modalEditCountry()}>
          <div ref={refModalEdit}>
            <EditPlace />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Card;
