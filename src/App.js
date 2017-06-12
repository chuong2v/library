import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import UserManagement from './containers/userManagement'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={props => <UserManagement {...props}/>} />
      </Router >
    )
  }
}

export default App