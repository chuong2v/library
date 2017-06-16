import api from './config'

export function fetch() {
  return api.get('students?_sort=id&_order=desc')
}

export function create(params) {
  return api.post('students', params)
}

export function update(id, params) {
  return api.put(`students/${id}`, params)
}

export function remove(idGroup, idStudent) {
  return api.delete(`groups/${idGroup}/students/${idStudent}`)
}
