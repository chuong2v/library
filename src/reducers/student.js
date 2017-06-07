import types from './../actions/types'
// import { combineReducers } from 'redux'
// import createReducer from '../lib/createReducer'

const initialState = {
  studens: []
};

export default function student(state = initialState, action) {
  switch (action.type) {
    // case types.DELETE_STUDENT:
    //   let newStudentsAfterDeleted = state.students.filter(student =>
    //   student.idStudent !== action.idStudent
    //   );
    //   return Object.assign({}, state, { students: newStudentsAfterDeleted });

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