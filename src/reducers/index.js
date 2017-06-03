import { combineReducers } from 'redux'
import * as student from './student'
import * as group from './group'

export default combineReducers(Object.assign({},
  student,
  group
))