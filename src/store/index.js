import {
  createStore, applyMiddleware,
  compose
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from './../reducers'
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n'
import translationsObject from './../locale'

const loggerMiddleware = createLogger({
  diff: true,
  duration: true
})

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
  return createStore(
    reducers,
    initialState,
    enhancer
  )
}

const store = configureStore({})

syncTranslationWithStore(store)
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('en'))

export default store

