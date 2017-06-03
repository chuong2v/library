// import student from './student'
import { combineReducers } from 'redux'
import * as student from './student'

export default combineReducers(Object.assign({},
    student
))