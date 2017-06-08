import React, { Component } from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import Group from '../group/Group'
import Student from '../student/Student'
import styles from './styles'
import { ActionCreators } from '../../actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class GroupAndStudent extends Component {
  componentDidMount() {
    this.props.actions.fetchGroupsFromApi().then(()=> {
      let selectedGroup = this.props.groups[0]
      this.props.actions.setSelectedGroup(selectedGroup)
    })
  }
  render() {
    const { groups, students, actions } = this.props;
    return (
      <div style={styles.root}>
        <GridList
          cols={2}
          padding={1}
          style={styles.gridList}
        >
          <Group groups={groups} actions={actions} />
          <Student groups={groups} students={students} actions={actions} />
        </GridList>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    groups: state.group.list,
    students: state.student.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupAndStudent)