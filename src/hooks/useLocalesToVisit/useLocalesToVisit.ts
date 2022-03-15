import React, { useContext } from 'react';
import SelectedLocalesContext from '../../context/SelectedLocalesContext/SelectedLocalesContext';
import { ApiCountriesResponse } from '../useCountries/useCountries.interface';
import { PropsReturnHook } from './useLocalesToVisit.interface';

export function useLocalesToVisit(
  countries: ApiCountriesResponse[]
): PropsReturnHook {
  const { selecteds, setSelecteds } = useContext(SelectedLocalesContext);

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

    setSelecteds(newLocale);
  };

  return {
    addCountry,
    selectedLocales: selecteds,
  };
}
