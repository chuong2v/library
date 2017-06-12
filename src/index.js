import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {
	createStore, applyMiddleware,
	compose
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from './reducers'
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n'
import translationsObject from './locale'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

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
const muiTheme = getMuiTheme({
	appBar: {
		height: 50,
	},
})

syncTranslationWithStore(store)
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('en'));

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider muiTheme={muiTheme}>
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()
