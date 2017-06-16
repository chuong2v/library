import { createAction } from 'redux-actions'
import types from './types'
import * as GroupActions from './group'
import api from './../api'
const { Student } = api

export const fetchedStudents = createAction(types.STUDENT_FETCH, students => students)
export const addNewStudentToGroup = createAction(types.ADD_STUDENT_TO_GROUP, student => student)

let removeStudentOutOfList = createAction(types.DELETE_STUDENT, id => id)
export function deleteStudent(idGroup,idStudent) {
  return (dispatch, getState) => {
    return Student.remove(idGroup, idStudent).then(resp => {
      dispatch(removeStudentOutOfList(idStudent));
    })
  }
}

export function editStudent(selectedGroupId, student) {
  return (dispatch, getState) => {
    return Student.update(student.idStudent, student).then(resp => {
      dispatch(GroupActions.seeStudents(selectedGroupId))
    })
  }
}

// export function editStudent(idGroup, idStudent, studentName) {
//   return { type: types.EDIT_STUDENT, id: idStudent, idGroup: idGroup, studentName: studentName };
// }

