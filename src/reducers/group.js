import types from './../actions/types'
import { combineReducers } from 'redux'
import createReducer from '../lib/createReducer'

export const group = combineReducers({
  list: createReducer([], {
    [types.GROUP_FETCH](state, action) {
      return action.payload || []
    },
    [types.ADD_NEW_GROUP](state, action) {
      return [...state, action.payload]
    },
    [types.EDIT_GROUP](state, action) {
      return state.map(group =>
        group.id === action.payload.id ?
          Object.assign({}, group, { groupName: action.payload.groupName }) :
          group
      );
    },
    [types.DELETE_GROUP](state, action) {
      return state.filter(group => group.id !== action.payload)
    },
    [types.GROUP_FETCH](state, action) {
      return action.payload
    },
  }),
  addNew: createReducer(false, {
    [types.SET_STATE_ADD_NEW_GROUP](state, action) {
      return action.payload
    },
  }),
  selected: createReducer(-1, {
    [types.SET_SELECTED_GROUP](state, action) {
      return action.payload
    },
  }),
})