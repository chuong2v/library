import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
// import { fetchGroupsFromApi } from './actions/group'
import * as GroupActions from './actions/group';
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
    super(props);
    this.state = {
      open: false
    }
  }
  componentDidMount() {
    this.props.actions.fetchGroupsFromApi()
  }
  handleMenubar() {
    this.setState({ open: true })
  }
  render() {
    const { groups, students, actions } = this.props;
    return (
      <Router>
        <Route exact path="/" component={props => <UserManagement groups={groups} students= {students} actions={actions}/>} />
        {/*<Route exact path="/" component={props => <UserManagement {...props}/>} />*/}
      </Router >
    )
  }
}

function mapStateToProps(state) {
  return {
    groups: state.default.groups,
    students: state.default.students
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GroupActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)