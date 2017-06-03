import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchGroupsFromApi } from './actions/group'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class App extends Component {
  componentDidMount() {
    this.props.fetchGroupsFromApi()
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
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