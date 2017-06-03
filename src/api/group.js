import api from './config'

export function fetch() {
  return api.get('groups')
}