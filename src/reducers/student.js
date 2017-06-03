import * as types from './../actions/types'
import { combineReducers } from 'redux'
import createReducer from '../lib/createReducer'

export const student = combineReducers({
  list: createReducer({}, {
    [types.FETCH_STUDENTS](state, action) {
      return Object.assign({}, state, action.ticket)
    },
  })
})