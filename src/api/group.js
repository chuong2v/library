import api from './config'

export function fetch() {
  return api.get('groups');
}

export function create(params) {
  return api.post('groups', params)
}

export function update(groupId, params) {
  return api.put(`groups/${groupId}`, params);
}

export function remove(groupId) {
  return api.delete(`groups/${groupId}`)
}

export function getGroupStudents(groupId) {
  return api.get(`groups/${groupId}/students`)
}

export function addStudentToGroup(groupId, studentName) {
  return api.post(`groups/${groupId}/students`, {studentName, groupId})
}