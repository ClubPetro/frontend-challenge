import { SelectedLocalesContainer } from './styles';
import { CardLocale } from '../../molecules/CardLocale/CardLocale';
import { ReactElement } from 'react';
import { useLocalesToVisit } from '../../../hooks/useLocalesToVisit/useLocalesToVisit';
import { useCountries } from '../../../hooks/useCountries/useCountries';

export const SelectedLocales = (): ReactElement => {
  const { countries } = useCountries();
  const { selectedLocales } = useLocalesToVisit(countries);

  console.log('selectedLocales', selectedLocales);

  return (
    <SelectedLocalesContainer>
      <CardLocale />
    </SelectedLocalesContainer>
  );
};
