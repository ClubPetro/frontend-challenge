import React from 'react';
import allCountry from '../../service/countries';
import { UseCountriesHookReturn } from './useCountries.interface';

export function useCountries(): UseCountriesHookReturn {
  const [countries, setCountries] = React.useState([]);

  const findAllCountries = () => {
    allCountry
      .get('')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  React.useEffect(() => {
    findAllCountries();
  }, []);

  return {
    findAllCountries,
    countries,
  };
}
