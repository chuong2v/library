import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const muiTheme = getMuiTheme({})

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider muiTheme={muiTheme}>
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()
