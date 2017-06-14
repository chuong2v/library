import Promise from 'bluebird';
import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import './style.css'
import styles from './styles'
import { Translate } from 'react-redux-i18n'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';
import StudentTable from './components/StudentTable'
import AddStudentPanel from './components/AddStudentPanel';

import { ActionCreators } from './../../../../actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class StudentContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      addNew: false
    };
  }

  handleAddNewStudents(event) {
    this.setState({ addNew: true })
  }

  handleOnAddNewStudents(studentnames) {
    Promise.each(studentnames, studentName =>
      studentName && this.props.actions.addStudentToGroup(this.props.selectedGroup, studentName)
    ).then(() => {
      this.setState({ addNew: false })
    });
  }

  handleOnCancelAddNew() {
    this.setState({ addNew: false })
  }

  render() {
    const { groups, students, actions } = this.props;
    return (
      <div className='student-container'>
        <Paper className='student' style={styles.container} zDepth={1} >
          <div className='student-bar'>
            <Translate value='student.title' />
            <FloatingActionButton mini
              className='student-add-button'
              onTouchTap={this.handleAddNewStudents.bind(this)}>
              {this.state.addNew && <ContentClear /> || <ContentAdd />}
            </FloatingActionButton>
          </div>
          <AddStudentPanel
            onAddNew={(studentNames) => this.handleOnAddNewStudents(studentNames)}
            onCancel={() => this.handleOnCancelAddNew()}
            show={this.state.addNew}
            actions={this.props.actions}
            selectedGroup={this.props.selectedGroup} />
          <StudentTable groups={groups} students={students} {...actions} />
        </Paper>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    addNew: state.student.addNew,
    students: state.student.list,
    groups: state.group.list,
    selectedGroup: state.group.selected
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer)