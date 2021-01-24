// import React from 'react'
import axios from 'axios';
import { ICountry } from '../Interfaces/index';

const restCountriesApi = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2',
});

const getCountries = async (): Promise<ICountry[]> => {
  return (await restCountriesApi.get('/all')).data;
};

export default getCountries;
