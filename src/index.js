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
import reducer from './reducers'
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
	return createStore(reducer, initialState, enhancer)
}

const store = configureStore({})
console.log("store ", store.getState())
const muiTheme = getMuiTheme({
	appBar: {
    height: 50,
  },
})
ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider muiTheme={muiTheme}>
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
)

registerServiceWorker()
