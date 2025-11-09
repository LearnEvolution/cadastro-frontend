import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cadastro-api-jctq.onrender.com' //  URL direta do Render
});

export default api;
