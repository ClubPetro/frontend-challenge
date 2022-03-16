import axios from 'axios';

const allCountry = axios.create({
  baseURL: 'https://restcountries.com/v2/all',
});

export default allCountry;
