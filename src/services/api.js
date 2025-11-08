import axios from 'axios'

const api = axios.create({
  baseURL: 'https://cadastro-api-jctg.onrender.com' // <-- URL pública da sua API no Render
})

export default api 
