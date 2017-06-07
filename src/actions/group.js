import { createAction } from 'redux-actions'
import types from './types'
import api from './../api'
const { Group } = api

export function fetchGroupsFromApi() {
  return (dispatch, getState) => {
    return Group.fetch().then(resp => {
      console.log("resp ", resp)
      dispatch(fetchGroups(resp))
    })
  }
}

let fetchGroups = createAction(types.GROUP_FETCH, groups => groups)

export function addNewGroup(groupName) {
  return { type: types.ADD_NEW_GROUP, groupName };
}

export function addEmptyGroup() {
  return { type: types.ADD_EMPTY_GROUP };
}

export function deleteGroup(idGroup) {
  return { type: types.DELETE_GROUP, idGroup };
}

export function editGroup(idGroup, groupName) {
  return { type: types.EDIT_GROUP, idGroup, groupName };
}
const STUDENTS = [
    {
      "idGroup": 2,
      "idStudent": 1,
      "name":"Jack",
      "del": 0
    },
    {
       "idGroup": 2,
      "idStudent": 2,
      "name":"Ben",
      "del": 0
    },
    {
      "idGroup": 2,
      "idStudent": 3,
      "name":"Hama",
      "del": 0
    }
  ];
export function seeStudents(idGroup){
  let students = STUDENTS;//fetchFromAPI;
  if(!idGroup){
    students = [];//assume the idGroup is undefine (belongs to the empty group)
  }
  return {type: types.SEE_STUDENT, students : students};
}


export function deleteStudent(idGroup, idStudent){
  return {type: types.DELETE_STUDENT, idStudent : idStudent};
}
