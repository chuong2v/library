import types from './../actions/types'
// import { combineReducers } from 'redux'
// import createReducer from '../lib/createReducer'


const initialState = {
  groups: [
    {
      "idGroup": 2,
      "groupName": "fuck",
      "del": 0
    },
    {
      "idGroup": 3,
      "groupName": "the",
      "del": 0
    },
    {
      "idGroup": 4,
      "groupName": "world",
      "del": 0
    }
  ],
  students:[]
};

export default function group(state = initialState, action) {
  switch (action.type) {
  case types.ADD_NEW_GROUP:
    let newGroupsIncludeNewGroup =  [{
      idGroup: state.groups.reduce((maxId, group) => Math.max(group.idGroup, maxId), -1) + 1,
      groupName: action.groupName,
      del: 0
    }, ...state.groups];
    return Object.assign({}, state, { groups: newGroupsIncludeNewGroup });

  case types.ADD_EMPTY_GROUP:
    let newGroupIncludeEmptyGroup =  [{
      idGroup: '',
      groupName: '',
      del: 0
    }, ...state.groups];
    return Object.assign({}, state, { groups: newGroupIncludeEmptyGroup });
  case types.EDIT_GROUP:
    let newGroupsAfterEdited = state.groups.map(group =>
      group.idGroup === action.idGroup ?
        Object.assign({}, group, { groupName: action.groupName }) :
        group
    );
    return Object.assign({}, state, { groups: newGroupsAfterEdited });

  case types.DELETE_GROUP:
      let newGroupsAfterDeleted = state.groups.filter(group =>
      group.idGroup !== action.idGroup
    );
      return Object.assign({}, state, { groups: newGroupsAfterDeleted });

  case types.SEE_STUDENT:
      return Object.assign({}, state, { students: action.students });
      // should belong to student reducer. refactor later
  case types.DELETE_STUDENT:
      let newStudentsAfterDeleted = state.students.filter(student =>
      student.idStudent !== action.idStudent
      );
      return Object.assign({}, state, { students: newStudentsAfterDeleted });

  case types.EDIT_STUDENT:
      let newStudentsAfterEdited = state.students.map(student=>
        student.idStudent === action.idStudent ?
        Object.assign({}, student, { name: action.studentName, idGroup: action.idGroup }) :
        student
      );
      return Object.assign({}, state, { students: newStudentsAfterEdited });

  default:
    return state;
  }
}

// export const group = combineReducers({
//   list: createReducer([], {
//     [types.GROUP_FETCH](state, action) {
//       return action.payload || []
//     },
//   })
// })