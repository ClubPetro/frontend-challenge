import { useEffect } from 'react';
import axios from 'axios';

import { useCountry } from '../../hooks/CountryContext';
import api from '../../services/api';

import Header from '../../components/Header';
import CreateCardData from '../../components/CreateCardData';
import Card from '../../components/Card';

import { Content } from './styles';

const Home: React.FC = () => {
  const {
    apiData,
    handleDeleteCountry,
    handleSetApiData,
    handleSetRestCountriesData,
  } = useCountry();

  useEffect(() => {
    async function loadApiData(): Promise<void> {
      const response = await api.get('http://localhost:3333/countries');
      handleSetApiData(response.data);
    }

    loadApiData();
  }, [handleSetApiData]);

  useEffect(() => {
    async function loadCountries(): Promise<void> {
      const response = await axios.get('https://restcountries.eu/rest/v2/all');
      handleSetRestCountriesData(response.data);
    }

    loadCountries();
  }, [handleSetRestCountriesData]);

  return (
    <>
      <Header />
      <CreateCardData />
      <Content>
        {apiData.map(country => (
          <Card
            data={country}
            key={country.id}
            onDelete={() => handleDeleteCountry(country.id)}
          />
        ))}
      </Content>
    </>
  );
};

export default Home;
