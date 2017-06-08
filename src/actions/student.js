import { createAction } from 'redux-actions'
import types from './types'
import api from './../api'
const { Student } = api

export const fetchedStudents = createAction(types.STUDENT_FETCH, students => students)
export const addNewStudentToGroup = createAction(types.ADD_STUDENT_TO_GROUP, student => student)

export function deleteStudent(idGroup, idStudent) {
  return { type: types.DELETE_STUDENT, id: idStudent };
}

export function editStudent(idGroup, idStudent, studentName) {
  return { type: types.EDIT_STUDENT, id: idStudent, idGroup: idGroup, studentName: studentName };
}
