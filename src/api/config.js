import axios from 'axios'

let instance = axios.create({
  baseURL: 'http://localhost:8080/PGELite/sv/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
})

export default instance