import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { fetchGroupsFromApi } from './actions/group'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import UserManagement from './pages/userManagement'
import {
  AppBar,
  MenuItem,
  Drawer,
  RaisedButton
} from 'material-ui'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  componentDidMount() {
    this.props.fetchGroupsFromApi()
  }
  handleMenubar() {
    this.setState({ open: true })
  }
  render() {
    return (
      <Router>
        <Route exact path="/" component={UserManagement} />
      </Router >
    )
  }
}

function mapStateToProps(state) {
  return {
    groups: state.group.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGroupsFromApi }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)