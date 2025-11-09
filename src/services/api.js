import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cadastro-api-jctq.onrender.com'
});

export default api;
