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
import Login from './pages/Login'
import Home from './pages/Home'
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
        <div>
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleMenubar.bind(this)}
          >
          </AppBar>
          {/*<RaisedButton
            label="Toggle Drawer"
            onTouchTap={this.handleMenubar.bind(this)}
          />*/}
          <Drawer open={this.state.open}>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={Login} />
          <Route path="/topics" component={Login} />
        </div>
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