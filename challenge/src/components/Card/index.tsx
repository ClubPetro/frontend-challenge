import React from 'react';
import { Grid } from '@material-ui/core';
import Text from '../../shared/Text';
import Spacing from '../../shared/Spacing';
import test from '../../assets/img/test.png';

import iconEdit from '../../assets/img/icon-edit.png';
import iconDelete from '../../assets/img/icon-delete.png';
import * as S from './styled';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Card: React.FC = () => {
  return (
    <S.Container>
      {data.map(item => (
        <S.Card key={item}>
          <S.ActionIcons>
            <Grid container spacing={3} justify="flex-end">
              <Grid item>
                <img src={iconEdit} alt="edit" />
              </Grid>
              <Grid item>
                <img src={iconDelete} alt="delete" />
              </Grid>
            </Grid>
          </S.ActionIcons>

          <S.Image src={test} />
          <Spacing mt={1} mb={1}>
            <Text
              modifiers={['bodyBold', 'green']}
              style={{ textTransform: 'uppercase' }}
            >
              Brasil
            </Text>
          </Spacing>
          <div style={{ borderBottom: '1px solid #ABABAB' }} />
          <Spacing mt={4.3} />

          <Text>Local: Balneario Camboriu </Text>
          <Text>Meta: 04/2022 </Text>
        </S.Card>
      ))}
    </S.Container>
  );
};

export default Card;
