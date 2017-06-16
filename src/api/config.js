import axios from 'axios'

let instance = axios.create({
  // baseURL: 'http://localhost:4000/',
  timeout: 1000,
  headers: { 
    'Content-Type': 'application/json'
  }
})

export default instance