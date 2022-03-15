import React from 'react';
import { ApiCountriesResponse } from '../useCountries/useCountries.interface';
import {
  PropsReturnHook,
  PropsSelectedLocale,
} from './useLocalesToVisit.interface';

export function useLocalesToVisit(
  countries: ApiCountriesResponse[]
): PropsReturnHook {
  const [selectedLocales, setSelectedLocales] = React.useState<
    PropsSelectedLocale[]
  >([]);

  const addCountry = (countryName: string, locale: string, date: string) => {
    const selectedCountry = countries.filter(
      (country: ApiCountriesResponse) => {
        return country.name === countryName;
      }
    );

    const newLocale = {
      selectedCountry: selectedCountry[0],
      locale,
      date,
    };

    setSelectedLocales([...selectedLocales, newLocale]);
  };
  console.log(selectedLocales);

  return {
    addCountry,
    selectedLocales,
  };
}
