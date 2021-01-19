import axios from 'axios';

const goalsApi = axios.create({
  baseURL: "http://localhost:3333/goals"
});

export default goalsApi;