import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import UserManagement from './pages/UserManagement'
/**
 * The root component to render all the pages of our website.
 */
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