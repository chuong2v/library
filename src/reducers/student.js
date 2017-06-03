import types from './../actions/types'
import { combineReducers } from 'redux'
import createReducer from '../lib/createReducer'

export const student = combineReducers({
  list: createReducer({}, {
    [types.STUDENT_FETCH](state, action) {
      return Object.assign({}, state, action.ticket)
    },
  })
})