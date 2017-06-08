import types from './../actions/types'
import { combineReducers } from 'redux'
import createReducer from '../lib/createReducer'

export const student = combineReducers({
  list: createReducer([], {
    [types.STUDENT_FETCH](state, action) {
      return action.payload || []
    },
    [types.SEE_STUDENT](state, action) {
      return action.payload || []
    },
    [types.DELETE_STUDENT](state, action) {
      return state.filter(student => student.id !== action.payload)
    },
    [types.EDIT_STUDENT](state, action) {
      return state.map(student =>
        student.id === action.id ?
          Object.assign({}, student, { studentName: action.studentName }) :
          student
      )
    },
    [types.ADD_STUDENT_TO_GROUP](state, action) {
      return [...state, action.payload]
    },
  }),
  addNew: createReducer(false, {
    [types.SET_ADD_NEW_STUDENT](state, action) {
      return action.payload
    }
  }),
})