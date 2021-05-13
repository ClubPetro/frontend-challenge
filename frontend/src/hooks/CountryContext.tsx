import { createContext, useContext, useState, useCallback } from 'react';
import api from '../services/api';

interface Country {
  flag: string;
  translations: {
    br: string;
  };
}

interface ApiData {
  id: string;
  flag: string;
  name: string;
  local: string;
  date: string;
}

interface HandleAddCountryParams {
  id: string;
  flag: string | undefined;
  name: string;
  local: string;
  date: string;
}

interface UpdatedCountrydata {
  local: string;
  date: string;
}

interface CountryContextData {
  countries: Country[];
  apiData: ApiData[];
  handleDeleteCountry: (id: string) => Promise<void>;
  handleAddCountry: (country: HandleAddCountryParams) => Promise<void>;
  handleUpdateCountry: (id: string, data: UpdatedCountrydata) => Promise<void>;
  handleSetApiData: (data: ApiData[]) => void;
  handleSetRestCountriesData: (data: Country[]) => void;
}

const CountryContext = createContext({} as CountryContextData);

export const CountryProvider: React.FC = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [apiData, setApiData] = useState<ApiData[]>([]);

  const handleDeleteCountry = useCallback(
    async id => {
      const filteredCountries = apiData.filter(country => country.id !== id);
      await api.delete(`/countries/${id}`);
      setApiData(filteredCountries);
    },
    [apiData],
  );

  const handleAddCountry = useCallback(async data => {
    await api.post('/countries', data);
    setApiData(oldState => [...oldState, data]);
  }, []);

  const handleUpdateCountry = useCallback(
    async (id, data) => {
      const updatedCountry = apiData.map(country => {
        if (country.id === id) {
          return {
            ...country,
            ...data,
          };
        }
        return {
          ...country,
        };
      });

      setApiData(updatedCountry);
      await api.patch(`/countries/${id}`, data);
    },
    [apiData],
  );

  const handleSetApiData = useCallback((data: ApiData[]) => {
    setApiData(data);
  }, []);

  const handleSetRestCountriesData = useCallback((data: Country[]) => {
    setCountries(data);
  }, []);

  return (
    <CountryContext.Provider
      value={{
        countries,
        apiData,
        handleDeleteCountry,
        handleAddCountry,
        handleUpdateCountry,
        handleSetApiData,
        handleSetRestCountriesData,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export function useCountry(): CountryContextData {
  const context = useContext(CountryContext);

  if (!context) {
    throw new Error('error');
  }

  return context;
}
