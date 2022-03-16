import { Card } from './styles';
import { CardLocaleContent } from '../../atoms/CardLocaleContent/CardLocaleContent';
import { CardLocaleHeader } from '../CardLocaleHeader/CardLocaleHeader';
import { ReactElement } from 'react';
import { PropsCardLocale } from './CardLocale.interface';

export const CardLocale = (props: PropsCardLocale): ReactElement => {
  return (
    <Card>
      <CardLocaleHeader {...props} />
      <CardLocaleContent {...props} />
    </Card>
  );
};
