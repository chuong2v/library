import { createAction } from 'redux-actions'
import types from './types'
import Api from './../api'

export function fetchGroupsFromApi() {
  return (dispatch, getState) => {
    return Api.Group.fetch().then(resp => {
      console.log("resp ", resp)
      dispatch(fetchGroups(resp))
    })
  }
}

let fetchGroups = createAction(types.GROUP_FETCH, groups => groups)
