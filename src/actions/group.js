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
