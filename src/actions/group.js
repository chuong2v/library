import { createAction } from 'redux-actions'
import types from './types'
import * as StudentActions from './student'
import api from './../api'
const { Group } = api

const fetchGroups = createAction(types.GROUP_FETCH, groups => groups)
const addNewGroupToList = createAction(types.ADD_NEW_GROUP, group => group)
const editGroupInList = createAction(types.EDIT_GROUP, group => group)
const deleteGroupInList = createAction(types.DELETE_GROUP, id => id)

export const setAddNewGroup = createAction(types.SET_STATE_ADD_NEW_GROUP, isAddNew => isAddNew)
export const setSelectedGroup = createAction(types.SET_SELECTED_GROUP, id => id)

export function fetchGroupsFromApi() {
  return (dispatch, getState) => {
    return Group.fetch().then(resp => {
      dispatch(fetchGroups(resp && resp.data || []))
    })
  }
}

export function addNewGroup(groupName) {
  return (dispatch, getState) => {
    return Group.create({ groupName }).then(resp => {
      dispatch(addNewGroupToList(resp.data))
      dispatch(setAddNewGroup(false))
    })
  }
}

export function editGroup(id, groupName) {
  return (dispatch, getState) => {
    return Group.update(id, { groupName }).then(resp => {
      dispatch(editGroupInList(resp.data))
    })
  }
}

export function deleteGroup(id) {
  return (dispatch, getState) => {
    return Group.remove(id).then(resp => {
      dispatch(deleteGroupInList(id))
    })
  }
}

export function seeStudents(id) {
  return (dispatch, getState) => {
    return Group.getGroupStudents(id).then(resp => {
      dispatch(StudentActions.fetchedStudents(resp.data))
    })
  }
}

export function addStudentToGroup(groupId, studentName) {
  return (dispatch, getState) => {
    return Group.addStudentToGroup(groupId, studentName).then(resp => {
      dispatch(StudentActions.addNewStudentToGroup(resp.data))
    })
  }
}