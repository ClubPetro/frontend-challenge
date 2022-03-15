import { Typography } from '@material-ui/core';
import { ReactElement } from 'react';
import { CardContent } from './styles';

export const CardLocaleContent = (): ReactElement => {
  return (
    <CardContent>
      <Typography variant='subtitle2'>Local: Mococa</Typography>
      <Typography variant='subtitle2'>Meta: 04/2022</Typography>
    </CardContent>
  );
};
