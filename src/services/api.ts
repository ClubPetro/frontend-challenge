import axios from "axios";

export const apiCountries = axios.create({
  baseURL: process.env.BASE_URL_COUNTRIES,
});

export const apiJsonServer = axios.create({
  baseURL: process.env.BASE_URL_BACKEND_SERVER,
});