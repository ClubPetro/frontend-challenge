import axios from 'axios';

// https://opentdb.com/api.php?amount=QUANTIDADE
const api = axios.create({
  baseURL: 'https://opentdb.com/api.php',
});

export default api;