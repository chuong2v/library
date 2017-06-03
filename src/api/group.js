import axios from 'axios'

export function fetch() {
  return axios.get('http://localhost:8080/PGELite/sv/groups')
}