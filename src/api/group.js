import api from './config'

export function fetch() {
  return api.get('groups?_sort=id&_order=desc')
}

export function create(params) {
  return api.post('groups', params)
}

export function update(groupId, params) {
  return api.put(`groups/${groupId}`, params)
}

export function remove(groupId) {
  return api.delete(`groups/${groupId}`)
}

export function getGroupStudents(groupId) {
  return api.get(`groups/${groupId}/students`)
}