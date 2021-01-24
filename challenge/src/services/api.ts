import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const countriesApi = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/",
});
