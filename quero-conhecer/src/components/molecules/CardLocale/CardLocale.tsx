import { Card } from './styles';
import { CardLocaleContent } from '../../atoms/CardLocaleContent/CardLocaleContent';
import { CardLocaleHeader } from '../CardLocaleHeader/CardLocaleHeader';
import { ReactElement } from 'react';

export const CardLocale = (): ReactElement => {
  return (
    <Card>
      <CardLocaleHeader />
      <CardLocaleContent />
    </Card>
  );
};
