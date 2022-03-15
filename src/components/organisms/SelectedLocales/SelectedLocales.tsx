import { SelectedLocalesContainer } from './styles';
import { CardLocale } from '../../molecules/CardLocale/CardLocale';
import { ReactElement } from 'react';

export const SelectedLocales = (): ReactElement => {
  return (
    <SelectedLocalesContainer>
      <CardLocale />
    </SelectedLocalesContainer>
  );
};
