import axios from 'axios';

const apiContries = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/',
});

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export { apiContries, api };
