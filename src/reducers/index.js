import { combineReducers } from 'redux'
import * as student from './student'
import * as group from './group'
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';


export default combineReducers(Object.assign({
    i18n: i18nReducer
  },
  student,
  group
))