import { ISelectedLocales } from './../../context/SelectedLocalesContext/SelectedLocalesContext';
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

    setSelecteds([...selecteds, newLocale]);
  };

  const removeCountry = (indexPosition: number) => {
    const selectedCountry = selecteds.filter(
      (locale: ISelectedLocales, index) => {
        return indexPosition !== index;
      }
    );
    setSelecteds([...selectedCountry]);
  };

  const editCountry = (indexPosition: number, locale: string, date: string) => {
    const selectedCountry = selecteds.map((item: ISelectedLocales, index) => {
      if (indexPosition === index) {
        return {
          selectedCountry: item.selectedCountry,
          locale,
          date,
        };
      }
      return item;
    });

    setSelecteds([...selectedCountry]);
  };

  return {
    addCountry,
    editCountry,
    removeCountry,
    selectedLocales: selecteds,
  };
}
