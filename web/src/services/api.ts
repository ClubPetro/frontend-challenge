import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3333/places"
});

export default api;