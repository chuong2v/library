import types from './../actions/types'
// import { combineReducers } from 'redux'
// import createReducer from '../lib/createReducer'

const initialState = {list: []}

export function student(state = initialState, action) {
  switch (action.type) {
    // case types.DELETE_STUDENT:
    //   let newStudentsAfterDeleted = state.students.filter(student =>
    //   student.id !== action.id
    //   );
    //   return Object.assign({}, state, { students: newStudentsAfterDeleted });
    case types.SEE_STUDENT:
      return Object.assign({}, state, { list: action.students });
    // should belong to student reducer. refactor later
    case types.DELETE_STUDENT:
      let newStudentsAfterDeleted = state.list.filter(student =>
        student.id !== action.payload
      );
      return Object.assign({}, state, { list: newStudentsAfterDeleted });

    case types.EDIT_STUDENT:
      let newStudentsAfterEdited = state.list.map(student =>
        student.id === action.id ?
          Object.assign({}, student, { studentName: action.studentName, id: action.id }) :
          student
      );
      return Object.assign({}, state, { list: newStudentsAfterEdited });

    case types.STUDENT_FETCH:
      return Object.assign({}, state, { list: action.payload });

    case types.ADD_STUDENT_TO_GROUP:
      return Object.assign({}, state, { list: [...(state.list), action.payload] });

    default:
      return state;
  }
}

// export const student = combineReducers({
//   list: createReducer([], {
//     [types.STUDENT_FETCH](state, action) {
//       return action.payload || []
//     },
//   })
// })