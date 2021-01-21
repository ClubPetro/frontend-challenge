import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3065",
  responseType: "json",
  // timeout: 20000
});

const apiCountries = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2',
});


export {
  axiosInstance, apiCountries
}
