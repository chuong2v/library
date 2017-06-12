import { createAction } from 'redux-actions'
import types from './types'
import * as GroupActions from './group'
import api from './../api'
const { Student } = api

const removeStudentOutOfList = createAction(types.DELETE_STUDENT, id => id)

export const fetchedStudents = createAction(types.STUDENT_FETCH, students => students)
export const addNewStudentToGroup = createAction(types.ADD_STUDENT_TO_GROUP, student => student)
export const setAddNewStudent = createAction(types.SET_ADD_NEW_STUDENT, isAddNew => isAddNew)

export function deleteStudent(id) {
  return (dispatch, getState) => {
    return Student.remove(id).then(resp => {
      dispatch(removeStudentOutOfList(id))
    })
  }
}

export function editStudent(id, student) {
  return (dispatch, getState) => {
    return Student.update(id, student).then(resp => {
      dispatch(GroupActions.seeStudents(student.groupId))
    })
  }
}
