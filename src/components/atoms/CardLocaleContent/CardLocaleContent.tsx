import { Typography } from '@material-ui/core';
import { ReactElement } from 'react';
import { PropsCardLocale } from '../../molecules/CardLocale/CardLocale.interface';
import { CardContent } from './styles';

export const CardLocaleContent = ({ item }: PropsCardLocale): ReactElement => {
  return (
    <CardContent>
      <Typography variant='subtitle2'>Local: {item.locale}</Typography>
      <Typography variant='subtitle2'>Meta: {item.date}</Typography>
    </CardContent>
  );
};
