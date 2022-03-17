import axios from "axios";

const countriesApi = axios.create({
  baseURL: "http://localhost:8000/",
});

export default countriesApi;
