import types from './../actions/types'
// import { combineReducers } from 'redux'
// import createReducer from '../lib/createReducer'


const initialState = {
  list: [],
  addNew: false,
  selected: -1
};

export function group(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NEW_GROUP:
      let newGroupsIncludeNewGroup = [
        action.payload, ...state.list
      ];
      return Object.assign({}, state, { list: newGroupsIncludeNewGroup });

    case types.ADD_EMPTY_GROUP:
      let newGroupIncludeEmptyGroup = [{
        id: '',
        groupName: '',
        del: 0
      }, ...state.list];
      return Object.assign({}, state, { list: newGroupIncludeEmptyGroup });
    case types.EDIT_GROUP:
      let newGroupsAfterEdited = state.list.map(group =>
        group.id === action.payload.id ?
          Object.assign({}, group, { groupName: action.payload.groupName }) :
          group
      );
      return Object.assign({}, state, { list: newGroupsAfterEdited });

    case types.DELETE_GROUP:
      let newGroupsAfterDeleted = state.list.filter(group =>
        group.id !== action.payload
      );
      return Object.assign({}, state, { list: newGroupsAfterDeleted });

    case types.GROUP_FETCH:
      return Object.assign({}, state, { list: action.payload });
    case types.SET_STATE_ADD_NEW_GROUP:
      return Object.assign({}, state, { addNew: action.payload });
    case types.SET_SELECTED_GROUP:
      return Object.assign({}, state, { selected: action.payload });
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