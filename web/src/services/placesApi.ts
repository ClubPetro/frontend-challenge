import axios from 'axios';

const placesApi = axios.create({
  baseURL: "http://localhost:3333/places"
});

export default placesApi;