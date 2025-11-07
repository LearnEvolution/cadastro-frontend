import axios from 'axios'

const api = axios.create({
  baseURL: 'https://cadastro-api-1.onrender.com' // <-- URL pública da sua API no Render
})

export default api
