import types from './../actions/types'
import { combineReducers } from 'redux'
import createReducer from '../lib/createReducer'

export const group = combineReducers({
  list: createReducer([], {
    [types.GROUP_FETCH](state, action) {
      return action.payload || []
    },
  })
})