import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import { Provider } from 'react-redux'
import {
	createStore, applyMiddleware,
	compose
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {logger} from 'redux-logger'
import reducer from './reducers'

// const loggerMiddleware = createLogger({})

function configureStore(initialState) {
	const enhancer = compose(
		applyMiddleware(
			thunkMiddleware,
			logger
		)
	)
	return createStore(reducer, initialState, enhancer)
}

const store = configureStore({})
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

registerServiceWorker();
